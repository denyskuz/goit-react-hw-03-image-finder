import { Component } from 'react'
import { arrayOf, shape, string, number, func } from 'prop-types';
import classes from './ContactList.module.css';

export default class ContactList extends Component {
    static propsTypes = {
        contacts: arrayOf(shape({
            id: string.isRequired,
            name: string.isRequired,
            number: number.isRequired
        })).isRequired,
        onDelete: func.isRequired
    }

    render() {
        const items = this.props.contacts;
        console.log('Чому цей компонент завантажується два рази ?');
        return (
            <ul className={classes.items}>
                {items && items.map(({name, number, id }) => (
                    <li
                        key={id}
                        className={classes.item}
                    >
                        {`${name}: ${number}`}
                        <button
                            className={classes.deleteBtn}
                            type="button"
                            onClick={() => this.props.onDelete(id)}
                            title="Delete"
                        >
                        &#10006;
                        </button>
                   </li>
                ))}
            </ul>
        )
    }
}