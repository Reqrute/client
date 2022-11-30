import React, { useState, useEffect} from "react";

function ReadRoom({RRId, Check}) {

    
const [ReadingRoom, setReadingRoom] = useState("");
const [Library, setLibrary] = useState("");

    useEffect(()=>{

        const fetchLibrary = async() =>{
          const res = await fetch(`http://localhost:3001/Library/${ReadingRoom.LId}`);
          const data = await res.json();
          setLibrary(data)
        }
        
          const fetchReadRoom = async() =>{
            const res = await fetch(`http://localhost:3001/ReadingRoom/${RRId}`);
            const data = await res.json();
            setReadingRoom(data);
        }
        
        RRId &&  fetchReadRoom();
        ReadingRoom.LId && fetchLibrary();
        
          },[RRId,ReadingRoom.LId]
        )

if (RRId === Check)  return (
    <option value={RRId} selected>Library:{Library.NameL}  Room Number:{ReadingRoom.Number}</option>
  )

  return (
    <option value={RRId}>Library:{Library.NameL}  Room Number:{ReadingRoom.Number}</option>
  )
}

export default ReadRoom