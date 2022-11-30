import React, { useState, useEffect } from "react";



function ReadRoom({Id}) {

    const [ReadRoom, setReadRoom] = useState([]);
    const [library, setLibrary] = useState([]);
  
    useEffect(()=>{
      const fetchReadRoom = async() =>{
          const res = await fetch(`http://localhost:3001/ReadingRoom/${Id}`);
          const data = await res.json();
          setReadRoom(data)
      }
      const fetchLibrary = async() =>{
        const res = await fetch(`http://localhost:3001/Library/${ReadRoom.LId}`);
        const data = await res.json();
        setLibrary(data)
    }
      fetchReadRoom();
      ReadRoom.LId && fetchLibrary();
      },[Id,ReadRoom.LId]
  )
  return (
    <div
    key={Id}
    className="fs-4 fw-normal">
     <div className="fs-4 fw-normal text-center mb-2"> Library: <br/>{library.NameL}</div>
     <div className="fs-4 fw-normal text-center mb-2"> Number of ReadingRoom: {ReadRoom.Number}</div>
  </div>  
  )
}

export default ReadRoom