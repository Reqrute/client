import React, { useState, useEffect} from "react";

function DeleteLibrary({id}) {


  let [Library, setLibrary] = useState();

  useEffect(() => {
    (async function () {
      let data = await fetch(`http://localhost:3001/Library/${id}`).then((res) => res.json());
      setLibrary(data);
    })();
  }, [id]);


  async function handlecup(){
    
    fetch(`http://localhost:3001/Address/${Library?.AdrId}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        console.log('Успех:');
      })
      .catch(err => console.log(err));


    fetch(`http://localhost:3001/Library/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        console.log('Успех:', JSON.stringify(data));
      })
      .catch(err => console.log(err));
    }

  return (
<div className="modal fade" id="DeleteLibrary" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="DeleteLibraryLabel" aria-hidden="true">
  <div className="modal-dialog modal-sm modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">  
        <h1 className="modal-title fs-5" id="DeleteLibraryLabel">Delete Library</h1>
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

export default DeleteLibrary