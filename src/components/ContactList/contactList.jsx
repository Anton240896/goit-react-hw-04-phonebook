import { Contact } from 'components/Contact/contact';
import { ContactListStyled } from './contactList.styled';

export const ContactList = ({ contactsBook, deleteContact }) => {
  return (
    <ContactListStyled>
      {contactsBook.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          phone={number}
          deleteContact={deleteContact}
        />
      ))}
    </ContactListStyled>
  );
};
