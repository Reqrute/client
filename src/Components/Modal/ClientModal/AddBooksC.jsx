import React, { useState, useEffect} from "react";
import ReadRoom from "./ReadRoom";

function AddBooksC({UsId}) {

const [Book, setBook] = useState([]);


const [BP, setBP] = useState([]);

const [ReadingRoomV, setReadingRoomV] = useState("");
const [BookV, setBookV] = useState("");
const [Date, setDate] = useState("");

function reset () {
  setBookV("");
  setDate("");
  setReadingRoomV("");
}

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

async function handlecup(BId,ReadingRoomV,UsId,Date){ 
  const url = 'http://localhost:3001/BookAndUser';
  const data = { 
    BId : BId,
    TakenDate : Date,
    RRId : ReadingRoomV,
    UsId:UsId };
  
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
  } catch (error) {
  console.error('Ошибка:', error);
  }
  }

useEffect(()=>{

const fetchBookPlace = async() =>{
  const res = await fetch(`http://localhost:3001/Bookplace/Book/${BookV}`);
  const data = await res.json();
  setBP(data)
}

  const fetchBook = async() =>{
    const res = await fetch(`http://localhost:3001/Book`);
    const data = await res.json();
    setBook(data);
}
fetchBook();
BookV && fetchBookPlace()

  },[BookV]
)

let Bookis;
if (Book) {
  Bookis = Book.map((a) => {
    let { Id,BName} = a;  
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

  return (
<div className="modal fade" id="AddBooksC" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="AddBooksCLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="AddBooksCLabel"> Add Taken Books</h1>
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
                <select className="form-select" aria-label=".form-select   example" id="ReadRm"
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
        onClick={()=> reset()}
        >Close</button>
        <button type="submit" className="btn btn-primary"
        onClick={()=> handlecup(BookV,ReadingRoomV,UsId,Date)}
        >Submit</button>
      </div>
              
          </form>
      </div>
    </div>
  </div>
</div>
  )
}

export default AddBooksC