import React from "react";

import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form className="search-form">
        <div className="row">
          <div className="col-8">
            <input
              type="search"
              className="form-control"
              placeholder="Enter a city"
              autocomplete="off"
              autofocus
            />
          </div>
          <div className="col-4">
            <button type="submit" value="Search" className="btn btn-primary">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
