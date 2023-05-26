import React, { useState, useEffect } from "react";
import SearchBar from "../../../componants/searchInput";
import { getTeacher } from "./hook/getTeacher";
import { Link } from "react-router-dom";
import { useDeleteData } from "../hooks/deleteData";
import { getTeachersByString } from "./hook/getTeacherByString";

export default function SearchTeacher() {
  const searchMethods = ["id", "name", "email", "dob"];
  const [option, setOption] = useState(searchMethods[0]);
  const [value, setValue] = useState("");
  const [result, setResult] = useState(null);
  let keys = ["id", "fullName", "email", "dob"];
  const [handleSubmit, setObject] = useDeleteData("teacher");
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (option === "id") {
      const data = await getTeacher(value);
      setResult(data);
    } else if (["name", "email", "dob"].includes(option)) {
      const data = await getTeachersByString(option, value);
      setResult(data);
    }
  };

  useEffect(() => {
    setResult(result);
  }, [result]);

  return (
    <div>
      <div className="form-group">
        <label htmlFor="exampleFormControlSelect1">Example select</label>
        <select
          className="form-control"
          id="exampleFormControlSelect1"
          value={option}
          onChange={(e) => setOption(e.target.value)}
        >
          {searchMethods.map((sm) => (
            <option value={sm} key={sm}>
              {sm}
            </option>
          ))}
        </select>
      </div>
      <form onSubmit={handleSubmitForm}>
        {searchMethods.includes(option) && (
          <SearchBar
            label={"Search By " + option}
            value={value}
            setValue={setValue}
            placeholder={"Enter " + option}
          />
        )}

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {result && (
        <table className="table mt-3" style={{ textAlign: "center" }}>
          <thead>
            <tr>
              {keys.map((key) => (
                <th scope="col" key={key}>
                  {key.toUpperCase()}
                </th>
              ))}
              <th scope="col">{"Action"}</th>
              <th scope="col">{"Student Courses"}</th>
            </tr>
          </thead>
          <tbody>
            {result[0] &&
              result.map((s) => {
                return (
                  <tr key={s.id}>
                    {keys.map((key) => (
                      <td key={key}>{s[key]}</td>
                    ))}

                    <td>
                      <div className="row justify-content-center">
                        <Link
                          to={"/Admin/editStudent?id=" + s.id}
                          className="btn btn-info"
                        >
                          Edit
                        </Link>

                        <form
                          action=""
                          method="post"
                          className="delete-form"
                          onSubmit={handleSubmit}
                        >
                          <input type="hidden" name="id" value="" />
                          <input
                            type="submit"
                            className="btn btn-danger ml-2"
                            value="Delete"
                            name="deleteBtn"
                            onClick={() => setObject(s)}
                          />
                        </form>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      )}
    </div>
  );
}
