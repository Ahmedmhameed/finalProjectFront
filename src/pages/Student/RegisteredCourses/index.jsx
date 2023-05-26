import React, { useEffect, useState } from "react";
import { useRegisteredCoursesGetter } from "./getRegisteredCourses";
import { useDeleteData } from "./unRegisterACourse";

export default function RegisteredCourses({ student }) {
  const [coursesState, setCoursesState] = useState();
  const [handleSubmit, setObject] = useDeleteData(
    coursesState,
    setCoursesState,
    student.id
  );
  let courses = useRegisteredCoursesGetter(student.id);

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
                        className="btn btn-danger ml-2"
                        value="Delete"
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
