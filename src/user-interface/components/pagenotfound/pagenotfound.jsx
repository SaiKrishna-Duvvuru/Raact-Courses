import React from "react";
import { Link } from "react-router-dom";
import "../pagenotfound/pagenotfound.scss";

const PageNotFound = () => {
  return (
    <div className="container">
      <div className="card text-center shadow">
        <div className="card-body">
          <h3 className="card-title color">404: Page Not Found</h3>
          <p>&nbsp;</p>
          <p className="card-text">
            The page which you are navigating is not found
          </p>
          <p>&nbsp;</p>
          <h6>
            <a href="courses">
              <Link to="/">Back to Courses page</Link>
            </a>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
