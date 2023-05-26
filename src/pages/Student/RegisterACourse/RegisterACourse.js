import axios from "axios";
import { useState } from "react";

export function useRegisterData(State = [], setState, student) {
  const [object, setObject] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    sendDeletedData(object, student);
  };

  const sendDeletedData = async (formData, student) => {
    try {
      await axios.post("http://localhost:9080/studentCourse/add", {
        id: {
          studentId: student.id,
          courseId: formData.id,
        },
        student: {
          ...student,
        },
        course: {
          ...formData,
        },
        enrollmentDate: new Date(),
      });

      setState(State.filter((o) => o !== formData));
    } catch (error) {
      console.error(error);
    }
  };
  return [handleSubmit, setObject];
}
