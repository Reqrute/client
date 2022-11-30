import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ChangeClient from '../../Components/Modal/ClientModal/ChangeClient';
import DeleteClient from '../../Components/Modal/ClientModal/DeleteClient';

import AddBooksC from '../../Components/Modal/ClientModal/AddBooksC'
import ChangeBooksC from '../../Components/Modal/ClientModal/ChangeBooksC';
import DeleteBooksC from '../../Components/Modal/ClientModal/DeleteBooksC';

import Book from "./Help/Book";
import "./Dinamic.css"


const LDinamic = () => {
  let { id } = useParams();

let Bookis;

  const [Client, setClient] = useState([]);
  const [Address, setAdress] = useState([]);
  const [WorkAddress, setWorkAdress] = useState([]);
  const [User, setUser] = useState([]); 
  const [UserS, setUserS] = useState([]); 
  const [Subscribe, setSubscribe] = useState([]);

  const [UsABooKId, setUsABooKId] = useState("");
  const [TakenDate, setTakenDate] = useState("");
  const [BooksID, setBooksID] = useState(""); 
   const [ReadRmID, setReadRmID] = useState("");
  
  useEffect(()=>{
    const fetchClient = async() =>{
        const res = await fetch(`http://localhost:3001/Client/${id}`);
        const data = await res.json();
        setClient(data)
    }
    const fetchAdress = async() =>{
      const res = await fetch(`http://localhost:3001/Address/${Client.AId}`);
      const data = await res.json();
      setAdress(data)
  }  
    const fetchWorkAdress = async() =>{
      const res = await fetch(`http://localhost:3001/WorkAddress/${Client.AddresW}`);
      const data = await res.json();
      setWorkAdress(data)
  }
    const fetchBookAUser = async() =>{
      const res = await fetch(`http://localhost:3001/BookAndUser/User/${id}`);
      const data = await res.json();
      setUser(data)
  }
  const fetchUserAndSubscribe = async() =>{
    const res = await fetch(`http://localhost:3001/UserASub/User/${id}`);
    const data = await res.json();
    setUserS(data)
}

  const fetchSubscribe = async() =>{
    const res = await fetch(`http://localhost:3001/Subscribe/${UserS.SubId}`);
    const data = await res.json();
    setSubscribe(data)
}


    id && fetchClient();
    id && fetchUserAndSubscribe();
    Client?.AId && fetchAdress() ;
    Client?.AddresW && fetchWorkAdress () ;
    id && fetchBookAUser(); 
    UserS?.SubId && fetchSubscribe();  
    },[id,UserS.SubId,Client.AId,Client.AddresW]
)
 

    if (User) {
      Bookis = User.map((a) => {
        let { Id,BId,RRId, TakenDate} = a;  
    
        return (
          <div
          className="mm border pt-3 pb-3 border-dark col-sm-3 col-12 position-relative text-dark rounded mb-4"
           key={Id}>
               <div className="fs-4 fw-normal text-center"> Taken Date: <br/>{TakenDate?.split("T")[0]}</div>
                  <Book Id ={BId}/>
                  <button className="position-absolute deletebtnC btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#DeleteBooksC"
                      onClick={(e) => {
                        setUsABooKId(Id);
                      e.stopPropagation();}}
                      >
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>
                      </button>

                      <button className="position-absolute btn btn-outline-warning btnChangeC" data-bs-toggle="modal" data-bs-target="#ChangeBooksC"
                      onClick={(e) => {
                        setUsABooKId(Id);
                        setTakenDate(TakenDate?.split("T")[0]);
                        setBooksID(BId);
                        setReadRmID(RRId);
                        e.stopPropagation()}}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
</svg>
                      </button>
         </div>)
      })
    }
console.log(UserS);
  return (
    <>
    <DeleteClient id = {id} />
    <ChangeClient id = {id} />

    <AddBooksC UsId = {id}/>
    <DeleteBooksC id = {UsABooKId} />
    <ChangeBooksC id = {UsABooKId} UsId = {id} BId = {BooksID} Taken = {TakenDate} RRId={ReadRmID}/>

    <div key={id} className="main C">
    <div className="sub">
    <div className="container"> 
        <div className="pt-3 mb-3" >
          <div className="col-lg-12 mb-4 position-relative text-dark">
            <div  className= "cards carda cardf">
              <div className= "content">
              <div className="mb-3 d-flex flex-row justify-content-center row">
                <div className="fs-2 fw-normal fw-semibold text-center border-bottom border-dark pb-2 ">Client</div>

                <div className="fs-4 fw-normal col-sm-4 col-12 text-center"> Name: <br/>{Client.FName}</div>
                <div className="fs-4 fw-normal col-sm-4 col-12 text-center"> SurName: <br/>{Client.SName}</div>
                <div className="fs-4 fw-normal col-sm-4 col-12 text-center mb-3"> Last Name: <br/>{Client.LName}</div>

                  <div className="fs-4 fw-normal text-center col-sm-4 col-12"> Street: <br/>{Address.Street}</div>
                  <div className="fs-4 fw-normal text-center col-sm-4 col-12"> House Nubmer: <br/>{Address.NumberH}</div>
                  <div className="fs-4 fw-normal text-center col-sm-4 col-12 mb-3"> Appartment: <br/>{Address.Flat}</div>

                  <div className="fs-4 fw-normal text-center col-sm-4"> Job:<br/>{WorkAddress.Special}</div>
                  <div className="fs-4 fw-normal text-center col-sm-4">Work Street: <br/>{WorkAddress.Street} {WorkAddress.NumberH} </div>
                  <div className="fs-4 fw-normal text-center col-sm-4 mb-3">Work House Number: <br/>{WorkAddress.NumberH} </div>

                      <button className="position-absolute  btn btn-outline-warning deletebtn" data-bs-toggle="modal" data-bs-target="#ChangeClient"
                      onClick={(e) => {

                        e.stopPropagation()}}
                      >
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
</svg>
                      </button>

              <div className="position-relative d-flex flex-row justify-content-center row">
                  <div className="fs-2 fw-semibold text-center mb-3 border-top border-bottom border-dark pb-2 pt-2">Subscribe</div>
                  <div className="fs-4 fw-normal text-center col-sm-4"> Subscribe Date:<br/>{UserS?.CDate?.split("T")[0]}</div>
                  <div className="fs-4 fw-normal text-center col-sm-4">Period: <br/>{Subscribe.TimeS} </div>
                  <div className="fs-4 fw-normal text-center col-sm-4 mb-3">Price: <br/>{Subscribe.Cost}</div>
              </div>

            <div className="position-relative">
              <div className="fs-2 fw-normal fw-semibold text-center border-top border-bottom border-dark mb-3 pb-2">Books</div>
              <div className="d-flex flex-row justify-content-evenly row">
                {Bookis}
              </div>
              <button className="position-absolute deletebtn btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#AddBooksC"
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
    </div>
  </>
  );
};

export default LDinamic;