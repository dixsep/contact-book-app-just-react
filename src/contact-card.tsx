import { Person } from "./Person";

type ContactCardProps = {
  person: Person;
  onEditContact: () => void;
};

const ContactCard: React.FC<ContactCardProps> = ({ person, onEditContact }) => {
  return (
    <div style={{ border: "1px solid lightblue", margin: "10px" }}>
      <h3>{person.name}</h3>
      <div>
        <em>City:&nbsp;</em>
        {person.city}
      </div>
      <div>
        <button onClick={onEditContact}>Edit</button>
      </div>
    </div>
  );
};

export default ContactCard;
