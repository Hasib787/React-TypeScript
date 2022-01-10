import React from "react";

interface Iprops {
  name: string;
  email: string;
}
const Contact = (props: Iprops) => {
  return (
    <div className="card">
      <p>
        <strong>Name:</strong>  {props.name}
      </p>
     
      <p>
        <strong>Email:</strong>  {props.email}
      </p>
     
    </div>
  );
};

export default Contact;
