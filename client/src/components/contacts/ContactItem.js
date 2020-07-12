import React, { useContext } from "react";
import PropTypes from "prop-types";
import ContactContext from "../../context/contact/contactContext";

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact } = contactContext;

  const { id, name, email, phone, type } = contact;

  const onDelete = () => {
    deleteContact(id);
  };

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {name.capitalize()}{" "}
        <span
          style={{ float: "right" }}
          className={
            "badge " + (type === "personal" ? "badge-primary" : "badge-success")
          }
        >
          {type.capitalize()}
        </span>
      </h3>
      <ul className='list'>
        {email && (
          <li>
            <i className='fas fa-envelope' /> {email}
          </li>
        )}
        {phone && (
          <li>
            <i className='fas fa-phone-square-alt' /> {phone}
          </li>
        )}
      </ul>
      <p>
        <button className='btn btn-dark btn-sm '>Edit</button>
        <button className='btn btn-danger btn-sm' onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

ContactItem.protoType = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
