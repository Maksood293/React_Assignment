import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Popup from "../../common/Popup/popup";

function Home() {
  const [data, setData] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [studentDetail, setStudentDetail] = useState();
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const studentData = JSON.parse(localStorage.getItem("students-record"));
    if (studentData?.length > 0) {
      setData(studentData);
    }
    setLoader(false);
  }, []);

  const togglePopup = (data) => {
    setStudentDetail(data);
    setIsOpen(!isOpen);
  };

  return (
    <div className="home-container">
      <div className="table-data">
        <div className="link-container">
          <Link to="enroll-new-student" className="Add-new-student-link">
            New Student
          </Link>
        </div>
        <table>
          <thead>
            <tr>
              <th scope="col">SNo.</th>
              <th scope="col">Student Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone#</th>
              <th scope="col">Class</th>
              <th scope="col">Marks%</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {loader ? (
              <h4>Loading......</h4>
            ) : data?.length > 0 ? (
              data.map((user, index) => (
                <tr key={user.id}>
                  <th scope="row">{index + 1}</th>
                  <td
                    className="user-details"
                    onClick={(e) => togglePopup(user)}
                  >
                    {user.name}
                  </td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.classes}</td>
                  <td>{user.marks}</td>
                  <td>
                    <Link
                      className="edit-button"
                      to={{ pathname: "enroll-new-student", state: { user } }}
                    >
                      Edit
                    </Link>{" "}
                  </td>
                </tr>
              ))
            ) : (
              <p>You Don't have any student record</p>
            )}
          </tbody>
        </table>
      </div>
      {isOpen && Object.keys(studentDetail).length && (
        <Popup data={studentDetail} handleClose={togglePopup} />
      )}
    </div>
  );
}

export default Home;
