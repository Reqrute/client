import React, { useState, useEffect} from "react";

function ChangeBook({id}) {

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
    
const [Book, setBook] = useState([]);
const [Author, setAuthor] = useState([]);
const [Type, setType] = useState([]);
const [Genre, setGenre] = useState([]);

const [Name, setName] = useState("");
const [Publisher, setPublisher] = useState("");
const [Release, setRelease] = useState("");
const [AuthorV, setAuthorV] = useState("");
const [TypeV, setTypeV] = useState("");
const [GenreV, setGenreV] = useState("");


async function handlecup(){ 
  const url = `http://localhost:3001/Book/${id}`;
  const data = { 
    BName : Name,
    PDate: Release,
    Publisher:Publisher ,
    AId : AuthorV,
    GId: GenreV,
    TId: TypeV 
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
  } catch (error) {
  console.error('Ошибка:', error);
  }
  }

useEffect(()=>{

  const fetchType = async() =>{
    const res = await fetch(`http://localhost:3001/Type`);
    const data = await res.json();
    setType(data)
}
const fetchGenre = async() =>{
  const res = await fetch(`http://localhost:3001/Genre`);
  const data = await res.json();
  setGenre(data)
}
  const fetchAuthor = async() =>{
    const res = await fetch(`http://localhost:3001/Author`);
    const data = await res.json();
    setAuthor(data)
}

const fetchBook = async() =>{
    const res = await fetch(`http://localhost:3001/Book/${id}`);
    const data = await res.json();
    setName(data.BName);
    setPublisher(data.Publisher);
    setRelease(data.PDate.split("T")[0]);
    setGenreV(data.GId);
    setTypeV(data.TId);
    setAuthorV(data.AId);
    setBook(data);
}
 id && fetchBook();
      fetchAuthor(); 
      fetchType();
      fetchGenre();

  },[id]
)

function reset () {
  setName(Book.BName);
  setPublisher(Book.Publisher);
  setRelease(Book.PDate.split("T")[0]);
  setAuthorV(Book.AId);
  setGenreV(Book.GId);
  setTypeV(Book.TId);
}
let Typeis;
if (Type) {
  Typeis = Type.map((a) => {
    let { Id,NameT} = a;  
    if(TypeV === Id) return (<option value={Id} selected>{NameT}</option>)
    return (
    <option value={Id}>{NameT}</option>)
  })
}
let Genreis;
if (Genre) {
  Genreis = Genre.map((a) => {
    let { Id,NameG} = a;  
    if(GenreV === Id) return (<option value={Id} selected>{NameG}</option>)
    return (
    <option value={Id}>{NameG}</option>)
  })
}

let Authoris;
if (Author) {
  Authoris = Author.map((a) => {
    let { Id,SName,FName,LName} = a;  
    if(AuthorV === Id) return (<option value={Id} selected>{SName} {FName[0]}.{LName[0]}.</option>)
    return (
    <option value={Id}>{SName} {FName[0]}.{LName[0]}.</option>)
  })
}

  return (
<div className="modal fade" id="ChangeBook" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="ChangeBookLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="ChangeBookLabel">Add Book</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
        onClick={()=> reset()}></button>
      </div>
      <div className="modal-body">
      <form className="row g-3 needs-validation" noValidate>
             
      <div className="mb-3">
                <label htmlFor="BookName" className="form-label">Name of Book</label>
                <input type="text" className="form-control" id="BookName"
                                    value={Name} required
                  onChange={(e) => {
                  setName(e.target.value)}}
                />
                                <div className="invalid-feedback">
                    Please enter a Book Name .
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="Publisher" className="form-label">Publisher</label>
                <input type="text"  
                className="form-control" id="Publisher"
                value={Publisher} required
                  onChange={(e) => {
                  setPublisher(e.target.value)}}
                />
                                                <div className="invalid-feedback">
                    Please enter a Publisher.
                </div>
              </div>

              <div className="col-md-6   mb-3">
                <label htmlFor="DateOfRelease" className="form-label">Date Of Release</label>
                <input type="date"  
                className="form-control" id="DateOfRelease"
                value={Release} required
                  onChange={(e) => {
                  setRelease(e.target.value)}}
                />
               <div className="invalid-feedback">
                    Please enter a Date .
                </div>
              </div>

              <div className="col-md-4 mb-3">
                <label htmlFor="Type" className="form-label">Type</label>
                <select className="form-select form-select " aria-label=".form-select   example" id="Type"
                  onChange={(e) => {
                  setTypeV(e.target.value)}} required
                >
                    <option value= "" ></option>
                    <>
                      {Typeis}
                    </>
                </select>
                <div className="invalid-feedback">
                    Please choose a Type .
                </div>
              </div>

              <div className="col-md-4 mb-3">
                <label htmlFor="Genre" className="form-label">Genre</label>
                <select className="form-select form-select " aria-label=".form-select   example" id="Genre"
                  onChange={(e) => {
                  setGenreV(e.target.value)}} required
                >
                   <option value= "" ></option>
                     <> {Genreis}</>
                </select>
                <div className="invalid-feedback">
                    Please choose a Genre.
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="Author" className="form-label">Author</label>
                <select className="form-select form-select " aria-label=".form-select   example" id="Author"
                  onChange={(e) => {
                  setAuthorV(e.target.value)}} required
                >
                    <option value= "" ></option>
                    <>{Authoris}</>
                </select>
                <div className="invalid-feedback">
                    Please choose a Author.
                </div>
              </div>  

              <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
        onClick={()=> reset()}>Close</button>
        <button type="submit" className="btn btn-primary"
           onClick={()=> handlecup()}
        >Submit</button>
      </div>
              
          </form>
      </div>
    </div>
  </div>
</div>
  )
}

export default ChangeBook