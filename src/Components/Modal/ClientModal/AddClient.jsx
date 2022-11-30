import React, { useState, useEffect} from "react";

function AddClient() {

const [Library, setLibrary] = useState("");
const [Subscribe, setSubscribe] = useState("");
const [ReadingRoom, setReadingRoom] = useState("");

const [First, setFirst] = useState("");
const [Second, setSecond] = useState("");
const [Last, setLast] = useState("");
const [Address, setAddress] = useState("");
const [Flat, setFlat] = useState("");
const [Number, setNumber] = useState("");
const [WorkAddress, setWorkAddress] = useState("");
const [Profession, setProfession] = useState("");
const [WorkNumber, setWorkNumber] = useState("");
const [LibraryV, setLibraryV] = useState("");
const [ReadingRoomV, setReadingRoomV] = useState("");
const [SubscribeV, setSubscribeV] = useState("");
const [DSubcribe, setDSubcribe] = useState("");


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

async function handlecup(){ 

  const url = 'http://localhost:3001/Address';
  const data = { 
    Street : Address,
    NumberH : Number,
    Flat: Flat ,
  };
  console.log(data);
  const url2 = 'http://localhost:3001/WorkAddress';
  const data2 = { 
    Street : WorkAddress,
    NumberH : WorkNumber,
    Special: Profession ,
  };
  console.log(data2);
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

  const response2 = await fetch(url2, {
    method: 'POST', // или 'PUT'
    body: JSON.stringify(data2), // данные могут быть 'строкой' или {объектом}!
    headers: {
    'Content-Type': 'application/json'
    }
    });
    const json2 = await response2.json();
    console.log('Успех:', JSON.stringify(json2));


  const url3 = 'http://localhost:3001/Client'; 
  const data3 = { 
    AId : json.Id,
    AddresW : json2.Id,
    SName: Second ,
    FName : First,
    LName: Last
  };
  console.log(data3);
  const response3 = await fetch(url3, {
    method: 'POST', // или 'PUT'
    body: JSON.stringify(data3), // данные могут быть 'строкой' или {объектом}!
    headers: {
    'Content-Type': 'application/json'
    }
    });
    const json3 = await response3.json();
    console.log('Успех:', JSON.stringify(json3));


    const url4 = 'http://localhost:3001/UserASub';  
    const data4 = { 
      CDate : DSubcribe,
      SubId : +SubscribeV,
      RRId: +ReadingRoomV ,
      UsId : json3.Id,
    };
    console.log(data4);
    const response4 = await fetch(url4, {
      method: 'POST', // или 'PUT'
      body: JSON.stringify(data4), // данные могут быть 'строкой' или {объектом}!
      headers: {
      'Content-Type': 'application/json'
      }
      });
      const json4 = await response4.json();
      console.log('Успех:', JSON.stringify(json4));


  } catch (error) {
  console.error('Ошибка:', error);
  }
  }


function reset () {
  setFirst("");
  setSecond("");
  setLast("");
  setAddress("");
  setFlat("");
  setNumber("");
  setWorkAddress("");
  setProfession("");
  setWorkNumber("");
  setSubscribeV("");
  setLibraryV("");
  setReadingRoom("");
}

useEffect(()=>{

  const fetchLibrary = async() =>{
    const res = await fetch(`http://localhost:3001/Library`);
    const data = await res.json();
    setLibrary(data)
}
const fetchSubscribe = async() =>{
  const res = await fetch(`http://localhost:3001/Subscribe`);
  const data = await res.json();
  setSubscribe(data)
}

const fetchReadRoom = async() =>{
  const res = await fetch(`http://localhost:3001/ReadingRoom/Library/${LibraryV}`);
  const data = await res.json();
  setReadingRoom(data)
}

      fetchSubscribe();
      fetchLibrary();
      LibraryV && fetchReadRoom();

  },[LibraryV]
)

let Libraryis;
if (Library) {
  Libraryis = Library.map((a) => {
    let { Id,NameL} = a;  
    return (
    <option value={Id}>{NameL}</option>)
  })
}

let Subscribeis;
if (Subscribe) {
  Subscribeis = Subscribe.map((a) => {
    let { Id,TimeS,Cost} = a;  
    return (
    <option value={Id}>Year: {TimeS} - Price: {Cost} rubles</option>)
  })
}

