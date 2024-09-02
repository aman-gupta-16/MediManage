import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Navigate } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";

const Doctors = () => {
  const { isAuthenticated, doctors, setDoctors } = useContext(Context);

  console.log(doctors);

  const handleDeleteDoctor = async (doctorId) => {
    try {
      await axios.delete(
        ` http://localhost:3000/api/v1/user/doctor/delete/${doctorId}`,
        { withCredentials: true }
      );
      toast.success("Doctor deleted successfully!");
      const updatedDoctors = doctors.filter(
        (doctor) => doctor._id !== doctorId
      );
      setDoctors(updatedDoctors);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }
  return (
    <section className="page doctors">
      <h1>DOCTORS</h1>
      <div className="banner">
        {doctors && doctors.length > 0 ? (
          doctors.map((element) => {
            return (
              <div className="card">
                <div className="deleteIcon">
                  <MdDeleteForever
                    onClick={() => handleDeleteDoctor(element._id)}
                  />
                </div>

                <img
                  src={element.docAvatar && element.docAvatar.url}
                  alt="doctor avatar"
                />
                <h4>{`${element.firstName} ${element.lastName}`}</h4>
                <div className="details">
                  <p>
                    Email: <span>{element.email}</span>
                  </p>
                  <p>
                    Phone: <span>{element.phone}</span>
                  </p>
                  <p>
                    Department: <span>{element.doctorDepartment}</span>
                  </p>
                  <p>
                    Gender: <span>{element.gender}</span>
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <h1>No Registered Doctors Found!</h1>
        )}
      </div>
    </section>
  );
};

export default Doctors;
