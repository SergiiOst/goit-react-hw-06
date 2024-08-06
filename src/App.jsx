import { useState, useEffect } from "react";
import ContactList from "./components/ContactList/ContactList";
import contactData from "./assets/Contact.json";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

import "./App.css";

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = JSON.parse(
      window.localStorage.getItem("saved-contacts")
    );
    return savedContacts !== null ? savedContacts : contactData;
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  const AddContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  return (
    <>
      <h1 className="title">Phonebook</h1>
      <ContactForm onAddContact={AddContact} />
      <SearchBox value={search} onSearch={setSearch} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </>
  );
}
