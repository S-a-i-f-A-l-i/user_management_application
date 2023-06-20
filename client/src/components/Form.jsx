import React, { useState } from "react";

const Form = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const handleChange = (e) => {
    if (e.target.name === "phone") {
      if (!isNaN(e.target.value)) {
        setValue((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
      } else {
        return;
      }
    }
    setValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={value.name}
            required={true}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            required={true}
            value={value.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            required={true}
            minLength={10}
            maxLength={10}
            value={value.phone}
            onChange={handleChange}
          />
        </div>
        <button type="submit">ADD</button>
      </form>
    </div>
  );
};

export default Form;
