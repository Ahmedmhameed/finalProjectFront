import axios from "axios";

export async function getStudent(value) {
  try {
    const response = await axios.get("http://localhost:9080/student/" + value);
    console.log(response.data);

    return [response.data];
  } catch (error) {
    console.log(error);
    return [error];
  }
}
