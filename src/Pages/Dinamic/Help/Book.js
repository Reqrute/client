import React, { useState, useEffect } from "react";



function Book({Id}) {

    const [Book, setBook] = useState([]);
    const [Author, setAuthor] = useState([]);

  
    useEffect(()=>{
      const fetchBook = async() =>{
          const res = await fetch(`http://localhost:3001/Book/${Id}`);
          const data = await res.json();
          setBook(data)
      }
      const fetchAuthor = async() =>{
        const res = await fetch(`http://localhost:3001/Author/${Book.AId}`);
        const data = await res.json();
        setAuthor(data)
    }
      Id && fetchBook()  
      Book?.AId && fetchAuthor();
       
      },[Id,Book.AId]
  )

  return (
    <div
    key={Book.id}
    className="fs-4 fw-normal">
    <div className="fs-4 fw-normal text-center"> Book's Name: <br/>{Book.BName}</div>
    <div className="fs-4 fw-normal text-center"> Release Date:<br/> {Book?.PDate?.split("T")[0]} </div>
    <div className="fs-4 fw-normal text-center ">  Author:<br/> {Author.SName} {Author.FName?.split("")[0]}. {Author.LName?.split("")[0]}.</div>
  </div>  
  )
}

export default Book