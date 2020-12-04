import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home";
import UserDetail from "./pages/user-detail";
import Contact from "./pages/contact";
import CourseDetail from "./pages/course-detail";
import Payment from "./pages/payment";
import Project from "./pages/project";
import RegisterCourse from "./pages/register-course";
import RegisterSuccess from "./pages/register-success";
import Team from "./pages/team";
import Rule from "./pages/rule";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <main>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/hoc-vien">
              <UserDetail />
            </Route>
            <Route path="/lien-he">
              <Contact />
            </Route>
            <Route path="/khoa-hoc">
              <CourseDetail />
            </Route>
            <Route path="/thanh-toan">
              <Payment />
            </Route>
            <Route path="/du-an">
              <Project />
            </Route>
            <Route path="/dangki/khoa-hoc-:id">
              <RegisterCourse />
            </Route>
            {/* <Route path="/" >
              <RegisterSuccess />
            </Route> */}
            <Route path="/cfd-team">
              <Team />
            </Route>
            <Route path="/dieu-khoan">
              <Rule />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
