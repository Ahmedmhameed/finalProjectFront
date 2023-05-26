import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useObjectGetter } from "../hooks/editeData";
import Input from "../../../componants/input";
import SuccessAlert from "../../../componants/alerts/success";
import ErrorAlert from "../../../componants/alerts/error";

export default function EditTeacher() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const [formData, handleChange, handleSubmit, result] = useObjectGetter(
    "teacher",
    id
  );

  const [showMassage, setShowMassage] = useState(result);
  useEffect(() => {
    setShowMassage(result);
  }, [result]);
  return (
    <form onSubmit={handleSubmit}>
      <Input
        label={"Teacher First Name"}
        placeholder={"Enter First Name"}
        type={"text"}
        name="fname"
        value={formData.fname}
        onChange={handleChange}
      />
      <Input
        label={"Teacher Last Name"}
        placeholder={"Enter Last Name"}
        type={"text"}
        name="lname"
        value={formData.lname}
        onChange={handleChange}
      />
      <Input
        label={"Teacher Email"}
        placeholder={"Enter Teacher Email"}
        type={"email"}
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <Input
        label={"Teacher Day Of Birth"}
        placeholder={"Enter Teacher Birthday YYYY-MM-DD"}
        type={"text"}
        name="dob"
        value={formData.dob}
        onChange={handleChange}
      />
      <Input
        label={"Teacher Salary"}
        placeholder={"Enter Teacher Salary"}
        type={"number"}
        name="salary"
        value={formData.salary}
        onChange={handleChange}
      />

      <input type="submit" value="Update Student" className="btn btn-info" />
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
