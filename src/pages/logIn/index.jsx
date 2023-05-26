import React, { useEffect } from "react";
import Input from "../../componants/input";
import { useCheckData } from "./checkLogInData";
import { useNavigate } from "react-router-dom";

function LogIn({ setUserData, setUserType }) {
  const [logInData, handleSubmit, handleChange, result] = useCheckData();
  const navigate = useNavigate();

  if (
    JSON.parse(sessionStorage.getItem("userData")) &&
    sessionStorage.getItem("userType")
  ) {
    navigate(`/${sessionStorage.getItem("userType")}/`);
  }
  useEffect(() => {
    setUserData(result.userData);
    setUserType(result.className);
    if (result.userData && result.className) {
      navigate(`/${result.className}/`);
      sessionStorage.setItem("userData", JSON.stringify(result.userData));
      sessionStorage.setItem("userType", result.className);
    }
  }, [result, setUserData, setUserType, navigate]);

  return (
    <div className="row ">
      <div className="loginForm " style={{ width: "80%" }}>
        <form onSubmit={handleSubmit}>
          <Input
            label="Enter your Email"
            name="email"
            placeholder="example@gmail.com"
            type="email"
            value={logInData.email}
            onChange={handleChange}
          />
          <Input
            label="Enter your password"
            name="password"
            placeholder="Enter your password"
            type="password"
            value={logInData.password}
            onChange={handleChange}
          />
          <input type="submit" value="Log in" className="btn btn-primary" />
        </form>
      </div>
    </div>
  );
}

export default LogIn;
