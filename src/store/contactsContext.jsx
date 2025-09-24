import { createContext, useReducer } from "react";
import { contactsReducer, initialState } from "./contactsReducer";

export const ContactsContext = createContext();

export const ContactsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(contactsReducer, initialState);

  return (
    <ContactsContext.Provider value={{ state, dispatch }}>
      {children}
    </ContactsContext.Provider>
  );
};
