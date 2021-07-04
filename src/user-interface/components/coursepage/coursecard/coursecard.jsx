import React from "react";
import { Link } from "react-router-dom";

const CourseCard = (props) => {
  const { course } = props;
  let image = "";
  let placeholder = require('../../../../assets/most-popular-pack1.png')
  if (course.images === null) {
    image = placeholder;
  } else {
    image = course.images.original ? course.images.original : placeholder;
  }

  return (
    <>
      <div className="card boxshadow">
        <img className="card-img-top" src={image} alt="img" />
        <div className="card-body" style={{ height: "151px" }}>
          <h6 className="card-title">{course.name ? course.name : ''}</h6>
          <p className="card-text text-muted">
            by {course.user.firstName ? course.user.firstName : '' + course.user.lastName ? course.user.lastName : ''}
          </p>
          <h6><Link to={"/courses/" + course.id}>Show more</Link></h6>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
