import { useState, useContext } from "react";
import { ContactsContext } from "../store/contactsContext";

const AddContact = () => {
  const { dispatch } = useContext(ContactsContext);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://playground.4geeks.com/contact/agendas/kevinAgenda/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        phone: String(phone),
        email,
        address
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log("Contacto creado:", data);
        return fetch("https://playground.4geeks.com/contact/agendas/kevinAgenda/contacts");
      })
      .then(res => res.json())
      .then(data => {
        dispatch({ type: "LEER_CONTACTOS", payload: data.contacts || [] });
      })
      .catch(error => console.log("Error creando contacto", error));
  };

  return (
    <div className="container py-4">
      <h1 className="mb-3">Add / Edit Contact</h1>
      <form onSubmit={handleSubmit} className="card p-4 shadow-sm">

        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter full name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="tel"
            className="form-control"
            placeholder="Enter phone number"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter address"
            value={address}
            onChange={e => setAddress(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Save Contact
        </button>
      </form>
    </div>

  );
};

export default AddContact;
