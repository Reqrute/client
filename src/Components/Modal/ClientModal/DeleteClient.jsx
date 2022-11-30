import React, { useState, useEffect} from "react";

function DeleteClient({id}) {

    let [Client, setClient] = useState();

    useEffect(() => {
      (async function () {
        let data = await fetch(`http://localhost:3001/Client/${id}`).then((res) => res.json());
        setClient(data);
      })();
    }, [id]);


    async function handlecup(){
    fetch(`http://localhost:3001/Address/${Client.AId}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        console.log('Успех:');
      })
      .catch(err => console.log(err));

      fetch(`http://localhost:3001/WorkAddress/${Client.AddresW}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          console.log('Успех:');
        })
        .catch(err => console.log(err));


    fetch(`http://localhost:3001/Client/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        console.log('Успех:', JSON.stringify(data));
      })
      .catch(err => console.log(err));
    }

  return (
<div className="modal fade" id="DeleteClient" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="DeleteClientLabel" aria-hidden="true">
  <div className="modal-dialog modal-sm modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">  
        <h1 className="modal-title fs-5" id="DeleteClientLabel">Delete Client</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
            <div>Are you sure ?</div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-danger"
                    onClick={()=> {handlecup();window.location.reload();}}
        >Yes</button>
      </div>
    </div>
  </div>
</div>
  )
}

export default DeleteClient