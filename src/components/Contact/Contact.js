import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Contact.css"

const Contact = () => {
    return (
        <div className="contact">
      <h2 className="contact-text">How to make a contact</h2>
      <ul>
        <li>
          By calling us on + 88 09666 773377 (Saturday to Thursday, 09.00 to
          17.00)
        </li>
        <li>
          Online using our web form <NavLink to="/form">click here</NavLink>{" "}
        </li>
        <li>
          By emailing us at bd.enquiries@onlinetutor.org (Subject line:
          Complaint/Feedback/Appreciation)
        </li>
      </ul>
    </div>
    );
};

export default Contact;