import React from "react";
import Contact from "./Contact";

const Contacts = () => {
  function average(a:number, b:number) {
    return a + b / 2;
  }
  const total = average(2,1);
  console.log(total);
  return (
    <div>
      <h1>Contact List</h1>
      <Contact name="Hasib" email="mr.hasib45@gmail.com" />
      <Contact name="Swarna" email="swarna80@gmail.com" />
    </div>
  );
};

export default Contacts;
