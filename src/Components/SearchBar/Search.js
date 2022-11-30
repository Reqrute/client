import React, {useState} from "react";
import "./Search.css";

const Search = ({render}) => {
  let searchBtn = (e) => {
    render(Name);
    e.preventDefault();
  };

  let [Name, setName] = useState("");

  return (
    <form
      className={`search d-flex flex-sm-row flex-column align-items-center justify-content-center  gap-4 mb-3`}
    >
      <input
        onChange={(e) => {setName(e.target.value)
        }}
        placeholder="Search for Name"
        className="input"
        type="text"
        value={Name}
      />
      <button
        onClick={searchBtn}
        className={`btna btn btn-light fs-5`}
      >
        Search
      </button>
    </form>
  );
};

export default Search;