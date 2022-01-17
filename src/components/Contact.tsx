import React from "react";

interface Iprops {
  name: string;
  phone: string;
  email?: string;
}
const Contact = ({name, phone, email = "N/A"}: Iprops) => {
  return (
    <div className="card">
      <p>
        <strong>Name:</strong>  {name}
      </p>
     <p>
       <strong>Phone:</strong> {phone}
     </p>
      <p>
        <strong>Email:</strong>  {email}

      </p>
     
    </div>
  );
};

export default Contact;
