import React, { Component } from 'react';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export class ContactList extends Component {
  render() {
    const { contacts, filter, onDeleteHandle } = this.props;
    return (
      <ul>
        {contacts
          .filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map(contact => (
            <ContactListItem
              name={contact.name}
              number={contact.number}
              key={contact.id}
              id={contact.id}
              onDeleteHandle={onDeleteHandle}
            />
          ))}
      </ul>
    );
  }
}
