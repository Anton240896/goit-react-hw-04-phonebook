import React, { useEffect, useState } from 'react';

import { ContactForm } from 'components/ContactForm/contactForm';
import { ContactList } from 'components/ContactList/contactList';
import { Filter } from 'components/Filter/filter';
import {
  ContactFilter,
  Container,
  PhonebookName,
  Contacts,
} from './App.styled';

import { nanoid } from 'nanoid';

/*======== HOOKS =======*/

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) || [];
  });
  const [filter, setFilter] = useState('');

  /*  ========= ADDING TO LOCAL STORAGE ========*/

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  /*  ======== FUNCTION ARE LAUNCHED ⬇️ (ADD CONTACT) =========*/

  const addContact = data => {
    setContacts(prevState => [...prevState, { ...data, id: nanoid() }]);
  };

  /*  ========= ON FILTER ==========*/

  const onFilter = evt => {
    setFilter(evt.currentTarget.value);
  };

  /*======== DELETE CONTACTS BY USING BUTTON ========*/

  const deleteContact = deleteId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== deleteId)
    );
  };

  /*========== FILTERS CONTACTS ==========*/

  const filterElem = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container>
      <PhonebookName>Phonebook</PhonebookName>
      <ContactForm onAdd={addContact} />

      <ContactFilter>
        <Contacts>Contacts</Contacts>
        <Filter value={filter} onChange={onFilter} />
      </ContactFilter>

      <ContactList contactsBook={filterElem} deleteContact={deleteContact} />
    </Container>
  );
};
