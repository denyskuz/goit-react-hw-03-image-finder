import { Component } from 'react'
import { func, string } from 'prop-types';
import classes from './Gallery.module.css'

export default class Item extends Component {
    static propsTypes = { 
        alt: string.isRequired,
        image: string.isRequired,
        largeImage: string.isRequired,
        onClick: func.isRequired,
    }

    handleClick = () => { 
        const { onClick, largeImage } = this.props;
        onClick(largeImage)
    }
    render() {
        const { image, alt } = this.props;
        return (
            <div onClick={this.handleClick}> 
                <img className={classes.image} src={image} alt={alt} />
            </div>
        )
    }
};
