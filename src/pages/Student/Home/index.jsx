import React from "react";
import Card from "./card";

export default function HomeStudent({ student = {} }) {
  return (
    <>
      <Card
        fullName={student.fullName}
        age={student.age}
        dob={student.dob}
        major={student.major}
        email={student.email}
      />
    </>
  );
}
