import React, { useEffect, useState } from "react";
import { useNotRegisteredCoursesGetter } from "./getNotRegisteredCourses";
import { useRegisterData } from "./RegisterACourse";

export default function RegisterCourse({ student }) {
  const [coursesState, setCoursesState] = useState();
  const [handleSubmit, setObject] = useRegisterData(
    coursesState,
    setCoursesState,
    student
  );
  let courses = useNotRegisteredCoursesGetter(student.id);

  let keys = ["id", "name", "room", "noHours", "maxNumberOfStudent"];

  useEffect(() => {
    setCoursesState(courses);
  }, [courses]);

  return (
    <table className="table mt-3" style={{ textAlign: "center" }}>
      <thead>
        <tr>
          {keys.map((key) => (
            <th scope="col" key={key}>
              {key.toUpperCase()}
            </th>
          ))}
          <th scope="col">{"Action"}</th>
        </tr>
      </thead>
      <tbody>
        {coursesState &&
          coursesState.map((c) => {
            return (
              <tr key={c.id}>
                {keys.map((key) => (
                  <td key={key}>{c[key]}</td>
                ))}

                <td>
                  <div className="row justify-content-center">
                    <form
                      action=""
                      method="post"
                      className="delete-form"
                      onSubmit={handleSubmit}
                    >
                      <input type="hidden" name="id" value="" />
                      <input
                        type="submit"
                        className="btn btn-primary ml-2"
                        value="Add"
                        name="deleteBtn"
                        onClick={() => setObject(c)}
                      />
                    </form>
                  </div>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
