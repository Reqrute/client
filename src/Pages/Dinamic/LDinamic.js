import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Employer from "./Help/Employer";
import ChangeLibrary from '../../Components/Modal/LibraryModal/ChangeLibrary'
import DeleteLibrary from '../../Components/Modal/LibraryModal/DeleteLibrary';

import AddEmployer from '../../Components/Modal/LibraryModal/AddEmployer'
import DeleteEmployer from '../../Components/Modal/LibraryModal/DeleteEmployer'
import ChangeEmployer from '../../Components/Modal/LibraryModal/ChangeEmployer';

import LibraryReport from '../../Components/Modal/LibraryModal/LibraryReport';

import "./Dinamic.css"


const LDinamic = () => {
  let { id } = useParams();

  let ReadingRoomdis;


  const [Library, setLibrary] = useState([]);
  const [Address, setAdress] = useState([]);
  const [ReadingRoom, setReadingRoom] = useState([]);

  const [Employee, setEmployee] = useState([]);
  const [AdrID, setAdrID] = useState([]);
  const [ReadingRoomId, setReadingRoomId] = useState([]);


  useEffect(()=>{

    const fetchLibrary = async() =>{
        const res = await fetch(`http://localhost:3001/Library/${id}`);
        const data = await res.json();
        setLibrary(data)
    }
    
     const fetchAdress = async() =>{
      const res = await fetch(`http://localhost:3001/Address/${Library.AdrId}`);
      const data = await res.json();
      setAdress(data)
  }

  const fetchReadRoom = async() =>{
    const res = await fetch(`http://localhost:3001/ReadingRoom/Library/${id}`);
    const data = await res.json();
    setReadingRoom(data)
}


        fetchLibrary();
        fetchReadRoom(); 
       Library.AdrId && fetchAdress();
        
    },[Library.AdrId,id]
)

let updateData = (value,value2) => {
  setEmployee(value);
  setAdrID(value2);
}

let updateDataS = (value) => {
  setReadingRoomId(value);
}


if (ReadingRoom) {
  ReadingRoomdis = ReadingRoom.map((a) => {
    let { Id, Number} = a;  

    return (
      <div
      className="mm border pt-3 pb-3 border-dark col-sm-4 col-12 position-relative text-dark rounded mb-4"
       key={Id}>
       <div className="fs-3 fw-normal fw-semibold text-center">Room {Number}</div>
       <div className="fs-4 fw-normal fw-semibold text-center">Emloyer</div>
       <Employer Id={Id} render = {updateData} renderS = {updateDataS} />
     </div>)
  })
}
console.log(Library.AdrId);
  return (
    <>
    <DeleteEmployer id = {Employee} AdrId={AdrID}/>
    <AddEmployer RRId = {ReadingRoomId}/>
    <ChangeEmployer id = {Employee} RRId = {ReadingRoomId}/>

    <DeleteLibrary id = {id} AdrId={Library.AdrId}/>
    <ChangeLibrary id = {id}/>
    
    <LibraryReport id = {id}/> 
    
    <div className="main L">
    <div className="sub">
    <div className="container"> 
        <div className="pt-3 mb-3" >
          <div className="col-lg-12 mb-4 position-relative  text-dark">
            <div  className= "cards carda cardf">
              <div className= "content">
              <div className="mb-3 d-flex flex-row justify-content-center row">
                <div className="fs-2 fw-normal fw-semibold text-center mb-3 border-bottom border-dark mb-3 pb-2">Library</div>
                <div className="fs-4 fw-normal col-sm-3 col-12 position-relative text-center">Officially Name: {Library.NameL}</div>
                <div className="fs-4 fw-normal col-sm-3 col-12 position-relative text-center">Address: <br/>{Address.Street} {Address.NumberH}</div>
                <div className="fs-4 fw-normal col-sm-3 col-12 position-relative text-center">Phone number: {Library.Phone}</div>
                <div className="fs-4 fw-normal col-sm-3 col-12 position-relative text-center mb-3">Amount of rooms: <br/>{Library.AmountOfR}</div>

                      <button className="position-absolute btn btn-outline-warning deletebtn" data-bs-toggle="modal" data-bs-target="#ChangeLibrary"
                      onClick={(e) => {

                        e.stopPropagation()}}
                      >
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
</svg>
                      </button>


          <div className="position-relative">
              <div className="fs-2 fw-normal fw-semibold text-center border-top border-bottom border-dark mb-3 pt-2 pb-2">Employers</div>
              <div className="d-flex flex-row justify-content-evenly row">
                {ReadingRoomdis}
              </div>
          </div>

          <div className="fs-2  fw-semibold text-center border-top  border-dark ">
                       <button type="button" className="btn btn-outline-dark p-3 btn-lg mt-3" data-bs-toggle="modal" data-bs-target="#LibraryReport"
                      onClick={(e) => {
                      e.stopPropagation();}}
                      >Report
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