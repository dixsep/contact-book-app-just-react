import { useState } from "react";
import { Person } from "./Person";

const ContactForm = ({ onSave, title, initialPerson = null }) => {
  const [person, setPerson] = useState<Person>(initialPerson);

  const handleSave = (e) => {
    e.preventDefault();

    if (!person) {
      return;
    }

    onSave(person);
    setPerson(null);
  };

  return (
    <form onSubmit={handleSave}>
      <div style={{ border: "1px solid lightgray", padding: "10px" }}>
        <h3>{title}</h3>

        <label style={{ paddingRight: "10px" }}>
          Name&nbsp;
          <input
            type="text"
            value={person?.name || ""}
            onChange={(e) => setPerson({ ...person, name: e.target.value })}
          />
        </label>

        <label style={{ paddingRight: "10px" }}>
          City&nbsp;
          <input
            type="text"
            value={person?.city || ""}
            onChange={(e) => setPerson({ ...person, city: e.target.value })}
          />
        </label>

        <button type="submit">Save</button>
      </div>
    </form>
  );
};

export default ContactForm;
