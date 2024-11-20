import React, { useState, useEffect } from "react";
import "./UserForm.css";

const UserForm = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });

  useEffect(() => {
    if (initialData === null) {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        department: "",
      });
    }
    if (initialData) setFormData(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      department: "",
    });
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <h2>{initialData === null ? "Adding User" : "Editing User"}</h2>
      <input
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="First Name"
        required
      />
      <input
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Last Name"
        required
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        name="department"
        value={formData.department}
        onChange={handleChange}
        placeholder="Department"
        required
      />
      <button type="submit">
        {initialData === null ? "AddUser" : `EditUser`}
      </button>
    </form>
  );
};

export default UserForm;