let ReadingRoomdis;
if (ReadingRoom) {
  ReadingRoomdis = ReadingRoom?.map((a) => {
    let { Id, Number} = a;  

    return (
      <option value={Id}>Number {Number}</option>)
  })
}


  return (
<div className="modal fade" id="AddClient" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="AddClientLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="AddClientLabel">Add Client</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
        onClick={()=> reset()}
        ></button>
      </div>
      <div className="modal-body">
      <form className="row g-3 needs-validation" noValidate>
              <div className="col-md-4 mb-3">
                <label htmlFor="FirstNameCli" className="form-label">First Name</label>
                <input type="text" className="form-control" id="FirstNameCli"
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
                <label htmlFor="SecondNameCli" className="form-label">Second Name</label>
                <input type="text" className="form-control" id="SecondNameCli"
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
                <label htmlFor="LastNameCli" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="LastNameCli"
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
                <label htmlFor="AddressCli" className="form-label">District</label>
                <input type="text" 
                value={Address} 
                onChange={(e) => {
                  setAddress(e.target.value)}}   required
                className="form-control" id="AddressCli"/>
                 <div className="invalid-feedback">
                    Please enter a District.
                </div>
              </div>

              <div className="mb-3 col-md-2">
                <label htmlFor="DisNumbCli" className="form-label">Number</label>
                <input type="number" min="1" max="100"
                value={Number} 
                onChange={(e) => {
                  setNumber(e.target.value)}}   required
                className="form-control" id="DisNumbCli"/>
                 <div className="invalid-feedback">
                    Please enter a Number.
                </div>
              </div>

              <div className="mb-3 col-md-2">
                <label htmlFor="ApartNumCli" className="form-label">Apartment</label>
                <input type="number" min="1" max ="100"
                value={Flat} 
                onChange={(e) => {
                  setFlat(e.target.value)}}   
                className="form-control" id="ApartNumCli"/>
              </div>

              <div className="mb-3 col-md-7">
                <label htmlFor="AddressWork" className="form-label">Work Address</label>
                <input type="text"  
                className="form-control" id="AddressWork"
                value={WorkAddress}    required
                onChange={(e) => {
                  setWorkAddress(e.target.value)}}
                />
                 <div className="invalid-feedback">
                    Please enter a District.
                </div>
              </div>

              <div className="mb-3 col-md-2">
                <label htmlFor="DisWorkNumbCli" className="form-label">Number</label>
                <input type="number" min="1" max="100"
                value={WorkNumber}    required
                onChange={(e) => {
                  setWorkNumber(e.target.value)}}
                className="form-control" id="DisWorkNumbCli"/>
                 <div className="invalid-feedback">
                    Please enter a Number.
                </div>
              </div>

              <div className="col-md-3 mb-3">
                <label htmlFor="profession" className="form-label">Profession</label>
                <input type="text" 
                className="form-control" id="profession"
                value={Profession}    required
                onChange={(e) => {
                  setProfession(e.target.value)}}
                />
                 <div className="invalid-feedback">
                    Please enter a Profession.
                </div>
              </div>

              <div className="col-md-4 mb-3">
                <label htmlFor="LibraryCli" className="form-label">Library</label>
                <select className="form-select form-select " aria-label=".form-select   example" id="LibraryCli"
                onChange={(e) => {
                  setLibraryV(e.target.value)}}    required
                >
                  <option value= "" ></option>
                  <>
                    {Libraryis}
                  </>
                </select>
                <div className="invalid-feedback">
                   Please choose a Library.
                </div>
              </div>

              <div className="col-md-2   mb-3">
                <label htmlFor="DateOfSubcribe" className="form-label">Date Of Subcribe</label>
                <input type="date"  
                className="form-control" id="DateOfSubcribe"
                value={DSubcribe}    required
                  onChange={(e) => {
                  setDSubcribe(e.target.value)}}
                />
                                 <div className="invalid-feedback">
                    Please enter a Date.
                </div>
              </div>

              <div className="col-md-2 mb-3">
                <label htmlFor="ReadingRoomCli" className="form-label">ReadingRoom</label>
                <select className="form-select form-select " aria-label=".form-select   example" id="ReadingRoomCli"
                                  required   onChange={(e) => {
                  setReadingRoomV(e.target.value)}}>
                                  <option value= "" ></option>
                    <>
                      {ReadingRoomdis}
                    </>
                </select>
                <div className="invalid-feedback">
                   Please choose a ReadRoom.
                </div>
              </div>

              <div className="col-md-4 mb-3">
                <label htmlFor="Subscribe" className="form-label">Subscribe </label>
                <select className="form-select form-select " aria-label=".form-select   example" id="Subscribe"
                    required onChange={(e) => {
                    setSubscribeV(e.target.value)}}
                >
                                  <option value= "" ></option>
                    <>
                      {Subscribeis}
                    </>
                </select>
                <div className="invalid-feedback">
                   Please choose a Subcribe.
                </div>
              </div>

              <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
        onClick={()=> reset()}
        >Close</button>
        <button type="submit" className="btn btn-primary"
          onClick={(e)=> {handlecup();} }
        >Submit</button>
      </div>
              
          </form>
      </div>
    </div>
  </div>
</div>
  )
}

export default AddClient