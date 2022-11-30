import React, { useState, useEffect } from "react";



function RateAndUser({RId  , UsId}) {

    const [Rate, setRate] = useState({});
    const [User, setUser] = useState({});

  
    useEffect(()=>{
      const fetchRate = async() =>{
          const res = await fetch(`http://localhost:3001/Rate/${RId}`);
          const data = await res.json();
          setRate(data)
      }
      const fetchUser = async() =>{
        const res = await fetch(`http://localhost:3001/Client/${UsId}`);
        const data = await res.json();
        setUser(data)
    }
       fetchRate();
       fetchUser();
       
      },[RId,UsId]
  )
  return (
    <div
    key={RId}
    className="fs-4 fw-normal">
     <div className="fs-4 fw-normal text-center mb-2"> Client: <br/>{User.SName} {User.FName?.split("")[0]}. {User.LName?.split("")[0]}.</div>
     <div className="fs-4 fw-normal text-center"> Value: {Rate.RateN}</div>
     <div className="fs-4 fw-normal text-center"> Comment: {Rate.Comment}</div>
  </div>  
  )
}

export default RateAndUser