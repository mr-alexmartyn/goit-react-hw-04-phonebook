import {
  ContactListItem,
  ContactListItemNumber,
  ContactListItemName,
  ContactListItemButton,
} from './Contact.styled';
import PropTypes from 'prop-types';

export const Contact = p => {
  const { name, number, id } = p.contactItem;
  return (
    <ContactListItem>
      <ContactListItemName>{name}</ContactListItemName>
      <ContactListItemNumber>{number}</ContactListItemNumber>
      <ContactListItemButton onClick={() => p.onDeleteContact(id)}>
        Delete
      </ContactListItemButton>
    </ContactListItem>
  );
};

Contact.propTypes = {
  id: PropTypes.any,
  name: PropTypes.string,
  number: PropTypes.number,
  deleteContact: PropTypes.func,
};
