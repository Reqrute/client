import React, { useEffect, useState } from 'react'

function LibraryReport({id}) {

 
    const [info1, setInfo1] = useState([]);
    const [info2, setInfo2] = useState([]);
    const [info3, setInfo3] = useState([]);
    const [Library, setLibrary] = useState([]);

    const [SMonth, setSMonth] = useState("");
    const [LMonth, setLMonth] = useState("");
    const [Month, setMonth] = useState(new Date().getFullYear() + "-" + (new Date().getMonth()+1) + "-" + new Date().getDate());
    
    useEffect(()=>{

      const fetchLibrary = async() =>{
        const res = await fetch(`http://localhost:3001/Library/${id}`);
        const data = await res.json();
        setLibrary(data)
    }

        const fetchInfo1 = async() =>{
            const res = await fetch(`http://localhost:3001/Library/Report1/${id}`);
            const data = await res.json();
            setInfo1(data)
        }

        const fetchInfo2 = async() =>{
          const res = await fetch(`http://localhost:3001/Library/Report2/${id}/${SMonth}/${LMonth}`);
          const data = await res.json();
          setInfo2(data)
      }

      const fetchInfo3 = async() =>{
        const res = await fetch(`http://localhost:3001/Library/Report3/${id}/${SMonth}/${LMonth}`);
        const data = await res.json();
        setInfo3(data)
    }
    
        const  getLastDayOfMonth = (year, month) => {
          let date = new Date(year,  month, 0);
          setLMonth(date.getFullYear() + "-" + (date.getMonth()+1 )+ "-" + date.getDate());
        }
    
        const  getFirstDayOfMonth = (year, month) => {
          let date = new Date(year, month-1, 1);
          setSMonth(date.getFullYear() + "-" + (date.getMonth()+ 1 )+ "-" + date.getDate());
        }
        id && fetchLibrary();
        id && fetchInfo1();
        getFirstDayOfMonth(Month.split("-")[0],Month.split("-")[1]);
        getLastDayOfMonth(Month.split("-")[0],Month.split("-")[1]);
        SMonth && LMonth && fetchInfo2();
        SMonth && LMonth && fetchInfo3();

        },[id,Month,SMonth,LMonth]
    )

    let infois;
    let infoisF;
    if (info1) {
      infois = info1.map((a,i) => {
        let {Number, Clients, Books} = a;  
          
        return ( 
          <div key={i} className="fs-4 fw-normal mb-3 col-12 position-relative">ReadingRoom:{Number} Clients:{Clients} Books{Books}</div>
        )
      })

      infoisF = info1.reduce((a,c) => {
        let {Clients, Books} = c;  
            a.Clients += Clients;
            a.Books += Books;
            return a
      },{Clients : 0 , Books : 0})
    }


    let info2is;
    if (info2) {
      info2is = info2.map((a,i) => {
        let {Clients} = a;  
        return ( 
          <div key={i} className="fs-4 fw-normal mb-3 col-12 position-relative">new Clients:{Clients}</div>
        )
      })
    }


    let info3is;
    if (info3) {
      info3is = info3.map((a,i) => {
        let {BName,Books} = a;  
          
        return ( 
          <div key={i} className="fs-4 fw-normal mb-3 col-12 position-relative">Books Name:{BName} - Amount{Books}</div>
        )
      })
    }

    return (
        <div className="modal fade" id="LibraryReport" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="LibraryReportLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">  
                <h1 className="modal-title fs-5" id="LibraryReportLabel">Report Library</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">

                <>{infois}</>

                <div className="fs-4 fw-normal mb-3 col-12  position-relative text-center">At All</div>
                <div className="fs-4 fw-normal mb-3 col-12  position-relative text-center">Clients : {infoisF.Clients} <br></br>Books : {infoisF.Books}    </div>

              <div className="col-md-12 pt-2 pb-3 border-dark border-top border-bottom">
                <label htmlFor="TakenDate" className="form-label">Taken Date</label>
                <input type="date" className="form-control" id="TakenDate"
                value={Month} 
                onChange={(e) => {
                  setMonth(e.target.value)}}
                />

              </div>  
                     <div className="fs-4 fw-normal mb-3 col-12  text-center  position-relative">Amount of Registrated Client</div>
                    {info2.length !== 0  ? (<>{info2is}</>) : (<div className="fs-4 fw-normal mb-3 col-12 position-relative">new Clients: 0</div>)} 
                 

                     <div className="fs-4 fw-normal mt-3 mb-3 col-12  text-center  position-relative">Taken Books</div>
                     {info3.length !== 0 ? (<>{info3is}</>) : (<div className="fs-4 fw-normal mb-3 col-12 position-relative">Books not Taken</div>)} 

                     


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

export default LibraryReport