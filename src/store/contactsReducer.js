export const initialState = { contacts: [] };

export const contactsReducer = (state, action) => {
  switch (action.type) {
    case "LEER_CONTACTOS":
      return { ...state, contacts: action.payload };
    default:
      return state;
  }
};
