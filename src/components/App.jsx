import { Component } from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import classes from "./App.module.css"
import Filter from "./Filter";

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }
  handleSubmit = values => {
    const contacts = this.state.contacts;
    if (contacts.find(contact => contact.name === values.name)) {
      alert(`${values.name} is already in contacts !!!`);
      return;
    }
    this.setState({ contacts: [values, ...contacts] });
  };

  handlerDelete = contactId => {
    this.setState({ contacts: [...this.state.contacts.filter(item => item.id !== contactId)] });
  };

  handleFilter = value => {
    this.setState({filter: value}); 
};
  render() {
    const { filter, contacts } = this.state;
    const filterContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <div className={classes.wrapper}>
        <div className={classes.container}>
            <h1 className={classes.title}>PhoneBook</h1>
            <ContactForm onSubmit={this.handleSubmit} />
        </div>
        <div className={classes.container}>
          <h2 className={classes.title}>Contacts</h2>
          <Filter onHandleFilter={this.handleFilter} />
          <ContactList
            contacts={filterContacts}
            onDelete={this.handlerDelete}
            />
        </div>
      </div>
    )
  }
}
