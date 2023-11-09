import React, { Component } from 'react';
import css from './ContactListItem.module.css';

export class ContactListItem extends Component {
  render() {
    const { name, number } = this.props;

    return (
      <li className={css.listItem}>
        <span className={css.listItemText}>
          {name}: {number}
        </span>
      </li>
    );
  }
}
