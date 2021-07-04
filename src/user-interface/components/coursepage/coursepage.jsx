import React from "react";
import { useEffect, useState } from "react";
import {
  getCourses,
  getCoursesByParams,
} from "../../../services/courseService";
import CourseCard from "./coursecard/coursecard";
import Pagination from "../pagination/pagination";
import { useContext } from "react";
import { MainContext } from "../context/context";
import "../coursepage/coursecard/coursecard.scss";

const CoursePage = () => {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage] = useState(6);

  const { searchValue, setCourses, courses } = useContext(MainContext);

  useEffect(() => {
    if (searchValue) {
      setLoading(true);
      getCoursesByParams(searchValue).then((item) => {
        setCourses(item.publicLearningPathResults);
        setLoading(false);
      });
    } else {
      setLoading(true);
      getCourses().then((item) => {
        setCourses(item.publicLearningPathResults);
        setLoading(false);
      });
    }
  }, [searchValue, setCourses]);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentPage])

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);

  if (loading) {
    return (
      <div className="jumbotron bg-white">
        <div className="d-flex justify-content-center text-secondary loader">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  const courseitem = currentCourses.map((course) => {
    return (
      <div key={Math.random()} className="col-sm-6 col-md-4 py-3">
        <CourseCard course={course} />
      </div>
    );
  });

 
  const paginate = (pagenumber) => {
    setCurrentPage(pagenumber);
  };

  return (
    <>
      <div className="container">
        <div className="row">{courseitem}</div>
        <section>
          <p>&nbsp;</p>
          <Pagination
            coursesPerPage={coursesPerPage}
            totalCourses={courses.length}
            paginate={paginate}
          />
        </section>
      </div>
    </>
  );
};

export default CoursePage;
