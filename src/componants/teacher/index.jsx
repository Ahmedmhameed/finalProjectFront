import React from "react";
import SingleNavItem from "../singleNavItem";
import MenuNaveItem from "../menuNaveItem";
import SingleMenuNaveItem from "../singleMenuNaveItem";
import { Link } from "react-router-dom";

export default function TeacherSidebar({
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
              url="/Teacher/"
              icon="fa-home"
              isClicked={clickedNav === "Home" ? true : false}
              setClicked={setClickedNv}
            />

            <MenuNaveItem
              text="Course"
              isClicked={clickedNav === "Course" ? true : false}
              icon="fa-book"
            >
              <SingleMenuNaveItem
                text="Registered Courses"
                url="/Teacher/registeredCourses"
                isClicked={clickedNav === "Registered Courses" ? true : false}
                setClicked={setClickedNv}
              />
              <SingleMenuNaveItem
                text="Register New Course"
                url="/Teacher/registerCourse"
                isClicked={clickedNav === "Register New Course" ? true : false}
                setClicked={setClickedNv}
              />
            </MenuNaveItem>
            <SingleNavItem
              text="Edit Your Data"
              url="/Teacher/editData"
              icon="fa-data"
              isClicked={clickedNav === "Edit Your Data" ? true : false}
              setClicked={setClickedNv}
            />
            <SingleNavItem
              text="Change Password"
              url="/Teacher/changePassword"
              icon="fa-data"
              isClicked={clickedNav === "Change Password" ? true : false}
              setClicked={setClickedNv}
            />

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
