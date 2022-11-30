import React, { useState, useEffect} from "react";

function Query2() {

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

    const [BName, setBName] = useState("");
    const [info, setInfo] = useState("");

    useEffect(() => {
      (async function () {
        let data = await fetch(`http://localhost:3001/Query2/${BName}`).then((res) => res.json());
        setInfo(data);
      })();
    }, [BName]);

     let infois
    if (info) {
      infois = info.map((a) => {
        let { SName,FName , LName} = a;  
    
        return (
          <div
          className="border pt-3 pb-3 border-dark  col-12 position-relative text-dark rounded mb-3 "
           key={SName+FName+LName}>
                  <div className="fs-4 fw-normal text-center">{SName} {FName} {LName}</div> 
         </div>)
      })
    }

    

  return (
<div className="modal fade" id="Query2" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="Query2Label" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="Query2Label">Query2</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
        ></button>
      </div>
      <div className="modal-body justify-content-center">
      <div className="fw-semibold fw-5 text-center mb-3 "> Выдать перечень читателей, на руках у которых находится указанное произведение.</div>
      <form className="row g-3 needs-validation" noValidate>
              <div className="col-md-12 mb-3">
                <label htmlFor="BNameization" className="form-label">Book Name</label>
                <input type="text" className="form-control" id="BNameization" value={BName} required
                onChange={(e) => {
                  setBName(e.target.value)}}
                />
                <div className="invalid-feedback">
                    Please enter a BName.
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

export default Query2