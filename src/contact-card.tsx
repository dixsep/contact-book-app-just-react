import { Person } from "./Person";

const ContactCard = ({ person }: { person: Person }) => {
  return (
    <div style={{ border: "1px solid lightblue", margin: "10px" }}>
      <h3>{person.name}</h3>
      <div>
        <em>City:&nbsp;</em>
        {person.city}
      </div>
    </div>
  );
};

export default ContactCard;
