import React, { useState} from "react";

function AddAuthor() {

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

    const [First, setFirst] = useState("");
    const [Second, setSecond] = useState("");
    const [Last, setLast] = useState("");
    const [Birth, setBirth] = useState("");
    const [Death, setDeath] = useState("");

    async function handlecup(First,Second,Last,Birth,Death){
      const url = 'http://localhost:3001/Author';
      if (Death === "") Death = null

      const data = { 
        SName : Second,
        FName : First,
        LName : Last,
        BDate:Birth?.split("T")[0],
        DDate: Death?.split("T")[0] };

        console.log(data);
      try {
      
      const response = await fetch(url, {
      method: 'POST', // или 'PUT'
      body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
      headers: {
      'Content-Type': 'application/json'
      }
      });
      const json = await response.json();
      console.log('Успех:', JSON.stringify(json));
      } catch (error) {
      console.error('Ошибка:', error);
      }
      }


    function reset () {
      setFirst("");
      setSecond("");
      setLast("");
      setBirth("");
      setDeath("");
    }

  return (
<div className="modal fade" id="AddAuthor" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="AddAuthorLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="AddAuthorLabel">Add Author</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
        onClick={()=> reset()}
        ></button>
      </div>
      <div className="modal-body">
      <form className="row g-3 needs-validation" noValidate>
              <div className="col-md-4 mb-3">
                <label htmlFor="FirstNameAut" className="form-label">First Name</label>
                <input type="text" className="form-control" id="FirstNameAut" value={First} required
                onChange={(e) => {
                  setFirst(e.target.value)}}
                />
                <div className="invalid-feedback">
                    Please enter a First Name.
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="SecondNameAut" className="form-label">Second Name</label>
                <input type="text" className="form-control" id="SecondNameAut" value={Second}
                onChange={(e) => setSecond(e.target.value)} required
                />
                <div className="invalid-feedback">
                    Please enter a Second Name.
                </div>
              </div>

              <div className="col-md-4 mb-3">
                <label htmlFor="LastNameAut" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="LastNameAut" value={Last}
                onChange={(e) => setLast(e.target.value)} required
                />
                                                <div className="invalid-feedback">
                    Please enter a Last Name.
                </div>
              </div>  

              <div className="col-md-6 mb-3">
                <label htmlFor="BDateAut" className="form-label">Birth Date</label>
                <input type="date"  
                className="form-control" id="BDateAut" value={Birth}
                onChange={(e) => setBirth(e.target.value)}
                />
                                <div className="invalid-feedback">
                    Please enter a Birth Date.
                </div>
              </div>
              <div className="col-md-6   mb-3">
                <label htmlFor="DDateAut" className="form-label">Date of Death</label>
                <input type="date"  min="1" max="5"
                className="form-control" id="DDateAut" value={Death}
                onChange={(e) => setDeath(e.target.value)}
                />
                <span>(if enter it must be more than Birth Date)</span>
              </div>

              <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
        onClick={()=> reset()}
        >Close</button>
        <button type="submit" className="btn btn-primary"
          onClick={(e)=> {handlecup(First,Second,Last,Birth,Death) }}
        >Submit</button>
      </div>
              
          </form>
      </div>
    </div>
  </div>
</div>
  )
}

export default AddAuthor