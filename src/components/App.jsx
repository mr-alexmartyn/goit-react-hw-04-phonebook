import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter.jsx';
import { ContactList } from './ContactList/ContactList';
import { AppContainer } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

    filter: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  filterContacts = e => {
    const { value } = e.target;
    this.setState({
      filter: value.toLowerCase(),
    });
  };
  onSubmitForm = ({ name, number }) => {
    if (this.state.contacts.find(el => el.name === name)) {
      alert(`${name} is alredy in contacts`);
      return;
    }
    this.setState({
      contacts: [
        ...this.state.contacts,
        {
          id: nanoid(),
          name: name,
          number: number,
        },
      ],
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  render() {
    return (
      <AppContainer>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.onSubmitForm} />

        {this.state.contacts.length > 0 && (
          <div>
            <h2>Contacts</h2>
            <Filter
              filter={this.state.filter}
              onChangeValue={this.filterContacts}
            />
            <ContactList
              contacts={this.state.contacts}
              filter={this.state.filter}
              onDeleteContact={this.deleteContact}
            />
          </div>
        )}
      </AppContainer>
    );
  }
}

App.propTypes = {
  onSubmit: PropTypes.func,
  filter: PropTypes.string,
};
