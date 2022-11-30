import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReadRoom from "./Help/ReadRoom";
import RateAndUser from "./Help/RareAndUser";
import ChangeBook from '../../Components/Modal/BookModal/ChangeBook';
import DeleteBook from '../../Components/Modal/BookModal/DeleteBook';
import AddPlace from '../../Components/Modal/BookModal/AddPlace';
import ChangePlace from '../../Components/Modal/BookModal/ChangePlace';
import DeletePlace from '../../Components/Modal/BookModal/DeletePlace';

import AddComment from '../../Components/Modal/BookModal/AddComment';
import ChangeComment from '../../Components/Modal/BookModal/ChangeComment';
import DeleteComment from '../../Components/Modal/BookModal/DeleteComment';

import "./Dinamic.css"


const LDinamic = () => {
  let { id } = useParams();

  let BRateis;
  let BPlaceis;

  const [Book, setBook] = useState([]);
  const [Author, setAuthor] = useState([]);
  const [Type, setType] = useState([]);
  const [Genre, setGenre] = useState([]);
  const [BRate, setBRate] = useState([]);
  const [BPlace, setBPlace] = useState([]);

  const [BPlaceId, setBPlaceId] = useState(0);
  const [ReadRoomId, setReadRoomId] = useState(0);


  const [BRateId, setBRateId] = useState(0);
  const [RateId, setRateId] = useState(0);
  const [UserId, setUserId] = useState(0);

  
  useEffect(()=>{
    const fetchBook = async() =>{
        const res = await fetch(`http://localhost:3001/Book/${id}`);
        const data = await res.json();
        setBook(data)
    }
    const fetchType = async() =>{
      const res = await fetch(`http://localhost:3001/Type/${Book.TId}`);
      const data = await res.json();
      setType(data)
  }
  const fetchGenre = async() =>{
    const res = await fetch(`http://localhost:3001/Genre/${Book.GId}`);
    const data = await res.json();
    setGenre(data)
}
    const fetchAuthor = async() =>{
      const res = await fetch(`http://localhost:3001/Author/${Book.AId}`);
      const data = await res.json();
      setAuthor(data)
  }
  const fetchRateBook = async() =>{
    const res = await fetch(`http://localhost:3001/BookARate/Book/${id}`);
    const data = await res.json();
    setBRate(data)
}
const fetchBookPlace = async() =>{
  const res = await fetch(`http://localhost:3001/Bookplace/Book/${id}`);
  const data = await res.json();
  setBPlace(data)
}
        fetchBook();
        Book.AId && fetchAuthor(); 
        Book.TId && fetchType();
        Book.GId && fetchGenre();
        fetchRateBook();
        fetchBookPlace();
    },[id,Book.AId,Book.TId,Book.GId]
)


if (BRate) {
  BRateis = BRate.map((a) => {
    let { Id,RId,UsId} = a;  

    return (
      <div
      className="mm border pt-3 pb-3 border-dark col-sm-4 col-12 position-relative text-dark rounded mb-4"
       key={Id}>
        <RateAndUser RId ={RId} UsId = {UsId}/> 
        <button className="position-absolute deletebtnC btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#DeleteComment"
                      onClick={(e) => {
                        setBRateId(Id);
                      e.stopPropagation();}}  
                      >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>
                      </button>

                      <button className="position-absolute btn btn-outline-warning btnChangeC" data-bs-toggle="modal" data-bs-target="#ChangeComment"
                      onClick={(e) => {
                        setBRateId(Id);
                        setRateId (RId);
                        setUserId (UsId);
                        e.stopPropagation()}}
                      >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
</svg>
                      </button>
     </div>)
  })
}

if (BPlace) {
  BPlaceis = BPlace.map((a) => {
    let { Id,RRId,Shelving,Shelf} = a;  

    return (
      <div
      className="mm border pt-3 pb-3 border-dark col-sm-4 col-12 position-relative text-dark rounded mb-4"
       key={Id}>
              <ReadRoom Id ={RRId}/> 
              <div className="fs-4 fw-normal text-center">Shelving: {Shelving}</div> 
              <div className="fs-4 fw-normal text-center">Shelf: {Shelf}</div>
              <button className="position-absolute deletebtnC btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#DeletePlace"
                      onClick={(e) => {   
                      setBPlaceId(Id);
                      e.stopPropagation();}}
                      >
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>
                      </button>

                      <button className="position-absolute btn btn-outline-warning btnChangeC" data-bs-toggle="modal" data-bs-target="#ChangePlace"
                      onClick={(e) => {
                      setBPlaceId(Id);
                      setReadRoomId(RRId);
                        e.stopPropagation()}}
                      >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
</svg>
                      </button>
                      
     </div>)
  })
}

  return (
    <>
    <AddPlace BId = {id}/>
    <DeletePlace id = {BPlaceId}/>
    <ChangePlace BId = {id} Id = {BPlaceId} RRId = {ReadRoomId}/>

    <DeleteBook id = {id} />
    <ChangeBook id = {id} />

    <AddComment BId = {id}/> 
    <ChangeComment id = {BRateId} BId = {id} RId = {RateId} UsId = {UserId}/>
    <DeleteComment id = {BRateId} />


    <div className="main B">
    <div className="sub">
    <div className="container"> 
        <div className="pt-3 mb-3" >
          <div className="col-lg-12 mb-4 position-relative text-dark">
            <div  className= "cards carda cardf">
              <div className= "content">
              <div className="mb-3 d-flex flex-row justify-content-center row">
                <div className="fs-2 fw-normal fw-semibold text-center  border-bottom border-dark mb-3 pb-2">Book</div>

                <div className="fs-4 fw-normal col-sm-4 col-12 text-center">Book's Name:<br/> {Book.BName}</div> 
                <div className="fs-4 fw-normal col-sm-4 col-12 text-center">Release Date:<br/> {Book?.PDate?.split("T")[0]}</div>
                <div className="fs-4 fw-normal col-sm-4 col-12 text-center mb-3">Publisher:<br/> {Book.Publisher}</div>

                <div className="fs-4 fw-normal col-sm-4 col-12 text-center">Type:<br/> {Type.NameT}</div>
                <div className="fs-4 fw-normal col-sm-4 col-12 text-center">Genre:<br/> {Genre.NameG}</div>
                <div className="fs-4 fw-normal col-sm-4 col-12 text-center mb-3 ">Author:<br/> {Author.SName} {Author.FName?.split("")[0]}. {Author.LName?.split("")[0]}.</div>

                      <button className="position-absolute  btn btn-outline-warning deletebtn" data-bs-toggle="modal" data-bs-target="#ChangeBook"
                      onClick={(e) => {

                        e.stopPropagation()}}
                      >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
</svg>
                      </button>
              
          <div className="position-relative">
                <div className="fs-2 fw-normal fw-semibold text-center border-top border-bottom border-dark mb-3 pt-2 pb-2">Location</div>
              <div className="d-flex flex-row justify-content-evenly row">
              {BPlaceis}
              </div>
              <button className="position-absolute deletebtn btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#AddPlace"
                      onClick={(e) => {
                      e.stopPropagation();}}
                      >
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
</svg>
                      </button>
         </div>
              <div className="position-relative">
                  <div className="fs-2 fw-normal fw-semibold text-center border-top border-bottom border-dark mb-3 pt-2 pb-2">Comments</div>
              <div className="d-flex flex-row justify-content-evenly row">
                {BRateis}
              </div>
              <button className="position-absolute deletebtn btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#AddComment"
                      onClick={(e) => {
                      e.stopPropagation();}}
                      >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
</svg>
                      </button>
            </div>

              </div>
            </div> 
            </div>
          </div>
        </div>
      </div>  
    </div>
    </div></>
  );
};

export default LDinamic;