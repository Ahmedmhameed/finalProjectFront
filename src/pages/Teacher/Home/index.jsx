import React from "react";
import Card from "./card";

export default function HomeTeacher({ teacher = {} }) {
  console.log(teacher);
  return (
    <>
      <Card
        fullName={teacher.fullName}
        age={teacher.age}
        dob={teacher.dob}
        salary={teacher.salary}
        email={teacher.email}
      />
    </>
  );
}
