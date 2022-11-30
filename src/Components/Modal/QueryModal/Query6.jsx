import React, { useState, useEffect} from "react";

function Query6() {

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
    const [FName, setFName] = useState("");
    const [SName, setSName] = useState("");
    const [LName, setLName] = useState("");

    const [info, setInfo] = useState("");

    useEffect(() => {
      (async function () {
        let data = await fetch(`http://localhost:3001/Query6/${Date1}/${Date2}/${FName}/${SName}/${LName}`).then((res) => res.json());
        setInfo(data);
      })();
    }, [Date1,Date2,FName,SName,LName]);

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
<div className="modal fade" id="Query6" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="Query6Label" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="Query6Label">Query6</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
        ></button>
      </div>
      <div className="modal-body justify-content-center">
      <div className="fw-semibold fw-5 text-center mb-3 "> Получить перечень изданий, которыми в течение некоторого времени пользовался указанный читатель
из фонда библиотеки, где он не зарегистрирован</div>
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

              <div className="col-md-4 mb-3">
                <label htmlFor="FirstName" className="form-label">First</label>
                <input type="text" className="form-control" id="FirstName" value={FName} required
                onChange={(e) => {
                  setFName(e.target.value)}}
                />
                <div className="invalid-feedback">
                    Please enter a FName.
                </div>
              </div>
              
              <div className="col-md-4 mb-3">
                <label htmlFor="SecondName" className="form-label">Second</label>
                <input type="text" className="form-control" id="SecondName" value={SName} required
                onChange={(e) => {
                  setSName(e.target.value)}}
                />
                <div className="invalid-feedback">
                    Please enter a FName.
                </div>
              </div>
              
              <div className="col-md-4 mb-3">
                <label htmlFor="LastName" className="form-label">Last</label>
                <input type="text" className="form-control" id="LastName" value={LName} required
                onChange={(e) => {
                  setLName(e.target.value)}}
                />
                <div className="invalid-feedback">
                    Please enter a FName.
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

export default Query6