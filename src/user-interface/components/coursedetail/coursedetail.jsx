import React, {useState} from "react";
import { useContext } from "react";
import { MainContext } from "../context/context";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function CourseDetail({ match }) {

  const [courseForIdIs, setCourseForIdIs] = useState(null)

  const { courses } = useContext(MainContext);

  useEffect(() => {
    let courseForId = courses.find((item) => item.id = match.params.id)
    setCourseForIdIs(courseForId)
  }, [courses,match.params.id])

  return (
    <div className="container">
      <div className="card text-center shadow">
        <div className="card-body">
        <h5 className="card-title">
        {courseForIdIs ? courseForIdIs.name : ''}
          </h5>
          <p>&nbsp;</p>
          <p className="card-title">
            {courseForIdIs ? courseForIdIs.description : ''}
          </p>
          <p>&nbsp;</p>
          <h6>
            <Link to="/">Go to Course Page</Link>
          </h6>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;
