import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { GlobalStyle } from './GlobalStyle';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleSubmit = (values, { resetForm }) => {
    if (
      this.state.contacts.some(
        contact =>
          contact.name.toLowerCase() === values.name.trim().toLowerCase()
      )
    )
      return alert(`${values.name} is already in contacts.`);

    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          id: nanoid(),
          name: values.name.trim(),
          number: values.number.trim(),
        },
      ],
    }));
    resetForm();
  };

  deleteHandler = e => {
    const { id } = e.currentTarget;
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleFilter = e => this.setState({ filter: e.currentTarget.value.trim() });

  contactFiltering = () => {
    return this.state.contacts
      ? this.state.contacts.filter(contact =>
          contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
        )
      : this.state.contacts;
  };

  render() {
    return (
      <div>
        <GlobalStyle />
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit} />

        <h2>Contacts</h2>
        <Filter handleFilter={this.handleFilter} />
        <ContactList
          contactList={this.contactFiltering()}
          value={this.state.filter}
          deleteHandler={this.deleteHandler}
        />
      </div>
    );
  }
}
