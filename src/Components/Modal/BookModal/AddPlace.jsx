import React, { useState, useEffect} from "react";

function AddPlace({BId}) {

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
  
const [Library, setLibrary] = useState([]);
const [ReadingRoom, setReadingRoom] = useState([]);

const [LibraryV, setLibraryV] = useState("");
const [ReadingRoomV, setReadingRoomV] = useState("");
const [Shelving, setShelving] = useState("");
const [Shelf, setShelf] = useState("");


async function handlecup(BId,ReadingRoomV,Shelving,Shelf){ 
  const url = 'http://localhost:3001/Bookplace';
  const data = { BId : BId,
    RRId : ReadingRoomV,
    Shelving: Shelving,
    Shelf:Shelf };
  
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
  const fetchLibrary = async() =>{
    const res = await fetch(`http://localhost:3001/Library`);
    const data = await res.json();
    setLibrary(data)
}

const fetchReadRoom = async() =>{
  const res = await fetch(`http://localhost:3001/ReadingRoom/Library/${LibraryV}`);
  const data = await res.json();
  setReadingRoom(data)
}

      fetchLibrary();
      LibraryV && fetchReadRoom();

  },[LibraryV]
)

function reset () {
  setLibraryV("");
  setReadingRoomV("");
  setShelving("");
  setShelf("");
}

let Libraryis;
if (Library) {
  Libraryis = Library.map((a) => {
    let { Id,NameL} = a;  
    if(LibraryV === Id) return ( <option value={Id} selected>{NameL}</option>)
    return (
    <option value={Id}>{NameL}</option>)
  })
}

let ReadingRoomdis;
if (ReadingRoom) {
  ReadingRoomdis = ReadingRoom?.map((a) => {
    let { Id, Number} = a;  
 if(ReadingRoomV === Id) return ( <option value={Id} selected>Number {Number}</option>)
    return (
      <option value={Id}>Number {Number}</option>)
  })
}

  return (
<div className="modal fade" id="AddPlace" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="AddPlaceLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="AddPlaceLabel">Add Book Place</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
        onClick={()=> reset()}></button>
      </div>
      <div className="modal-body">
      <form className="row g-3 needs-validation" noValidate>
              <div className="mb-3">

              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="Shelving" className="form-label">Shelving</label>
                <input type="number"  min="1" max="30"
                className="form-control" id="Shelving"
                value={Shelving}   required
                onChange={(e) => {
                  setShelving(e.target.value)}}
                />
                <div className="invalid-feedback">
                    Please enter a Shelving.
                </div>
              </div>

              <div className="col-md-6   mb-3">
                <label htmlFor="Shelf" className="form-label">Shelf</label>
                <input type="number"  min="1" max="50"
                className="form-control" id="Shelf"
                value={Shelf}   required
                onChange={(e) => {
                  setShelf(e.target.value)}}
                />
                                <div className="invalid-feedback">
                    Please enter a Shelf.
                </div>
              </div>


              <div className="col-md-8 mb-3">
                <label htmlFor="LibraryPla" className="form-label">Library</label>
                <select className="form-select form-select " aria-label=".form-select   example" id="LibraryPla"
                onChange={(e) => {
                  setLibraryV(e.target.value)}}   required
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

              <div className="col-md-4 mb-3">
                <label htmlFor="ReadingRoomPla" className="form-label">ReadingRoom</label>
                <select className="form-select form-select " aria-label=".form-select   example" id="ReadingRoomPla"
                        required             onChange={(e) => {
                  setReadingRoomV(e.target.value)}}>
                       <option value= "" ></option>
                    <>
                      {ReadingRoomdis}
                    </>
                </select>
                <div className="invalid-feedback">
                    Please choose a ReadingRoom.
                </div>
              </div>

              <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
        onClick={()=> reset()}>Close</button>
        <button type="submit" className="btn btn-primary"
                 onClick={()=> handlecup(BId,ReadingRoomV,Shelving,Shelf)}
        >Submit</button>
      </div>
              
          </form>
      </div>
    </div>
  </div>
</div>
  )
}

export default AddPlace