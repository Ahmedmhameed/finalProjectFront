import axios from "axios";
import { useState } from "react";

export function useDeleteData(State = [], setState, studentID) {
  const [object, setObject] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    sendDeletedData(object, studentID);
  };

  const sendDeletedData = async (formData, studentID) => {
    try {
      await axios.post("http://localhost:9080/studentCourse/remove", {
        studentId: studentID,
        courseId: formData.id,
      });

      setState(State.filter((o) => o !== formData));
    } catch (error) {
      console.error(error);
    }
  };
  return [handleSubmit, setObject];
}
