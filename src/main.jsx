import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { ContactsProvider } from "./store/contactsContext"; 

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ContactsProvider>
      <AppRoutes />
    </ContactsProvider>
  </BrowserRouter>
);
