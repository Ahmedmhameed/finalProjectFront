import axios from "axios";

export async function getTeachersByString(option, value) {
  try {
    const response = await axios.get(
      "http://localhost:9080/teacher/search/" + option + "/" + value
    );
    return [...response.data];
  } catch (error) {
    console.log(error);
    return [error];
  }
}
