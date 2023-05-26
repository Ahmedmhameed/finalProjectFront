import axios from "axios";
import { useState } from "react";

export function useAddData(object, controller) {
  const [formData, setFormData] = useState(object);
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === formData.passwordConfirm) {
      sendFormData(formData);
    } else {
      setResult("error");
    }
  };

  const sendFormData = async (formData) => {
    try {
      const { passwordConfirm, ...data } = formData;
      const response = await axios.post(
        "http://localhost:9080/" + controller + "/add",
        data
      );
      setResult(response.data);
      setFormData(object);
    } catch (error) {
      console.log(error);
    }
  };
  return [formData, handleChange, handleSubmit, result];
}
