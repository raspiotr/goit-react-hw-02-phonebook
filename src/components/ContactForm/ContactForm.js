import React, { Component } from 'react';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  nameInputId = nanoid();
  phoneInputId = nanoid();

  render() {
    const { onChangeHandle, onSubmitHandle } = this.props;
    return (
      <form className={css.form} onSubmit={onSubmitHandle}>
        <label className={css.formLabel} htmlFor={this.nameInputId}>
          Name
        </label>
        <input
          className={css.formInput}
          type="text"
          name="name"
          id={this.nameInputId}
          onChange={onChangeHandle}
          pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label className={css.formLabel} htmlFor={this.phoneInputId}>
          Number
        </label>
        <input
          className={css.formInput}
          type="tel"
          name="number"
          id={this.phoneInputId}
          onChange={onChangeHandle}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className={css.formButton} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
