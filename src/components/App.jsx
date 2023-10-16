import React, { Component } from 'react';

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

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  /*========= ADDING TO LOCAL STORAGE ========*/

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(savedContacts);

    if (savedContacts !== null) {
      this.setState({ contacts: parseContacts });
    }
  }

  /*============================================*/

  componentDidUpdate(prevProps, prevState) {
    const prevContacts = prevState.contacts;
    const currContacts = this.state.contacts;

    if (prevContacts !== currContacts) {
    }
    localStorage.setItem('contacts', JSON.stringify(currContacts));
  }

  /*======== FUNCTION ARE LAUNCHED ==============*/

  /*======== ADD CONTACT =========*/

  addContact = data => {
    const { contacts } = this.state;
    const newNames = data.name.toLowerCase();

    if (contacts.some(({ name }) => name.toLowerCase() === newNames)) {
      alert(`${data.name} is already in contacts!`);
    }

    this.setState(prevState => {
      return { contacts: [...prevState.contacts, { ...data, id: nanoid() }] };
    });
  };

  /*========= ON FILTER ==========*/

  onFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  /*========== GET CONTACTS & FILTERS ==========*/

  filterElem = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  /*======== DELETE CONTACTS BY USING BUTTON ========*/

  deleteContact = deleteId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== deleteId),
      };
    });
  };

  /*========= RENDER =========*/

  render() {
    const stateFilter = this.state.filter;
    const filterElement = this.filterElem();
    const addContacts = this.addContact;
    const onFilter = this.onFilter;
    const deleteContact = this.deleteContact;

    return (
      <Container>
        <PhonebookName>Phonebook</PhonebookName>
        <ContactForm addContact={addContacts} />

        <ContactFilter>
          <Contacts>Contacts</Contacts>
          <Filter value={stateFilter} onChange={onFilter} />
        </ContactFilter>

        <ContactList
          contactsBook={filterElement}
          deleteContact={deleteContact}
        />
      </Container>
    );
  }
}
