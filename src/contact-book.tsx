import { useState } from "react";
import AddContactForm from "./add-contact-form";
import ContactCard from "./contact-card";
import { Person } from "./Person";

const ContactBook = () => {
  const [persons, setPersons] = useState<Person[]>([]);

  const handleAddContact = (newPerson) => {
    setPersons([...persons, { ...newPerson }]);
  };

  return (
    <div>
      <AddContactForm onAddContact={handleAddContact} />
      <div>
        {persons.map((person) => (
          <ContactCard key={person.name} person={person} />
        ))}
      </div>
    </div>
  );
};

export default ContactBook;
