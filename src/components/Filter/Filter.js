import { Component } from 'react'
import { func } from 'prop-types';
import classes from './Filter.module.css';

export default class ContactList extends Component {
    static propsTypes = {
        handleFilter: func.isRequired
    }
    setFilterValue = e => {
        this.props.onHandleFilter(e.currentTarget.value.toUpperCase());
    };
    render() {
        return (
            <div className={classes.container}>
                <p  className={classes.title }>Filter contact</p>
                <input
                    className={classes.input}
                    name="search"
                    placeholder="Search ..."
                    onChange={this.setFilterValue}
                />
            </div>
            
        )
    }
}