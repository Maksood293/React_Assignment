import React, { useEffect, useState } from "react";
import Input from "../../common/Input/Input";
import { useLocation, useHistory } from "react-router-dom";
import "./style.css";
import Dropdown from "../../common/Dropdown/dropdown";
import { validateData } from "../../Utils/helper";
function StudentEnrollForm(props) {
  let params = useLocation();
  let history = useHistory();
  const [data, setData] = useState();
  const user = params.state?.user;
  const [error, setError] = useState({
    name: "",
    father_name: "",
    email: "",
    phone: "",
    dob: "",
    address: "",
    city: "",
    state: "",
    classes: "",
    marks: "",
    date: "",
    pin: "",
  });
  const [success, setSucces] = useState(false);
  const [studentDetail, setStudentDetail] = useState({
    id: Math.random(),
    name: "",
    father_name: "",
    email: "",
    phone: "",
    dob: "",
    address: "",
    city: "",
    state: "",
    classes: "",
    marks: "",
    date: "",
    pin: "",
  });

  useEffect(() => {
    if (user !== undefined && user !== null) {
      if (Object.keys(user).length > 0) {
        setStudentDetail((previus) => ({ ...previus, name: user.name }));
        setStudentDetail((previus) => ({
          ...previus,
          father_name: user.father_name,
        }));
        setStudentDetail((previus) => ({ ...previus, email: user.email }));
        setStudentDetail((previus) => ({ ...previus, phone: user.phone }));
        setStudentDetail((previus) => ({ ...previus, dob: user.dob }));
        setStudentDetail((previus) => ({ ...previus, address: user.address }));
        setStudentDetail((previus) => ({ ...previus, city: user.city }));
        setStudentDetail((previus) => ({ ...previus, state: user.state }));
        setStudentDetail((previus) => ({ ...previus, marks: user.marks }));
        setStudentDetail((previus) => ({ ...previus, date: user.date }));
        setStudentDetail((previus) => ({ ...previus, pin: user.pin }));
        setStudentDetail((previus) => ({ ...previus, classes: user.classes }));
        setStudentDetail((previus) => ({ ...previus, id: user.id }));
      }
    }
  }, []);

  useEffect(() => {
    const studentData = JSON.parse(localStorage.getItem("students-record"));
    if (studentData?.length > 0) {
      setData(studentData);
    }
  }, []);

  //for add new student data
  const handleSubmit = (e) => {
    e.preventDefault();
    validateData(studentDetail, setError, setSucces);
    if (data?.length > 0 && success) {
      setData((previous) => [...previous, studentDetail]);
      localStorage.setItem("students-record", JSON.stringify(data));
    } else if (success) {
      localStorage.setItem("students-record", JSON.stringify([studentDetail]));
    }
  };

  //for Edit the student data
  const updateSubmit = (e) => {
    e.preventDefault();
    if (data.length <= 1) {
      localStorage.setItem("students-record", JSON.stringify([studentDetail]));
    } else {
      const objIndex = data.findIndex((item) => item.id === studentDetail.id);
      const updatedProjects = [
        ...data.slice(0, objIndex),
        studentDetail,
        ...data.slice(objIndex + 1),
      ];
      localStorage.setItem("students-record", JSON.stringify(updatedProjects));
    }
    history.push("/home");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentDetail((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div class="container">
      <form
        id="form"
        class="form"
        onSubmit={(e) => (user ? updateSubmit(e) : handleSubmit(e))}
      >
        <h2>Enroll With Us</h2>

        <div className="form-field">
          <Input
            id="name"
            label="Student Name"
            type="text"
            placeholder="Enter Your Name"
            handleChange={handleChange}
            value={studentDetail.name}
            message={error.name}
          />
          <Input
            id="father_name"
            label="Father's Name"
            type="text"
            placeholder="Enter Your Father's Name"
            handleChange={handleChange}
            value={studentDetail.father_name}
            message={error.father_name}
          />
          <Input
            id="dob"
            label="birthday"
            type={studentDetail.dob ? "text" : "date"}
            placeholder="Enter Your Date of Birth"
            handleChange={handleChange}
            value={studentDetail.dob}
            message={error.dob}
          />
        </div>
        <div className="form-field">
          <Input
            id="address"
            label="Address"
            type="text"
            placeholder="Enter Your Address"
            handleChange={handleChange}
            value={studentDetail.address}
            message={error.address}
          />
          <Input
            id="city"
            label="City"
            type="text"
            placeholder="Enter Your City"
            handleChange={handleChange}
            value={studentDetail.city}
            message={error.city}
          />
          <Input
            id="state"
            label="State"
            type="text"
            placeholder="Enter Your State"
            handleChange={handleChange}
            value={studentDetail.state}
            message={error.state}
          />
        </div>
        <div className="form-field">
          <Input
            id="pin"
            label="Pin"
            type="number"
            placeholder="Enter Your Pincode"
            handleChange={handleChange}
            value={studentDetail.pin}
            message={error.pin}
          />
          <Input
            id="phone"
            label="Phone Number"
            type="number"
            placeholder="Enter Your Phone number"
            handleChange={handleChange}
            value={studentDetail.phone}
            message={error.phone}
          />
          <Input
            id="email"
            label="Email"
            type="email"
            placeholder="Enter Your Email"
            handleChange={handleChange}
            value={studentDetail.email}
            message={error.email}
          />
        </div>
        <div className="form-field">
          <Dropdown
            handleChange={handleChange}
            studentDetail={studentDetail}
            labelName="class"
          />
          <Input
            id="marks"
            label="Marks"
            type="text"
            placeholder="Enter Your Marks"
            handleChange={handleChange}
            value={studentDetail.marks}
            message={error.marks}
          />
          {studentDetail.date ? (
            <Input
              id="date"
              label="Date Enroll"
              type="text"
              placeholder="Date"
              handleChange={handleChange}
              value={studentDetail.date}
            />
          ) : (
            <Input
              id="date"
              label="Enrollment Date"
              type="datetime-local"
              placeholder="Date"
              handleChange={handleChange}
              value={studentDetail.date}
            />
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default StudentEnrollForm;
