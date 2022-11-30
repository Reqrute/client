import React, { useState, useEffect} from "react";

function Query4() {

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

    const [Date1, setDate1] = useState("");
    const [Date2, setDate2] = useState("");
    const [info, setInfo] = useState("");

    useEffect(() => {
      (async function () {
        let data = await fetch(`http://localhost:3001/Query4/${Date1}/${Date2}`).then((res) => res.json());
        setInfo(data);
      })();
    }, [Date1,Date2]);

     let infois
    if (info) {
      infois = info.map((a) => {
        let { SName, FName, LName, BName, Publisher} = a;  
    
        return (
          <div
          className="border pt-3 pb-3 border-dark  col-12 position-relative text-dark rounded mb-3 "
           key={SName+FName+LName}>
                  <div className="fs-4 fw-normal text-center">Book: {BName}  - Publisher{Publisher}</div> 
                  <div className="fs-4 fw-normal text-center">{SName} {FName} {LName}</div> 
         </div>)
      })
    }

    

  return (
<div className="modal fade" id="Query4" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="Query4Label" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="Query4Label">Query4</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
        ></button>
      </div>
      <div className="modal-body justify-content-center">
      <div className="fw-semibold fw-5 text-center mb-3 "> Получить перечень читателей, которые в течение указанного промежутка времени получали издание с
некоторым произведением, и название этого издания</div>
      <form className="row g-3 needs-validation" noValidate>
              <div className="col-md-12 mb-3">
                <label htmlFor="Date1ization" className="form-label">Date1</label>
                <input type="date" className="form-control" id="Date1ization" value={Date1} required
                onChange={(e) => {
                  setDate1(e.target.value)}}
                />
                <div className="invalid-feedback">
                    Please enter a Date.
                </div>
              </div>
              <div className="col-md-12 mb-3">
                <label htmlFor="Date2ization" className="form-label">Date2</label>
                <input type="date" className="form-control" id="Date2ization" value={Date2} required
                onChange={(e) => {
                  setDate2(e.target.value)}}
                />
                <div className="invalid-feedback">
                    Please enter a Date.
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

export default Query4