import React from "react";
import DataBox from "./dataBox";
import { useCount } from "./hooks";

export default function Home() {
  return (
    <>
      <div className="row">
        <DataBox icon="" num={useCount("student")} text="Students" />
        <DataBox icon="" num={useCount("course")} text="Courses" />
      </div>
      <div className="row">
        <DataBox icon="" num={useCount("teacher")} text="Teacher" />
        <DataBox icon="" num={useCount("admin")} text="Admin" />
      </div>
    </>
  );
}
