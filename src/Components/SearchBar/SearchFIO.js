import React, {useState} from "react";
import "./Search.css";

const SearchFIO = ({render}) => {
  let searchBtn = (e) => {
    render(Second,First,Last)
    e.preventDefault();
  };

  let [Second, setSecond] = useState("");
  let [First, setFirst] = useState("");
  let [Last, setLast] = useState("");

  return (
    <form
      className={`search d-flex flex-sm-row align-items-center justify-content-center gap-1`}
    >

      <div className="col-md-2 mb-3">
                <input type="text" className="inputs" 
                        placeholder="Second Name"
                                  value={Second} 
                onChange={(e) => {setSecond(e.target.value)}}
                />
          </div>

          <div className="col-md-2 mb-3">
                <input type="text" className="inputs" 
                        placeholder="First Name"
                                  value={First} 
                onChange={(e) => {setFirst(e.target.value)}}
                />
          </div>

          <div className="col-md-2 mb-3">
                <input type="text" className="inputs" 
                        placeholder="Last Name"
                                  value={Last} 
                onChange={(e) => {setLast(e.target.value)}}
                />
          </div>
      <button
        onClick={searchBtn}
        className={`btna btn btn-light fs-5 mb-3`}
      >
        Search
      </button>
    </form>
  );
};

export default SearchFIO;