import React, { useState } from "react";
import Contact from "./Contact";

const Contacts = () => {
  const [contact, setContact] = useState("");
  console.log(contact);
  
  return (
    <div>
      <h1>🦸Contact List</h1>
      <div className="form">
          <input
            className="formInput" 
            name="name"
            placeholder="Contact Name"
            type="text"
            onChange={(e)=>setContact(e.target.value)}
          />
          <button>Add</button>
      </div>
      <Contact name="Hasib" email="mr.hasib45@gmail.com" />
      <Contact name="Swarna" email="swarna80@gmail.com" />
      <Contact name="Zara" />
    </div>
  );
};

export default Contacts;
