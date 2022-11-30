import React, { useState, useEffect } from "react";

function ChangeEmployer({id,RRId}) {
    
const [Employer, setEmployer] = useState([]);
const [Address, setAdress] = useState([]);

const [First, setFirst] = useState("");
const [Second, setSecond] = useState("");
const [Last, setLast] = useState("");
const [AddressV, setAddressV] = useState("");
const [Number, setNumber] = useState("");
const [Flat, setFlat] = useState("");


async function handlecup(First,Second,Last,Address,Number,Flat){ 

  const url = `http://localhost:3001/Address/${Address.Id}`;
  const data = { 
    Street : AddressV,
    NumberH : Number,
    Flat: Flat ,
  };
  try {
  
  const response = await fetch(url, {
  method: 'PUT', // или 'PUT'
  body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
  headers: {
  'Content-Type': 'application/json'
  }
  });
  const json = await response.json();
  console.log('Успех:', JSON.stringify(json));


  const url2 = `http://localhost:3001/Employer/${id}`;
  const data2 = { 
    AdrId : +json.id,
    SName : Second,
    FName: First ,
    LName : Last,
    RRId : RRId
  };

  const response2 = await fetch(url2, {
    method: 'PUT', // или 'PUT'
    body: JSON.stringify(data2), // данные могут быть 'строкой' или {объектом}!
    headers: {
    'Content-Type': 'application/json'
    }
    });
    const json2 = await response2.json();
    console.log('Успех:', JSON.stringify(json2));



  } catch (error) {
  console.error('Ошибка:', error);
  }
  }


useEffect(()=>{

    const fetchEmployer = async() =>{
      const res = await fetch(`http://localhost:3001/Employer/${id}`);
      const data = await res.json();
      setEmployer(data);
      setFirst(data[0].FName);
      setSecond(data[0].SName);
      setLast(data[0].LName);
  }
  const fetchAdress = async() =>{
    const res = await fetch(`http://localhost:3001/Address/${Employer[0]?.AdrId}`);
    const data = await res.json();
    setAdress(data);
    setAddressV(data.Street);
    setNumber(data.NumberH);
    setFlat(data.Flat);
}
  
  fetchEmployer();
  Employer[0]?.AdrId && fetchAdress();        

      },[id,Employer[0]?.AdrId]
  )

function reset () {
setFirst(Employer[0].FName);
setSecond(Employer[0].SName);
setLast(Employer[0].LName);
setAddressV(Address.Street);
setNumber(Address.NumberH);
setFlat(Address.Flat); 
}

  return (
<div className="modal fade" id="ChangeEmployer" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="ChangeEmployerLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="ChangeEmployerLabel">Add Emloyer</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
         onClick={()=> reset()}
        ></button>
      </div>
      <div className="modal-body">
          <form className="row g-3 needs-validation" noValidate>

          <div className="col-md-4 mb-3">
                <label htmlFor="FirstNameEmp" className="form-label">First Name</label>
                <input type="text" className="form-control" id="FirstNameEmp"
                                  value={First} 
                onChange={(e) => {
                  setFirst(e.target.value)}}
                  required
                />
                    <div className="invalid-feedback">
                    Please enter a First Name.
                </div>
              </div>

              <div className="col-md-4 mb-3">
                <label htmlFor="SecondNameEmp" className="form-label">Second Name</label>
                <input type="text" className="form-control" id="SecondNameEmp"
                                  value={Second} 
                onChange={(e) => {
                  setSecond(e.target.value)}}
                  required
                />
                                    <div className="invalid-feedback">
                    Please enter a Second Name.
                </div>
              </div>

              <div className="col-md-4 mb-3">
                <label htmlFor="LastNameEmp" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="LastNameEmp"
                value={Last} 
                onChange={(e) => {
                  setLast(e.target.value)}}
                  required
                />
                                    <div className="invalid-feedback">
                    Please enter a Last Name.
                </div>
              </div>  

              <div className="mb-3 col-md-8">
                <label htmlFor="AddressEmp" className="form-label">District</label>
                <input type="text" 
                value={AddressV} 
                onChange={(e) => {
                  setAddressV(e.target.value)}}
                  required
                className="form-control" id="AddressEmp"/>
                                    <div className="invalid-feedback">
                    Please enter a District.
                </div>
              </div>

              <div className="mb-3 col-md-2">
                <label htmlFor="DisNumb" className="form-label">Number</label>
                <input type="number" min="1" max="100"
                value={Number} 
                onChange={(e) => {
                  setNumber(e.target.value)}}
                  required
                className="form-control" id="DisNumb"/>
                                    <div className="invalid-feedback">
                    Please enter a Number.
                </div>
              </div>  
              
                <div className="mb-3 col-md-2">
                <label htmlFor="AddFlat" className="form-label">Flat</label>
                <input type="number" min="1" max="100"
                value={Flat} 
                onChange={(e) => {
                  setFlat(e.target.value)}}
                className="form-control" id="AddFlat"/>
              </div>

              <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
         onClick={()=> reset()}
        >Close</button>
        <button type="submit" className="btn btn-primary"
                         onClick={(e)=> {handlecup(First,Second,Last,Address,Number,Flat)} }
        >Submit</button>
      </div>
              
          </form>
      </div>

    </div>
  </div>
</div>
  )
}

export default ChangeEmployer