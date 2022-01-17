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
      <Contact name="Hasib" phone="01837553116" email="mr.hasib45@gmail.com" />
      <Contact name="Swarna" phone="01837553116" email="swarna80@gmail.com" />
      <Contact name="Rana" phone="01837553116" email="rana@gmail.com" />
      <Contact name="Zara" phone="01837553116" />
    </div>
  );
};

export default Contacts;
