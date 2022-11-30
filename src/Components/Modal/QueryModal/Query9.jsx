import React, { useState, useEffect} from "react";

function Query9() {

    (() => {

      const forms = document.querySelectorAll('.needs-validation')
    
      Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
    
          form.classList.add('was-validated')
        }, false)
      })
    })()

    const [Id, setId] = useState("");
    const [Number, setNumber] = useState("");


    const [info, setInfo] = useState("");
    const [info2, setInfo2] = useState("");

    useEffect(()=>{

      const fetchRR = async() =>{
        const res = await fetch(`http://localhost:3001/ReadingRoom`);
        const data = await res.json();
        setInfo2(data)
    }
    const fetchQuery9 = async() =>{
      const res = await fetch(`http://localhost:3001/Query9/${Id}/${Number}`);
      const data = await res.json();
      setInfo(data);
    }

          fetchRR();
          fetchQuery9();
    
      },[Id,Number]
    )

     let infois
    if (info) {
      infois = info.map((a) => {
        let {FName, SName, LName} = a;  
    
        return (
          <div
          className="border pt-3 pb-3 border-dark  col-12 position-relative text-dark rounded mb-3 "
           key={FName}>
                  <div className="fs-4 fw-normal text-center">{FName} {SName} {LName}</div> 
         </div>)
      })
    }

     let info2is
    if (info2) {
      info2is = info2.map((a) => {
        let { Number , LId } = a;  

        return (
          <option value={LId+" "+Number}> LIbraryID {LId} - Room {Number}</option>)
      })
    }
    

  return (
<div className="modal fade" id="Query9" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="Query9Label" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="Query9Label">Query9</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
        ></button>
      </div>
      <div className="modal-body justify-content-center">
      <div className="fw-semibold fw-5 text-center mb-3 ">Выдать список библиотекарей, работающих в указанном читальном зале некоторой библиотеке</div>
      <form className="row g-3 needs-validation" noValidate>


              <div className="col-md-12 mb-3">
                <label htmlFor="ReadingRoom" className="form-label">ReadingRoom</label>
                <select className="form-select form-select " aria-label=".form-select" id="ReadingRoom"
                  onChange={(e) => {
                    setNumber(e.target.value?.split(" ")[1])
                    setId(e.target.value?.split(" ")[0])}} required
                >
                              <option value="">Select ...</option>    
                    <>{info2is}</>
                </select>
                <div className="invalid-feedback">
                    Please choose a ReadingRoom.
                </div>
              </div>  
              
          
                          
                  <>{infois}</>
              <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
        >Close</button>
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
        >OK</button>
      </div>
              
          </form>
      </div>
    </div>
  </div>
</div>
  )
}

export default Query9