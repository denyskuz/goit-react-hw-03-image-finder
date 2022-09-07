import { Component } from 'react'
import { func, bool } from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import classes from './Search.module.css'
import cn from 'classnames'

export default class Search extends Component {
    static propsTypes = { 
        onSubmit: func.isRequired,
        loading: bool
    }
    handleSubmit = event => {
        const { onSubmit } = this.props;
        const target = event.target;
        const value = target.elements['search'].value;
        event.preventDefault();
        if (value.trim() === '') {
            return toast.error(`Please enter image name!`);
        }
        onSubmit(value)
    
    }
    render() {
        const { loading } = this.props
        return (
            <header className={classes.root}>
                <form className={classes.form} onSubmit={this.handleSubmit}>
                    <button type="submit" className={cn(classes.button, {[classes.loading]:loading })}>
                        <span className={classes.label}>Search</span>
                    </button>
                    <input
                        className={classes.input}
                        type="text"
                        name="search"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
};
