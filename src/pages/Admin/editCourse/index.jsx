import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useObjectGetter } from "../hooks/editeData";

import Input from "../../../componants/input";
import SuccessAlert from "../../../componants/alerts/success";
import ErrorAlert from "../../../componants/alerts/error";

export default function EditCourse() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const [formData, handleChange, handleSubmit, result] = useObjectGetter(
    "course",
    id
  );

  const [showMassage, setShowMassage] = useState(result);
  useEffect(() => {
    setShowMassage(result);
  }, [result]);

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label={"Course Name"}
        placeholder={"Enter Course Name"}
        type={"text"}
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <Input
        label={"Course Room"}
        placeholder={"Enter Course Room"}
        type={"text"}
        name="room"
        value={formData.room}
        onChange={handleChange}
      />
      <Input
        label={"Course Number Of Hours"}
        placeholder={"Enter Course Hours"}
        type={"number"}
        name="noHours"
        value={formData.noHours}
        onChange={handleChange}
      />
      <Input
        label={"Course Number Of Student"}
        placeholder={"Enter Course Number Of Student"}
        type={"number"}
        name="maxNumberOfStudent"
        value={formData.maxNumberOfStudent}
        onChange={handleChange}
      />
      <input type="submit" value="Update Course" className="btn btn-info" />
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
