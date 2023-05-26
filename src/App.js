import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./componants/header";
import AdminSidebar from "./componants/adminSideBar";
import Home from "./pages/Admin/Home";
import ContentContainer from "./componants/contantContainar";
import ShowStudents from "./pages/Admin/showStudnet";
import ShowCourses from "./pages/Admin/showCourse";
import CreateCourses from "./pages/Admin/createCourses";
import CreateStudent from "./pages/Admin/createStudent";
import EditCourse from "./pages/Admin/editCourse";
import EditStudent from "./pages/Admin/editStudent";
import StudentCourses from "./pages/Admin/ShowStudentCourses";
import SearchStudent from "./pages/Admin/searchStudent";
import { useState } from "react";
import ShowTeachers from "./pages/Admin/showTeacher";
import CreateTeacher from "./pages/Admin/createTeacher";
import EditTeacher from "./pages/Admin/editTeacher";
import SearchTeacher from "./pages/Admin/searchTeacher";
import LogIn from "./pages/logIn";
import CreateAdmin from "./pages/Admin/createAdmin";
import StudentSidebar from "./componants/studentSideBar";
import HomeStudent from "./pages/Student/Home";
import RegisteredCourses from "./pages/Student/RegisteredCourses";
import RegisterCourse from "./pages/Student/RegisterACourse";
import EditData from "./pages/Student/editeData";
import ChangePassword from "./pages/Student/ChangePassword";
import TeacherSidebar from "./componants/teacher";
import HomeTeacher from "./pages/Teacher/Home";
function App() {
  let [clickedNav, setClickedNv] = useState("Home");
  let [userData, setUserData] = useState(
    JSON.parse(sessionStorage.getItem("userData")) ?? {}
  );
  let [userType, setUserType] = useState(
    sessionStorage.getItem("userType") ?? ""
  );

  return (
    <div className="wrapper">
      <Router>
        <Header clickedNav={clickedNav} />
        {userType === "Admin" && (
          <AdminSidebar
            clickedNav={clickedNav}
            setClickedNv={setClickedNv}
            setUserData={setUserData}
            setUserType={setUserType}
          />
        )}
        {userType === "Student" && (
          <StudentSidebar
            clickedNav={clickedNav}
            setClickedNv={setClickedNv}
            setUserData={setUserData}
            setUserType={setUserType}
          />
        )}
        {userType === "Teacher" && (
          <TeacherSidebar
            clickedNav={clickedNav}
            setClickedNv={setClickedNv}
            setUserData={setUserData}
            setUserType={setUserType}
          />
        )}
        <ContentContainer>
          <Routes>
            <Route path="/" element={<CreateAdmin />} />
            <Route
              path={"/logIn"}
              element={
                <LogIn setUserData={setUserData} setUserType={setUserType} />
              }
            />
            {userType === "Admin" && (
              <>
                <Route path={"/Admin/"} element={<Home />} />
                <Route
                  path={"/Admin/showStudents"}
                  element={<ShowStudents />}
                />
                <Route path={"/Admin/showCourses"} element={<ShowCourses />} />
                <Route path={"/Admin/addCourse"} element={<CreateCourses />} />
                <Route path={"/Admin/addStudent"} element={<CreateStudent />} />
                <Route path={"/Admin/editCourse"} element={<EditCourse />} />
                <Route path={"/Admin/editStudent"} element={<EditStudent />} />
                <Route
                  path={"/Admin/studentCourses"}
                  element={<StudentCourses />}
                />
                <Route
                  path={"/Admin/searchStudent"}
                  element={<SearchStudent />}
                />
                <Route
                  path={"/Admin/showTeachers"}
                  element={<ShowTeachers />}
                />
                <Route path={"/Admin/addTeacher"} element={<CreateTeacher />} />
                <Route
                  path={"/Admin/searchTeachers"}
                  element={<SearchTeacher />}
                />
                <Route path={"/Admin/editTeacher"} element={<EditTeacher />} />
              </>
            )}
            {userType === "Student" && (
              <>
                <Route
                  path={"/Student/"}
                  element={<HomeStudent student={userData} />}
                />
                <Route
                  path={"/Student/registeredCourses"}
                  element={<RegisteredCourses student={userData} />}
                />
                <Route
                  path={"/Student/registerCourse"}
                  element={<RegisterCourse student={userData} />}
                />
                <Route
                  path={"/Student/editData"}
                  element={
                    <EditData student={userData} setUserData={setUserData} />
                  }
                />
                <Route
                  path={"/Student/changePassword"}
                  element={<ChangePassword Id={userData.id} />}
                />
              </>
            )}
            {userType === "Teacher" && (
              <>
                <Route
                  path={"/Teacher/"}
                  element={<HomeTeacher teacher={userData} />}
                />
                <Route
                  path={"/Teacher/changePassword"}
                  element={<ChangePassword Id={userData.id} />}
                />
              </>
            )}
          </Routes>
        </ContentContainer>
      </Router>
    </div>
  );
}

export default App;
