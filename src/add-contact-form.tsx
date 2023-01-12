import { useState } from "react";
import { Person } from "./Person";

const AddContactForm = ({ onAddContact }) => {
  const [newPerson, setNewPerson] = useState<Person>(null);

  const handleAddContact = (e) => {
    e.preventDefault();

    if (!newPerson) {
      return;
    }

    onAddContact(newPerson);
    setNewPerson(null);
  };

  return (
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
  );
};

export default AddContactForm;
