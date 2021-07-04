import React from "react";

const Pagination = ({ coursesPerPage, totalCourses, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCourses / coursesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <nav>
        <ul className="pagination pagination-md justify-content-center">
          {pageNumbers.map((page) => (
            <li key={page} className="page-item">
              <button
                className="page-link btn btn-primary"
                onClick={() => paginate(page)}
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
