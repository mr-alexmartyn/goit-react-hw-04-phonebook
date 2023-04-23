import { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter.jsx';
import { ContactList } from './ContactList/ContactList';
import { AppContainer } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const isFirstRender = useRef(true);

  useEffect(() => {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    console.log(parsedContacts);
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    contacts.length >= 0 &&
      localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filterContacts = e => setFilter(e.target.value.toLowerCase());

  const onSubmitForm = ({ name, number }) => {
    if (contacts.find(el => el.name === name)) {
      alert(`${name} is alredy in contacts`);
      return;
    }
    setContacts(state => [
      ...state,
      { id: nanoid(), name: name, number: number },
    ]);
  };

  const deleteContact = contactId => {
    setContacts(state => state.filter(contact => contact.id !== contactId));
  };

  return (
    <AppContainer>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onSubmitForm}></ContactForm>
      {contacts.length > 0 && (
        <div>
          <h2>Contacts</h2>
          <Filter filter={filter} onChangeValue={filterContacts} />

          <ContactList
            onDeleteContact={deleteContact}
            contacts={contacts}
            filter={filter}
          />
        </div>
      )}
    </AppContainer>
  );
};

//

App.propTypes = {
  onSubmit: PropTypes.func,
  filter: PropTypes.string,
  contacts: PropTypes.shape({
    id: PropTypes.any.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    deleteContact: PropTypes.func,
  }),
};
