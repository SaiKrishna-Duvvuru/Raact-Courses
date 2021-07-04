import React, { useState } from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MainContext } from "../../context/context";

const Header = () => {
  const { setSearchValue } = useContext(MainContext);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchValue(inputValue);
    setInputValue("");
  };

  return (
    <>
        <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
          <h2>
            <NavLink to="/" className="navbar-brand">
              FESTO
            </NavLink>
          </h2>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto"></ul>
            <form className="d-flex" onSubmit={handleSubmit}>
              <input
                className="form-control mr-1"
                type="search"
                value={inputValue}
                onChange={handleChange}
                placeholder="Search for Courses..."
                aria-label="Search"
              />
              <button className="btn btn-outline-info ml-2" type="submit">
                Search 
              </button>
            </form>
          </div>
        </nav>
    </>
  );
};

export default Header;
