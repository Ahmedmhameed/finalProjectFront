import React from "react";

export default function Card({
  fullName = "",
  salary = "",
  email = "",
  dob = "",
  age = 0,
}) {
  return (
    <div
      className="card-body"
      style={{ background: "white", boxShadow: "1px 2px 10px black" }}
    >
      <div className="card-title">Student Data</div>
      <div className="row py-3">
        <div className="col-md-4 d-flex flex-column justify-content-around">
          <div>
            <h6 className="fw-bold text-uppercase text-danger op-8">
              Full Name
            </h6>
            <h3 className="fw-bold">{fullName}</h3>
          </div>
          <div>
            <h6 className="fw-bold text-uppercase text-success op-8">
              Day of Birth
            </h6>
            <h3 className="fw-bold">
              {dob} age : {age}
            </h3>
          </div>
        </div>
        <div className="col-md-4 d-flex flex-column justify-content-around">
          <div>
            <h6 className="fw-bold text-uppercase text-success op-8">Salary</h6>
            <h3 className="fw-bold">{salary}</h3>
          </div>
          <div>
            <h6 className="fw-bold text-uppercase text-danger op-8">Email</h6>
            <h3 className="fw-bold">{email}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
