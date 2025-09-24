import { useContext, useEffect } from "react";
import { ContactsContext } from "../store/contactsContext";




export default function Contacts() {
  
  const { state, dispatch } = useContext(ContactsContext);

  useEffect(() => {
    fetch("https://playground.4geeks.com/contact/agendas/kevinAgenda/contacts")
      .then(res => res.json())
      .then(data => {
        console.log("Contactos cargados:", data);
        dispatch({ type: "LEER_CONTACTOS", payload: data.contacts || [] });
      })
      .catch(error => console.error("Error cargando contactos:", error));
  }, [dispatch]);

  const handleDelete = (id) => {
    fetch(`https://playground.4geeks.com/contact/agendas/kevinAgenda/contacts/${id}`, {
      method: "DELETE"
    })
      .then(res => {
        if (res.ok) {
          return fetch("https://playground.4geeks.com/contact/agendas/kevinAgenda/contacts");
        } else {
          throw new Error("No se pudo borrar el contacto");
        }
      })
      .then(res => res.json())
      .then(data => {
        dispatch({ type: "LEER_CONTACTOS", payload: data.contacts || [] });
      })
      .catch(err => console.error("Error borrando contacto:", err));
  };

  return (
    <div className="container py-4">
      <h1 className="mb-3">Contacts</h1>
      <ul>
        {state.contacts && state.contacts.map((c) => (
          <li key={c.id}>
            <strong>{c.name}</strong>
            <br />
            Phone: {c.phone}
            <br />
            Email: {c.email}
            <br />
            Address: {c.address}
            <button
              className="btn btn-warning btn-sm ms-2"
              onClick={() => navigate(`/edit/${c.id}`)}
            >
              Edit
            </button>

            <button
              className="btn btn-danger btn-sm ms-2"
              onClick={() => handleDelete(c.id)}
            >
              Delete
            </button>
          </li>

        ))}
      </ul>
    </div>
  );
}
