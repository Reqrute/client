import React from 'react'

function DeleteAuthor({id}) {

  async function handlecup(id){
    fetch(`http://localhost:3001/Author/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        console.log('Успех:', JSON.stringify(data));
      })
      .catch(err => console.log(err));
    }

  return (
<div className="modal fade" id="DeleteAuthor" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="DeleteAuthorLabel" aria-hidden="true">
  <div className="modal-dialog modal-sm modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">  
        <h1 className="modal-title fs-5" id="DeleteAuthorLabel">Delete Author</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
            <div>Are you sure ?</div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-danger"
           onClick={()=> {handlecup(id);}}
        >Yes</button>
      </div>
    </div>
  </div>
</div>
  )
}

export default DeleteAuthor