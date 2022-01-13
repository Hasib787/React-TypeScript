import React from "react";
import Contact from "./Contact";

const Contacts = () => {
  
  return (
    <div>
      <h1>Contact List</h1>
      <div className="form">
          <input 
            name="name"
            placeholder="Contact Name"
            type="text"
          />
      </div>
      <Contact name="Hasib" email="mr.hasib45@gmail.com" />
      <Contact name="Swarna" email="swarna80@gmail.com" />
      <Contact name="Zara" />
    </div>
  );
};

export default Contacts;
