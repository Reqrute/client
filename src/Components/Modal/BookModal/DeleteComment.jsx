import React from 'react'

function DeleteComment({id}) {

  async function handlecup(id){
    fetch(`http://localhost:3001/BookARate/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        console.log('Успех:', JSON.stringify(data));
      })
      .catch(err => console.log(err));
    }

  return (
<div className="modal fade" id="DeleteComment" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="DeleteCommentLabel" aria-hidden="true">
  <div className="modal-dialog modal-sm modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">  
        <h1 className="modal-title fs-5" id="DeleteCommentLabel">Delete Comment {id}</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
            <div>Are you sure ?</div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"  onClick={(e)=> e.preventDefault()}>Close</button>
        <button type="button" className="btn btn-danger"
                onClick={()=> {handlecup(id);window.location.reload();}}
        >Yes</button>
      </div>
    </div>
  </div>
</div>
  )
}

export default DeleteComment