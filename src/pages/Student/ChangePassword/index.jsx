import React, { useEffect, useState } from "react";
import Input from "../../../componants/input";
import SuccessAlert from "../../../componants/alerts/success";
import ErrorAlert from "../../../componants/alerts/error";
import { useChangePassword } from "./updateHook";

export default function ChangePassword({ Id }) {
  const [formData, handleChange, handleSubmit, result] = useChangePassword({
    userId: Id,
    oldPassword: "",
    newPassword: "",
    passwordConfirm: "",
  });
  const [showMassage, setShowMassage] = useState(result);
  useEffect(() => {
    setShowMassage(result);
  }, [result]);

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label={"Old Password"}
        placeholder={"Enter Old Password"}
        type={"password"}
        name="oldPassword"
        value={formData.oldPassword}
        onChange={handleChange}
      />
      <Input
        label={"New Password"}
        placeholder={"Enter New Password"}
        type={"password"}
        name="newPassword"
        value={formData.newPassword}
        onChange={handleChange}
      />
      <Input
        label={" confirm Password"}
        placeholder={"Enter  Password Again"}
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
