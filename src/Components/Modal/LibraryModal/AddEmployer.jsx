import React, { useState} from "react";

function AddEmployer({RRId}) {

const [First, setFirst] = useState("");
const [Second, setSecond] = useState("");
const [Last, setLast] = useState("");
const [Address, setAddress] = useState("");
const [Number, setNumber] = useState("");
const [Flat, setFlat] = useState("");

(() => {

  const forms = document.querySelectorAll('.needs-validation')

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

async function handlecup(First,Second,Last,Address,Number,Flat){ 

  const url = 'http://localhost:3001/Address';
  const data = { 
    Street : Address,
    NumberH : Number,
    Flat: Flat ,
  };
  
  try {
  
  const response = await fetch(url, {
  method: 'POST', // или 'PUT'
  body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
  headers: {
  'Content-Type': 'application/json'
  }
  });
  const json = await response.json();
  console.log('Успех:', JSON.stringify(json));


  const url2 = 'http://localhost:3001/Employer';
  const data2 = { 
    AdrId : json.Id,
    SName : Second,
    FName: First ,
    LName : Last,
    RRId : RRId
  };

  const response2 = await fetch(url2, {
    method: 'POST', // или 'PUT'
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



function reset () {
setFirst("");
setSecond("");
setLast("");
setAddress("");
setNumber("");
setFlat(""); 
}

  return (
<div className="modal fade" id="AddEmployer" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="AddEmployerLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="AddEmployerLabel">Add Emloyer</h1>
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
                value={Address} 
                onChange={(e) => {
                  setAddress(e.target.value)}}
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

export default AddEmployer