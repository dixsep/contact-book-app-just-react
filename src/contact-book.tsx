import { useState } from "react";

const ContactBook = () => {

  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setContacts([...contacts, {id : contacts.length, name, number, isEditable : false}]);
    setName("");
    setNumber("");
  }

  const deleteContact = (id) =>  setContacts(contacts.filter((contact) => contact.id !== id));

  const editContact = (id) => {

    setContacts(contacts.map((item) => item.id === id ? {id, name, number, isEditable : true} : item));

    const contact = contacts.find((item) => item.id === id);
    setName(contact.name);
    setNumber(contact.number);

  }

  const editSubmit = (e,id) => {

    e.preventDefault()
    setContacts(contacts.map((item) => item.id === id ? {id, name, number, isEditable : false} : item));

    setName("");
    setNumber("");

  }
  return (
    <div>
      <div style = {{margin : '10px', padding : '5px', border : '2px solid black'}}>
        <h2>Add a New Contact</h2>
        <input type = 'text' placeholder = 'Enter ur name' value = {name} style = {{margin : '5px'}} onChange = {(e) => setName(e.target.value)}/>
        <input type = 'text' placeholder = 'Enter Contact Number' value = {number} style = {{margin : '5px'}} onChange = {(e) => setNumber(e.target.value)}/>
        <button onClick = {(e) => handleSubmit(e)}>Add Contact</button>
      </div>
      <div>
        {contacts.map((contact) => (

          <div style = {{margin : '5px', padding : '5px', border : '1px solid black'}}>
            {!contact.isEditable ? (
               <div>
               <h1>{contact.name}</h1>
               <p>Phone No : {contact.number}</p>
               <button onClick = {() => deleteContact(contact.id)} style={{margin : '5px'}}>Delete</button>
               <button onClick = {() => editContact(contact.id)}>Edit</button>
               </div>
            ) : (
              <div>
                <input type = 'text' placeholder = 'Enter ur name' value = {name} style = {{margin : '5px'}} onChange = {(e) => setName(e.target.value)}/>
                <input type = 'text' placeholder = 'Enter Contact Number' value = {number} style = {{margin : '5px'}} onChange = {(e) => setNumber(e.target.value)}/>
                <button onClick = {(e) => editSubmit(e,contact.id)}>Edit Contact</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
};

export default ContactBook;
