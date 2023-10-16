import { ContactContainer, ContactName } from './contact.styled';

export const Contact = ({ id, name, phone, deleteContact }) => {
  return (
    <ContactContainer>
      <ContactName>
        {name}: {phone}
      </ContactName>
      <button type="button" onClick={() => deleteContact(id)}>
        Delete
      </button>
    </ContactContainer>
  );
};
