import React from "react";
import { useNavigate } from "react-router-dom";
import './Cards.css'

const Card = ({page,result,firstcallback}) => {
  let display;
  let navigate = useNavigate();

  function swap(root,id){
    navigate(`/${root}/${id}`);
}

  if (result && page === "Library") {
    display = result.map((x) => {
      let { Id, NameL, Phone} = x;
      return (
         <div
          style={{ textDecoration: "none", cursor: "pointer" }}
          onClick={() => swap(page,Id)}
          key={Id}
          
          className="col-lg-8 mb-4 position-relative text-dark"
        >
        <div  className= "cards carda">
            <div className= "content">
            <div className="fs-6 fw-normal">Library</div>
              <div className="fs-5 fw-bold mb-2">{NameL}</div>
                <div className="fs-6 fw-normal">Phone number</div>
                <div className="fs-5">{Phone}</div>
            </div>
          </div>
          <button className= "position-absolute badgec btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#DeleteLibrary"
          onClick={(e) => {
            firstcallback(Id);
            e.stopPropagation();}}
            >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>
            </button>

        </div>
      );
    });
  } 
  else if (result && page === "Book"){
    display = result.map((x) => {
      let { Id, BName, Publisher} = x;
      
      return (
         <div
         style={{ textDecoration: "none", cursor: "pointer" }}
         onClick={() => swap(page,Id)}
          key={Id}
          className="col-lg-8  mb-4 position-relative text-dark"
        >
        <div  className= "cards carda">
            <div className= "content">
            <div className="fs-6 fw-normal">Book</div>
              <div className="fs-5 fw-bold mb-2">{BName}</div>
                <div className="fs-6 fw-normal">Publisher</div>
                <div className="fs-5">{Publisher}</div>
            </div>
          </div>
          <button className="position-absolute badgec btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#DeleteBook"
            onClick={(e) => {
            firstcallback(Id);
            e.stopPropagation();}}
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>
            </button>    
        </div>
      );
    });
  }
  else if (result && page === "Author"){
    display = result.map((x) => {
      let { Id, SName, FName,LName,BDate,DDate} = x;
    let b = ''
     let a =  BDate.split("-")
     if ( DDate !== null) b =  DDate.split("-")
     
   
      return (
         <div
          style={{ textDecoration: "none", cursor: "pointer" }}
          onClick={() => swap(page,Id)}
          key={Id}
          className="col-lg-8  mb-4 position-relative text-dark"
        >
        <div  className= "cards carda">
            <div className= "content">
            <div className="fs-6 fw-normal">Author</div>
              <div className="fs-5 fw-bold mb-2">{SName} {FName} {LName} </div>
                <div className="fs-6 fw-normal">life years</div>
              { DDate === null ?
               (<div className="fs-5">{a[2].split("T")[0]}.{a[1]}.{a[0]} -</div>) 
               : 
               (<div className="fs-5">{a[2].split("T")[0]}.{a[1]}.{a[0]} - {b[2].split("T")[0]}.{b[1]}.{b[0]}</div>) }
            </div>
          </div>
          <button className="position-absolute badgec btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#DeleteAuthor"
            onClick={(e) => {
            firstcallback(Id);
            e.stopPropagation();}}
            >
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>
            </button>
       
        </div>
      );
    });
  }
  else if (result && page === "Client"){
    display = result.map((x) => {
      let { Id, SName, FName,LName} = x;
    
   
      return (
         <div
          style={{ textDecoration: "none", cursor: "pointer" }}
          onClick={() => swap(page,Id)}
          key={Id}
          className="col-lg-8  mb-4 position-relative text-dark"
        >
        <div  className= "cards carda">
            <div className= "content">
            <div className="fs-6 fw-normal">Client</div>
              <div className="fs-5 fw-bold mb-2">{SName} {FName} {LName}  </div>
          </div>
          </div>
          <button className="position-absolute badgec btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#DeleteClient"
            onClick={(e) => {
            firstcallback(Id);
            e.stopPropagation();}}
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>
            </button>

         
        </div>
      );
    });
  }
  else {
    display = <div style={{color : "white"}} >No Found :/</div>;
  }

  return <>
  
  {display}
  </>;
};

export default Card;