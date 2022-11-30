import React, { useState, useEffect} from "react";

function ChangeComment({id, BId,RId, UsId}) {

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
  
const [User, setUser] = useState([]);
const [Rate, setRate] = useState([]);

const [UserV, setUserV] = useState("");
const [RateV, setRateV] = useState("");


async function handlecup(id,BId,RateV,UserV){
  const url = `http://localhost:3001/BookARate/${id}`;
  const data = { 
    BId : BId,
     RId : RateV,
      UsId: UserV };
  
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
  } catch (error) {
  console.error('Ошибка:', error);
  }
  }


useEffect(()=>{

  const fetchRate = async() =>{
    const res = await fetch(`http://localhost:3001/Rate`);
    const data = await res.json();
    setRate(data)
}
const fetchClient = async() =>{
  const res = await fetch(`http://localhost:3001/Client`);
  const data = await res.json();
  setUser(data)
}
      fetchRate();
      fetchClient();
      setUserV(UsId);
      setRateV(RId);
  },[UsId,RId]
)

function reset () {
    setUserV(UsId);
    setRateV(RId);
}


let Rateis;
if (Rate) {
  Rateis = Rate.map((a) => {
    let { Id,RateN,Comment} = a;  
   if (RateV === Id)        return (
    <option value={Id} selected>{RateN} - {Comment}</option>)
     
    return (
    <option value={Id}>{RateN} - {Comment}</option>)
  })
}

let Useris;
if (User) {
  Useris = User.map((a) => {
    let { Id,SName,FName,LName} = a;  
    if (UserV === Id)     return (
        <option value={Id} selected>{SName} {FName[0]}.{LName[0]}.</option>)
    return (
    <option value={Id}>{SName} {FName[0]}.{LName[0]}.</option>)
  })
}

  return (
<div className="modal fade" id="ChangeComment" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="ChangeCommentLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="ChangeCommentLabel">Change Comment</h1>
        <button Rate="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
        onClick={()=> reset()}></button>
      </div>
      <div className="modal-body">
      <form className="row g-3 needs-validation" noValidate>
      <div className="col-md-6 mb-3">
                <label htmlFor="User" className="form-label">User</label>
                <select className="form-select form-select " aria-label=".form-select   example" id="User"
                  onChange={(e) => {
                  setUserV(e.target.value)}} required
                >
                    <option value= "" ></option>
                     <> {Useris}</>
                </select>
                <div className="invalid-feedback">
                    Please choose a Client.
                </div>
              </div>
              
              <div className="col-md-6 mb-3">
                <label htmlFor="Rate" className="form-label">Rate</label>
                <select className="form-select form-select " aria-label=".form-select   example" id="Rate"
                  onChange={(e) => {
                  setRateV(e.target.value)}} required
                >
                    <option value= "" ></option>
                    <>{Rateis}</>
                </select>
                <div className="invalid-feedback">
                    Please choose a Rate.
                </div>
              </div>  

              <div className="modal-footer">
        <button Rate="button" className="btn btn-secondary" data-bs-dismiss="modal"
        onClick={()=> reset()}>Close</button>
        <button Rate="submit" className="btn btn-primary"
        onClick={()=> {handlecup(id,BId,RateV,UserV);}}
        >Submit</button>
      </div>
              
          </form>
      </div>
    </div>
  </div>
</div>
  )
}

export default ChangeComment