import React from 'react'
import Query1 from '../../Components/Modal/QueryModal/Query1'
import Query2 from '../../Components/Modal/QueryModal/Query2'
import Query3 from '../../Components/Modal/QueryModal/Query3'
import Query4 from '../../Components/Modal/QueryModal/Query4'
import Query5 from '../../Components/Modal/QueryModal/Query5'
import Query6 from '../../Components/Modal/QueryModal/Query6'
import Query7 from '../../Components/Modal/QueryModal/Query7'
import Query8 from '../../Components/Modal/QueryModal/Query8'
import Query9 from '../../Components/Modal/QueryModal/Query9'
import Query10 from '../../Components/Modal/QueryModal/Query10'
import "./Query.css"

function Query() {


  return (
    <>
    <Query1/>
    <Query2/>
    <Query3/>
    <Query4/>
    <Query5/>
    <Query6/>
    <Query7/>
    <Query8/>
    <Query9/>
    <Query10/>
    <div className='qqqq'>
    <div className='z'>
    <div className="position-relative mb-3">
   <h1 style={{color : "white", textShadow: "3px 3px 3px black" }} className=" text-center">Query</h1> 
    </div>
    <div className="container">
      <div className="row">
        <div className="row pt-3 mb-3 justify-content-between gap-4" >
            <button className='col-sm-2  btn btn-outline-light p-3 btn-lg mt-3' data-bs-toggle="modal" data-bs-target="#Query1">Query 1 </button> 
            <button className='col-sm-2  btn btn-outline-light p-3 btn-lg mt-3' data-bs-toggle="modal" data-bs-target="#Query2" >Query 2 </button>  
            <button className='col-sm-2  btn btn-outline-light p-3 btn-lg mt-3' data-bs-toggle="modal" data-bs-target="#Query3">Query 3 </button>  
            <button className='col-sm-2  btn btn-outline-light p-3 btn-lg mt-3' data-bs-toggle="modal" data-bs-target="#Query4">Query 4 </button>  
            <button className='col-sm-2  btn btn-outline-light p-3 btn-lg mt-3' data-bs-toggle="modal" data-bs-target="#Query5">Query 5 </button>  
            <button className='col-sm-2  btn btn-outline-light p-3 btn-lg mt-3' data-bs-toggle="modal" data-bs-target="#Query6">Query 6 </button>  
            <button className='col-sm-2  btn btn-outline-light p-3 btn-lg mt-3' data-bs-toggle="modal" data-bs-target="#Query7">Query 7 </button> 
            <button className='col-sm-2  btn btn-outline-light p-3 btn-lg mt-3' data-bs-toggle="modal" data-bs-target="#Query8">Query 8 </button>  
            <button className='col-sm-2  btn btn-outline-light p-3 btn-lg mt-3' data-bs-toggle="modal" data-bs-target="#Query9">Query 9 </button>  
            <button className='col-sm-2  btn btn-outline-light p-3 btn-lg mt-3' data-bs-toggle="modal" data-bs-target="#Query10">Query 10 </button>  
             
        </div>
      </div>
    </div>
    </div>
    </div>
</>
  )
}

export default Query