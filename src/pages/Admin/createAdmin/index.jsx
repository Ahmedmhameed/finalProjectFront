import React, { useEffect, useState } from "react";
import { useAddData } from "../hooks/addData";
import Input from "../../../componants/input";
import SuccessAlert from "../../../componants/alerts/success";
import ErrorAlert from "../../../componants/alerts/error";
import { useCount } from "../Home/hooks";
import { useNavigate } from "react-router-dom";
export default function CreateAdmin() {
  const numberOfAdmins = useCount("admin");
  const navTo = useNavigate();
  useEffect(() => {
    if (numberOfAdmins > 0) {
      navTo("/logIn");
    }
  }, [numberOfAdmins, navTo]);

  const [formData, handleChange, handleSubmit, result] = useAddData(
    {
      id: null,
      fname: "",
      lname: "",
      email: "",
      dob: "",
      password: "",
      passwordConfirm: "",
      powers: 3,
    },
    "admin"
  );
  const [showMassage, setShowMassage] = useState(result);
  useEffect(() => {
    setShowMassage(result);
  }, [result]);

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label={"Admin First Name"}
        placeholder={"Enter First Name"}
        type={"text"}
        name="fname"
        value={formData.fname}
        onChange={handleChange}
      />
      <Input
        label={"Admin Last Name"}
        placeholder={"Enter Last Name"}
        type={"text"}
        name="lname"
        value={formData.lname}
        onChange={handleChange}
      />
      <Input
        label={"Admin Email"}
        placeholder={"Enter Admin Email"}
        type={"email"}
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <Input
        label={"Admin Day Of Birth"}
        placeholder={"Enter Admin Birthday YYYY-MM-DD"}
        type={"text"}
        name="dob"
        value={formData.dob}
        onChange={handleChange}
      />
      <Input
        label={
          "Admin Password  it must have number and small and capital latter and one of (#@%&$)"
        }
        placeholder={"Enter Admin Password"}
        type={"password"}
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <Input
        label={"Admin confirm Password"}
        placeholder={"Enter Admin Password"}
        type={"password"}
        name="passwordConfirm"
        value={formData.passwordConfirm}
        onChange={handleChange}
      />
      <input type="submit" value="Make Admin" className="btn btn-info" />
      {showMassage === "success" && (
        <SuccessAlert
          title={"Success Operation"}
          body="The Change On Admin Courses is applied"
          setShowMassage={setShowMassage}
        />
      )}
      {showMassage === "error" && (
        <ErrorAlert
          title={"Error Operation"}
          body="The Change On Admin  did not apply"
          setShowMassage={setShowMassage}
        />
      )}
    </form>
  );
}
