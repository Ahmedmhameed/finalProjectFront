import axios from "axios";
import { useEffect, useState } from "react";

export function useRegisteredCoursesGetter(id) {
  const [dataArray, setDataArray] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9080/student/courses/" + id)
      .then((response) => {
        setDataArray(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [id]);
  return dataArray;
}
