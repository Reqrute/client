import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ChangeAuthor from '../../Components/Modal/AuthorModal/ChangeAuthor';
import AuthorReport from '../../Components/Modal/AuthorModal/AuthorReport';
import "./Dinamic.css"


const LDinamic = () => {
  let { id } = useParams();

  let Bookis;

  const [Author, setLibrary] = useState([]);
  const [Book, setBook] = useState([]);

  
  useEffect(()=>{
    const fetchLibrary = async() =>{
        const res = await fetch(`http://localhost:3001/Author/${id}`);
        const data = await res.json();
        setLibrary(data)
    }
    const fetchBook = async() =>{
      const res = await fetch(`http://localhost:3001/Book/Author/${id}`);
      const data = await res.json();
      setBook(data)
  }
        fetchLibrary(); 
        fetchBook();
    },[id]
)
  
if (Book) {
  Bookis = Book.map((a) => {
    let { id,BName,PDate} = a;  

    return (
      <div
      className="mm border pt-3 pb-3 border-dark col-2  position-relative text-dark rounded mb-4"
       key={id}>
       <div className="fs-3 fw-normal fw-semibold text-center">Book's Name:<br/> {BName}</div>
       <div className="fs-3 fw-normal fw-semibold text-center">Release date:<br/> {PDate?.split("T")[0]} </div>
     </div> )
  })
}

                
  return (
    <>
    <ChangeAuthor id = {id}/>
    <AuthorReport id = {id} />
    <div className= "main A">
    <div className= "sub">
    <div className= "container"> 
        <div className="pt-3 mb-3" >
          <div className="col-lg-12 mb-4 position-relative text-dark">
            <div  className= "cards carda cardf">
              <div className= "content">
              <div className="mb-3 d-flex flex-row justify-content-center row">
                <div className="fs-2 fw-normal fw-semibold text-center  border-bottom border-dark mb-3 pb-2">Author</div>

                <div className="fs-4 fw-normal col-sm-4 col-12 text-center"> Name: <br/>{Author.FName}</div>
                <div className="fs-4 fw-normal col-sm-4 col-12 text-center"> SurName: <br/>{Author.SName}</div>
                <div className="fs-4 fw-normal col-sm-4 col-12 text-center"> Last Name: <br/>{Author.LName}</div>

                <div className="fs-4 fw-normal col-sm-5 col-12 text-center">Date of Birth:<br/>{Author?.BDate?.split("T")[0]}</div>
                <div className="fs-4 fw-normal col-sm-5 col-12 text-center mb-3">Date of Death: <br/>{Author?.DDate?.split("T")[0] || "Alive"}</div>
                          
                      <button className="position-absolute  btn btn-outline-warning deletebtn" data-bs-toggle="modal" data-bs-target="#ChangeAuthor"
                      onClick={(e) => {

                        e.stopPropagation()}}
                      >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
</svg>
                      </button>

                
                <div className="position-relative">
                <div className="fs-2 fw-normal fw-semibold text-center border-top border-bottom border-dark mb-3 pt-2 pb-2 ">Writings</div>
              <div className="d-flex flex-row justify-content-evenly row">
              {Bookis}
              </div>
              </div>                 
              
              <div className="fs-2  fw-semibold text-center border-top  border-dark ">
                       <button type="button" className="btn btn-outline-dark p-3 btn-lg mt-3" data-bs-toggle="modal" data-bs-target="#AuthorReport"
                      onClick={(e) => {
                      e.stopPropagation();}}
                      >Report
                        <img className="image imga img-fluid " src=" " alt = ""/>
                      </button>
                   </div>       
              </div>
              </div>
            </div> 
          </div>
        </div>
      </div>  
    </div>
    </div>
  </>
  );
};

export default LDinamic;