import { useState } from "react";
import AddContactForm from "./add-contact-form";
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
        <ul>
          {persons.map((person) => (
            <li key={person.name}>
              {person.name} ({person.city})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactBook;
