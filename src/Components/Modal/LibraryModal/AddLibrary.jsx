import React, { useState} from "react";

function AddLibrary() {

const [Name, setName] = useState("");
const [Address, setAddress] = useState("");
const [Number, setNumber] = useState("");
const [Amount, setAmount] = useState("");
const [Phone, setPhone] = useState("");


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


async function handlecup(Address,Number,Name,Phone,Amount){ 

  const url = 'http://localhost:3001/Address';
  const data = { 
    Street : Address,
    NumberH : Number,
    Flat: null ,
  };
  
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


  const url2 = 'http://localhost:3001/Library';
  const data2 = { 
    AdrId : json.Id,
    NameL : Name,
    Phone: Phone ,
    AmountOfR : Amount
  };

  const response2 = await fetch(url2, {
    method: 'POST', // или 'PUT'
    body: JSON.stringify(data2), // данные могут быть 'строкой' или {объектом}!
    headers: {
    'Content-Type': 'application/json'
    }
    });
    const json2 = await response2.json();
    console.log('Успех:', JSON.stringify(json2));

 const url3 = 'http://localhost:3001/ReadingRoom';

    for(let i = 1; i <= data2.AmountOfR; i++){
      const data3 = { 
        Number : i,
        LId : json2.Id,
      };


      const response3 = await fetch(url3, {
        method: 'POST', // или 'PUT'
        body: JSON.stringify(data3), // данные могут быть 'строкой' или {объектом}!
        headers: {
        'Content-Type': 'application/json'
        }
        });
        const json3 = await response3.json();
        console.log('Успех:', JSON.stringify(json3));

    }

  } catch (error) {
  console.error('Ошибка:', error);
  }
  }

function reset () {
  setName("");
  setAddress("");
  setAmount("");
  setPhone("");
  setNumber("");
}

  return (
<div className="modal fade" id="AddLibrary" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="AddLibraryLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="AddLibraryLabel">Add Library</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
         onClick={()=> reset()}
        ></button>
      </div>
      <div className="modal-body">
          <form className="row g-3 needs-validation" noValidate>
              <div className="mb-3">
                <label htmlFor="NameOfLibrary" className="form-label">Name of Library</label>
                <input type="text" className="form-control" id="NameOfLibrary"
                  value={Name}
                  onChange={(e) => {
                  setName(e.target.value)}}
                  required/>
                  <div className="invalid-feedback">
                    Please enter a Name.
                </div>
              </div>

              <div className="mb-3 col-md-8">
                <label htmlFor="AddressLib" className="form-label">District</label>
                <input type="text" 
                value={Address} 
                onChange={(e) => {
                  setAddress(e.target.value)}}
                className="form-control" id="AddressLib"
                required
                />
                  <div className="invalid-feedback">
                    Please enter a District.
                </div>
              </div>

              <div className="mb-3 col-md-4">
                <label htmlFor="DisNumb" className="form-label">Number</label>
                <input type="number" min="1" max="100"
                value={Number} 
                onChange={(e) => {
                  setNumber(e.target.value)}}
                className="form-control" id="DisNumb"
                required
                />
                                 <div className="invalid-feedback">
                    Please enter a Number.
                </div>
              </div>


              <div className="col-md-4   mb-3">
                <label htmlFor="AmountofRoom" className="form-label">Amount of ReadingRoom</label>
                              <div className="input-group has-validation">    
                <input type="number"  min="1" max="5"
                className="form-control" id="AmountofRoom"
                value={Amount}
                onChange={(e) => {
                  setAmount(e.target.value)}}
                  required/> 
                 <div className="invalid-feedback">
                    Please enter an Amount.
                </div>
                  </div>
              </div>



              
              <div className="col-md-8  mb-3">
                <label htmlFor="PhoneNumberLib" className="form-label">Phone Number</label>
                <div className="input-group has-validation">
                <span className="input-group-text" id="inputGroupPrepend">+</span>
                <input type="tel"  maxLength="12"
                value={Phone}
                onChange={(e) => {
                  setPhone(e.target.value)}}
                className="form-control" id="PhoneNumberLib" 
                aria-describedby="inputGroupPrepend" required
                />
                <div className="invalid-feedback">
                    Please enter a phone number.
                </div>
                  </div>
              </div>

              <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
         onClick={()=> reset()}
        >Close</button>
        <button type="submit" className="btn btn-primary"
          onClick={(e)=> {handlecup(Address,Number,Name,Phone,Amount)} }
        >Submit</button>
      </div>
              
          </form>
      </div>

    </div>
  </div>
</div>
  )
}

export default AddLibrary