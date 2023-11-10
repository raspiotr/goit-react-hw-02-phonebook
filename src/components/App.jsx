import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number, contacts } = this.state;
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }
    const id = nanoid();
    const contact = { id, name, number };
    console.log(contact);
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));

    this.setState({
      name: '',
      number: '',
    });
  };

  handleDelete = event => {
    event.preventDefault();
    const idToDelete = event.target.id;
    const { contacts } = this.state;
    const indexToDelete = contacts.findIndex(
      contact => contact.id === idToDelete
    );
    contacts.splice(indexToDelete, 1);
    this.setState({ contacts: contacts });
  };

  render() {
    const { contacts, filter, name, number } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          name={name}
          number={number}
          onChangeHandle={this.handleChange}
          onSubmitHandle={this.handleSubmit}
        />
        <h2>Contacts</h2>
        <Filter onChangeHandle={this.handleChange} />
        <ContactList
          contacts={contacts}
          filter={filter}
          onDeleteHandle={this.handleDelete}
        />
      </div>
    );
  }
}
