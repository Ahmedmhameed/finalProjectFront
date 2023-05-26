import React, { useEffect, useState } from "react";
import { useAddData } from "../hooks/addData";
import Input from "../../../componants/input";
import SuccessAlert from "../../../componants/alerts/success";
import ErrorAlert from "../../../componants/alerts/error";

export default function CreateStudent() {
  const [formData, handleChange, handleSubmit, result] = useAddData(
    {
      id: null,
      fname: "",
      lname: "",
      major: "",
      email: "",
      dob: "",
      password: "",
      passwordConfirm: "",
    },
    "student"
  );
  const [showMassage, setShowMassage] = useState(result);
  useEffect(() => {
    setShowMassage(result);
  }, [result]);

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label={"Student First Name"}
        placeholder={"Enter First Name"}
        type={"text"}
        name="fname"
        value={formData.fname}
        onChange={handleChange}
      />
      <Input
        label={"Student Last Name"}
        placeholder={"Enter Last Name"}
        type={"text"}
        name="lname"
        value={formData.lname}
        onChange={handleChange}
      />
      <Input
        label={"Student Email"}
        placeholder={"Enter Student Email"}
        type={"email"}
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <Input
        label={"Student Day Of Birth"}
        placeholder={"Enter Student Birthday YYYY-MM-DD"}
        type={"text"}
        name="dob"
        value={formData.dob}
        onChange={handleChange}
      />
      <Input
        label={"Student Major"}
        placeholder={"Enter Student Major"}
        type={"text"}
        name="major"
        value={formData.major}
        onChange={handleChange}
      />
      <Input
        label={
          "Student Password  it must have number and small and capital latter and one of (#@%&$)"
        }
        placeholder={"Enter Student Password"}
        type={"password"}
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <Input
        label={"Student confirm Password"}
        placeholder={"Enter Student Password"}
        type={"password"}
        name="passwordConfirm"
        value={formData.passwordConfirm}
        onChange={handleChange}
      />

      <input type="submit" value="Add Student" className="btn btn-info" />
      {showMassage === "success" && (
        <SuccessAlert
          title={"Success Operation"}
          body="The Change On Student Courses is applied"
          setShowMassage={setShowMassage}
        />
      )}
      {showMassage === "error" && (
        <ErrorAlert
          title={"Error Operation"}
          body="The Change On Student Courses did not apply"
          setShowMassage={setShowMassage}
        />
      )}
    </form>
  );
}
