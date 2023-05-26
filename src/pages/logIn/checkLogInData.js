import axios from "axios";
import { useState } from "react";

export function useCheckData() {
  const [logInData, setLogInData] = useState({ email: "", password: "" });
  const [result, setResult] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    sendData(logInData);
  };
  const handleChange = (e) => {
    setLogInData({
      ...logInData,
      [e.target.name]: e.target.value,
    });
  };
  const sendData = async (data) => {
    try {
      const response = await axios.get(
        `http://localhost:9080/user/check/${logInData.email}/${logInData.password}`
      );
      setResult(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return [logInData, handleSubmit, handleChange, result];
}
