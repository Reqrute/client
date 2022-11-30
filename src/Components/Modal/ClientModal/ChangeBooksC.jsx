import React, { useState, useEffect} from "react";
import ReadRoom from "./ReadRoom";

function ChangeBooksC({id,UsId, BId, Taken,RRId}) {

const [Book, setBook] = useState([]);
const [BookV, setBookV] = useState(0);
const [Date, setDate] = useState("");

const [BP, setBP] = useState([]);

const [ReadingRoomV, setReadingRoomV] = useState("");

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


async function handlecup(id,BookV,ReadingRoomV,UsId,Date){ 
  const url = `http://localhost:3001/BookAndUser/${id}`;
  const data = { 
    BId  : BookV,
    UsId : UsId,     
    RRId  : ReadingRoomV,
    TakenDate  : Date
    };
    console.log(data);

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

function reset () {
  setBookV(BId);
  setDate(Taken);
  setReadingRoomV(RRId);
}

useEffect(()=>{

  const fetchBook = async() =>{
    const res = await fetch(`http://localhost:3001/Book`);
    const data = await res.json();
    setBook(data)
}

const fetchBookPlace = async() =>{
  const res = await fetch(`http://localhost:3001/Bookplace/Book/${BookV}`);
  const data = await res.json();
  setBP(data)
}
  BookV || setBookV(BId);
    setReadingRoomV(RRId)
    setDate(Taken);

fetchBook();
BookV && fetchBookPlace()

  },[BId,Taken,BookV,RRId]
)

let Bookis;
if (Book) {
  Bookis = Book.map((a) => {
    let { Id,BName} = a;  
    if  ( BookV === Id ) return (
        <option value={Id} selected>{BName}</option>)

    return (
    <option value={Id}>{BName}</option>)
  })
}

let BPis;
if (BP) {
  BPis = BP.map((a) => {
    let { Id,RRId} = a;  
    return (<ReadRoom key={Id} RRId={RRId} Check = {ReadingRoomV}/>)
  })
}
console.log(BookV);
  return (
<div className="modal fade" id="ChangeBooksC" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="ChangeBooksCLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="ChangeBooksCLabel">Change Taken Books</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
        onClick={()=> reset()}
        ></button>
      </div>
      <div className="modal-body">
      <form className="row g-3 needs-validation" noValidate>

              <div className="col-md-6 mb-3">
                <label htmlFor="Books" className="form-label">Book</label>
                <select className="form-select form-select " aria-label=".form-select   example" id="Books"
                onChange={(e) => {
                  setBookV(e.target.value)}}
                  required
                >
                                    <option value= "" ></option>
                  <>
                    {Bookis}
                  </>
                </select>
                <div className="invalid-feedback">
                    Please choose a Book.
                </div>
              </div>


              <div className="col-md-6 mb-3">
                <label htmlFor="TakenDate" className="form-label">Taken Date</label>
                <input type="date" className="form-control" id="TakenDate"
                value={Date} 
                required
                onChange={(e) => {
                  setDate(e.target.value)}}
                />
                                <div className="invalid-feedback">
                    Please enter a Date.
                </div>
              </div>  

              <div className="col-md-12 mb-3">
                <label htmlFor="ReadRm" className="form-label">Reading Room</label>
                <select className="form-select form-select " aria-label=".form-select   example" id="ReadRm"
                onChange={(e) => {
                  setReadingRoomV(e.target.value)}}
                  required
                >
                  <option value= "" ></option>
                  <>
                    {BPis}
                  </>
                </select>
                <div className="invalid-feedback">
                    Please choose a Reading.
                </div>
              </div>


              <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
        onClick={()=> {
          reset()}}
        >Close</button>
        <button type="submit" className="btn btn-primary"
                onClick={()=> {handlecup(id,BookV,ReadingRoomV,UsId,Date)
                }}

        >Submit</button>
      </div>
              
          </form>
      </div>
    </div>
  </div>
</div>
  )
}

export default ChangeBooksC