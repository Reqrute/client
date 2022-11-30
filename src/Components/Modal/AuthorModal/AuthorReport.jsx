import React, { useEffect, useState } from 'react'
import Library from './Library';

function AuthorReport({id}) {

    const [info, setInfo] = useState([]);

    useEffect(()=>{
        const fetchInfo = async() =>{
            const res = await fetch(`http://localhost:3001/Author/Report/${id}`);
            const data = await res.json();
            setInfo(data)
        }
        id && fetchInfo()
        },[id]
    )

        
let infois;
if (info) {
  infois = info.map((a,i) => {
    let { LId,Number, AmountBook} = a;  
      
    return ( 
      <Library key={i} LId = {LId} Number = {Number} AmountBook={AmountBook} /> 
    )
  })
}


console.log(info);

    return (
        <div className="modal fade" id="AuthorReport" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="AuthorReportLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">  
                <h1 className="modal-title fs-5" id="AuthorReportLabel">Report Author</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                  <>{infois}</>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-success">Ok</button>
              </div>
            </div>
          </div>
        </div>
          )
}

export default AuthorReport