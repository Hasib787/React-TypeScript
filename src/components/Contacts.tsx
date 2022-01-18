import React, { useState } from "react";
import Contact from "./Contact";

const Contacts = () => {
  const [contact, setContact] = useState("");
  const [contactList, setContactList] = useState([]);

  const handleAddContact = (e) => {
    e.preventDefault();
    setContactList([...contactList, contact]);
    setContact("");
  }
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
          <button onClick={handleAddContact}>Add</button>
      </div>
      <Contact name="Hasib" phone="01837553116" email="mr.hasib45@gmail.com" />
      <Contact name="Swarna" phone="01837553116" email="swarna80@gmail.com" />
      <Contact name="Zara" phone="01837553116" />
    </div>
  );
};

export default Contacts;
