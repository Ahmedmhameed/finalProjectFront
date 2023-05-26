import axios from "axios";

export async function getTeacher(value) {
  try {
    const response = await axios.get("http://localhost:9080/teacher/" + value);

    return [response.data];
  } catch (error) {
    console.log(error);
    return [error];
  }
}
