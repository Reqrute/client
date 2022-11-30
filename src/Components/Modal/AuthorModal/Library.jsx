import React,{useEffect,useState} from 'react'



function Library({LId, Number,AmountBook}) {

    const [Library, setLibrary] = useState([]);

    useEffect(()=>{
        const fetchLibrary = async() =>{
            const res = await fetch(`http://localhost:3001/Library/${LId}`);
            const data = await res.json();
            setLibrary(data)
        }
    
        LId && fetchLibrary()
        },[LId]
    )

  return (
    <div className="fs-4 fw-normal text-center mb-3">Library: {Library.NameL} ReadingRoom-Number:{Number} Amount of Book:{AmountBook}</div>
  )
}

export default Library