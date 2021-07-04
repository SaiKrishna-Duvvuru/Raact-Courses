import React from "react";
import Header from "./components/shared/header/header";
import CoursePage from "./components/coursepage/coursepage";
import Footer from "./components/shared/footer/footer";
import { MainContext } from "./components/context/context";
import { useState } from "react";
import CourseDetail from "./components/coursedetail/coursedetail";
import { Redirect, Route, Switch } from 'react-router-dom';
import PageNotFound from "./components/pagenotfound/pagenotfound";
import '../../src/user-interface/AppRoot.scss'

const AppRoot = () => { 
  const [courses, setCourses] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <div>
        
        <MainContext.Provider value={{ searchValue, setSearchValue,courses,setCourses }}>
          <header>
            <Header />
          </header>
          <section style={{ height: "40px" }}>&nbsp;</section>
          <section
            className="jumbotron text-center pt-2"
            style={{ height: "68px" }}>
            <h4 className="mt-4 grey">Courses</h4>
          </section>
          <main>
            <Switch>
              <Route path="/" exact render={() => <Redirect to="/courses" />} />
              <Route path="/courses" exact component={CoursePage} />
              <Route path="/courses/:id" component={CourseDetail} />
              <Route path="/**" component={PageNotFound} />
            </Switch>
          </main>
          <p>&nbsp;</p>
          <footer>
            <Footer />
          </footer>
        </MainContext.Provider>
      </div>
    </>
  );
};

export default AppRoot;
