import { Component } from 'react'
import { func, string } from 'prop-types';
import classes from './Button.module.css'

export default class Button extends Component {
    static propsTypes = {
        onClick: func.isRequired,
        text: string
    }
    render() {
        const { onClick, text } = this.props;
        return (
            <button onClick={onClick} type='button' className={classes.root}>{text || 'Load more'}</button>
        )
    }
}
