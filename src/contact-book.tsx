import { useState } from "react";

type Person = {
  name: string;
  city: string;
};

const ContactBook = () => {
  const [newPerson, setNewPerson] = useState<Person>(null);
  const [persons, setPersons] = useState<Person[]>([]);

  const handleAddContact = (e) => {
    e.preventDefault();

    if (!newPerson) {
      return;
    }

    setPersons([...persons, { ...newPerson }]);
    setNewPerson(null);
  };

  return (
    <div>
      <form onSubmit={handleAddContact}>
        <div style={{ border: "1px solid lightgray", padding: "10px" }}>
          <h3>Add a new contact</h3>

          <label style={{ paddingRight: "10px" }}>
            Name&nbsp;
            <input
              type="text"
              value={newPerson?.name || ""}
              onChange={(e) =>
                setNewPerson({ ...newPerson, name: e.target.value })
              }
            />
          </label>

          <label style={{ paddingRight: "10px" }}>
            City&nbsp;
            <input
              type="text"
              value={newPerson?.city || ""}
              onChange={(e) =>
                setNewPerson({ ...newPerson, city: e.target.value })
              }
            />
          </label>

          <button type="submit">Add contact</button>
        </div>
      </form>
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
