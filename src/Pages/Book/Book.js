import React, { useEffect, useState } from 'react'
import Card from '../../Components/Cards/Cards';
import Search from '../../Components/SearchBar/Search';  
import AddBook from '../../Components/Modal/BookModal/AddBook';
import DeleteBook from '../../Components/Modal/BookModal/DeleteBook';
import "./Book.css"

function Book() {

  let [info, setInfo] = useState();
  let [Id, setId] = useState();
  let [Name, setName] = useState(null);

  let updateData = (value) => {
    setId(value);
 }

 let render = (Name) => {
  if (Name === "") {setName(null)}
  else{setName(Name)}
}


  useEffect(() => {
    (async function () {
      let data = await fetch(`http://localhost:3001/Book/Name/${Name}`).then((res) => res.json());
      setInfo(data);
    })();
  }, [Name]);

  return (
    <>
    <AddBook/>
    <DeleteBook id = {Id} />

    <div className='ff' >
      <div className='z' >
      <div className="position-relative mb-3">
   <h1 style={{color : "white", textShadow: "3px 3px 3px black" }} className=" text-center">Book</h1> 
   <button className=" col-4 mb-3 btn btn-outline-success btnsb" data-bs-toggle="modal" data-bs-target="#AddBook">
   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
</svg>
   </button>
   </div>
    <Search render={render}/>
    <div className="container">
      <div className="row">
        <div className="row pt-3 mb-3 justify-content-center  " >
        {info?.length !== 0 ? ( <Card page ={"Book"} result={info} firstcallback ={updateData}/>) : ( <div style={{color : "white", textShadow: "3px 3px 3px black" }} className="fs-2 text-center"> Not Found</div> ) }
          </div>
      </div>
    </div>
      </div>
    </div>
    </>
  )
}

export default Book