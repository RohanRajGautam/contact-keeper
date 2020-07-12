import React, { useContext, useRef, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";
import ContactForm from "./ContactForm";

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const { filterContacts, clearFilter, filtered } = contactContext;

  const text = useRef("");

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const onChange = (e) => {
    if (text.current.value !== "") {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type='text'
        placeholder='Search Contact'
        onChange={onChange}
      />
    </form>
  );
};

export default ContactFilter;
