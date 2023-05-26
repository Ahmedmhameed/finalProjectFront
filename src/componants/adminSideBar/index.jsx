import React from "react";
import SingleNavItem from "../singleNavItem";
import MenuNaveItem from "../menuNaveItem";
import SingleMenuNaveItem from "../singleMenuNaveItem";
import { Link } from "react-router-dom";

export default function AdminSidebar({
  clickedNav,
  setClickedNv,
  setUserData,
  setUserType,
}) {
  return (
    <div className="sidebar sidebar-style-2">
      <div className="sidebar-wrapper scrollbar scrollbar-inner">
        <div className="sidebar-content">
          <ul className="nav nav-primary">
            <SingleNavItem
              text="Home"
              url="/Admin/"
              icon="fa-home"
              isClicked={clickedNav === "Home" ? true : false}
              setClicked={setClickedNv}
            />
            <MenuNaveItem
              text="Students"
              isClicked={clickedNav === "Students" ? true : false}
              icon=" fa-address-card"
            >
              <SingleMenuNaveItem
                text="Show Students"
                url="/Admin/showStudents"
                isClicked={clickedNav === "Show Students" ? true : false}
                setClicked={setClickedNv}
              />
              <SingleMenuNaveItem
                text="Add New Student"
                url="/Admin/AddStudent"
                isClicked={clickedNav === "Add New Student" ? true : false}
                setClicked={setClickedNv}
              />
              <SingleMenuNaveItem
                text="Search on Students"
                url="/Admin/searchStudent"
                isClicked={clickedNav === "Search on Students" ? true : false}
                setClicked={setClickedNv}
              />
            </MenuNaveItem>
            <MenuNaveItem
              text="Course"
              isClicked={clickedNav === "Course" ? true : false}
              icon="fa-book"
            >
              <SingleMenuNaveItem
                text="Show Courses"
                url="/Admin/showCourses"
                isClicked={clickedNav === "Show Courses" ? true : false}
                setClicked={setClickedNv}
              />
              <SingleMenuNaveItem
                text="Add New Course"
                url="/Admin/addCourse"
                isClicked={clickedNav === "Add New Course" ? true : false}
                setClicked={setClickedNv}
              />
            </MenuNaveItem>
            <MenuNaveItem
              text="Teacher"
              isClicked={clickedNav === "Teacher" ? true : false}
              icon=" fa-address-card"
            >
              <SingleMenuNaveItem
                text="Show Teacher"
                url="/Admin/showTeachers"
                isClicked={clickedNav === "Show Teacher" ? true : false}
                setClicked={setClickedNv}
              />
              <SingleMenuNaveItem
                text="Add New Teacher"
                url="/Admin/addTeacher"
                isClicked={clickedNav === "Add New Teacher" ? true : false}
                setClicked={setClickedNv}
              />
              <SingleMenuNaveItem
                text="Search on Teachers"
                url="/Admin/searchTeachers"
                isClicked={clickedNav === "Search on Teachers" ? true : false}
                setClicked={setClickedNv}
              />
            </MenuNaveItem>
            <li
              className={"nav-item "}
              style={{ color: "tomato" }}
              onClick={() => {
                setUserData({});
                setUserType("");
                sessionStorage.removeItem("userData");
                sessionStorage.removeItem("userType");
              }}
            >
              <Link to={"/logIn"}>Log out</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
