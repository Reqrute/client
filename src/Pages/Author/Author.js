import React, { useEffect, useState } from 'react'
import Card from '../../Components/Cards/Cards';
import SearchFIO from '../../Components/SearchBar/SearchFIO';  
import AddAuthor from '../../Components/Modal/AuthorModal/AddAuthor';
import DeleteAuthor from '../../Components/Modal/AuthorModal/DeleteAuthor';
import "./Author.css"

function Author() {


  let [info, setInfo] = useState();
  let [Id, setId] = useState();

  let [Second, setSecond] = useState(null);
  let [First, setFirst] = useState(null);
  let [Last, setLast] = useState(null);

  let updateData = (value) => {
    setId(value);
 }

 let render = (Second,First, Last) => {
    if (Second === "") {setSecond(null)}
    else{setSecond(Second)}
    if (First === "") {setFirst(null)}
    else{setFirst(First)}
    if (Last === "") {setLast(null)}
    else{setLast(Last)}
}

  useEffect(() => {
    (async function () {
      let data = await fetch(`http://localhost:3001/Author/${Second}/${First}/${Last}`).then((res) => res.json());
      setInfo(data);
    })();
  },[Second,First,Last] );

  return (
    <>
    <AddAuthor/>
    <DeleteAuthor id = {Id}/>
    <div className='qq'>
    <div className='z'>
    <div className="position-relative mb-3">
   <h1 style={{color : "white", textShadow: "3px 3px 3px black" }} className=" text-center">Author</h1> 
   <button className=" col-4 mb-3 btn btn-outline-success btnsa" data-bs-toggle="modal" data-bs-target="#AddAuthor">
   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
</svg>
   </button>
   </div>
    <SearchFIO render={render}/>
    <div className="container">
      <div className="row">
        <div className="row pt-3 mb-3 justify-content-center  " >
          {info?.length !== 0 ? ( <Card page ={"Author"} result={info} firstcallback ={updateData}/>) : ( <div style={{color : "white", textShadow: "3px 3px 3px black" }} className="fs-2 text-center"> Not Found</div> ) }
          </div>
      </div>
    </div>
    </div>
    </div>
</>
  )
}

export default Author