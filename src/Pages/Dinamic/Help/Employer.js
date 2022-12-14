import React, { useState, useEffect } from "react";



function Employer({Id, render, renderS}) {

const [Employer, setEmployer] = useState('');
const [Address, setAdress] = useState([]);

    useEffect(()=>{

      const fetchEmployer = async() =>{
        const res = await fetch(`http://localhost:3001/Employer/ReadRoom/${Id}`);
        const data = await res.json();
        setEmployer(data);
    }
    const fetchAdress = async() =>{
      const res = await fetch(`http://localhost:3001/Address/${Employer[0]?.AdrId}`);
      const data = await res.json();
      setAdress(data);
  }
    
    fetchEmployer();
    Employer[0]?.AdrId && fetchAdress();        

        },[Id,Employer[0]?.AdrId]
    )

  return (
    <>
    { Employer[0] !== undefined ? (<div
      className="text-center"
       key={Employer[0]?.id}>
          {Employer[0]?.SName} {Employer[0]?.FName} {Employer[0]?.LName}
      <div className="text-center">Address: <br/>{Address?.Street} {Address?.NumberH} {Address?.Flat}</div>
     </div>) : (<div className="text-center"> No Employer</div>) }

                      { Employer[0] !== undefined ? (<>

                        <button className="position-absolute deletebtnC btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#DeleteEmployer"
                      onClick={(e) => {
                        render(Employer[0].Id,Address.Id)
                      e.stopPropagation();}}
                      >
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>
                      </button>
                        
                        <button className="position-absolute btn btn-outline-warning btnChangeC" data-bs-toggle="modal" data-bs-target="#ChangeEmployer"
                      onClick={(e) => {
                        render(Employer[0].Id,Address.Id)
                        renderS(Id);
                        e.stopPropagation()}}
                      >
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
</svg>
                      </button></>) 
                      : (                      
                        <button className="position-absolute btnChangeC btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#AddEmployer"
                      onClick={(e) => {
                        renderS(Id);
                      e.stopPropagation();}}
                      >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
</svg>
                      </button>
                      ) }

                     



    </>
  )
}

export default Employer