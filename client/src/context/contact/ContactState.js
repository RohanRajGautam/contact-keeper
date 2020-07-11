import React, { useReducer } from "react";
import uuid from "uuid";
import contactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "john doe",
        email: "jdoe@gmail.com",
        phone: "9861-111-222",
        type: "personal",
      },
      {
        id: 2,
        name: "mary jane",
        email: "mjane@gmail.com",
        phone: "9861-111-333",
        type: "personal",
      },
      {
        id: 3,
        name: "sara smith",
        email: "saras@gmail.com",
        phone: "9861-111-444",
        type: "professional",
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add contact

  // Delete Contact

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contact

  // Clear Filter

  return (
    <contactContext.Provider value={{ contacts: state.contacts }}>
      {props.children}
    </contactContext.Provider>
  );
};

export default ContactState;
