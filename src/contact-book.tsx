import { useState } from "react";
import ContactForm from "./contact-form";
import ContactCard from "./contact-card";
import { Person } from "./Person";
import { v4 as uuidv4 } from "uuid";

const ContactBook = () => {
  const [persons, setPersons] = useState<Person[]>([]);
  const [personBeingEdited, setPersonBeingEdited] = useState<string | null>(
    null
  );

  const handleAddContact = (newPerson) => {
    setPersons([...persons, { id: uuidv4(), ...newPerson }]);
  };

  return (
    <div>
      <ContactForm title="Add a new contact" onSave={handleAddContact} />
      <div>
        {persons.map((person) => {
          if (personBeingEdited && person.id === personBeingEdited) {
            return (
              <>
                <div>This will be the form to edit {person.name}</div>
                <button onClick={() => setPersonBeingEdited(null)}>Save</button>
              </>
            );
          }
          return (
            <ContactCard
              key={person.id}
              person={person}
              onEditContact={() => setPersonBeingEdited(person.id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ContactBook;
