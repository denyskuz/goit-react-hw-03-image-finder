import { Component } from 'react'
import { arrayOf, string, shape } from 'prop-types';
import classes from './Gallery.module.css';
import Item from './Item';
import Modal from 'components/Modal';

export default class Gallery extends Component {
    static propsTypes = { 
        items: arrayOf(
            shape({
                id: string.isRequired,
                webformatURL: string.isRequired,
                largeImageURL: string.isRequired,
                tags: string.isRequired,
            })
        )
    }
    state = {
        showModal: false,
        largeImage: ''
    };  
     toggleModal = () => {
        this.setState(({ showModal }) => ({
            showModal: !showModal
        }));
     };
    
    handleClick = (value) => {
        this.setState({ largeImage: value });
        this.toggleModal();
    };

    render() {
        const { items } = this.props;
        const { largeImage, showModal } = this.state;
        return (
            <>
                <ul className={classes.root}>
                {items && items.map(({id, tags, webformatURL, largeImageURL}) => (
                    <li className={classes.item} key={id}>
                        <Item
                            image={webformatURL}
                            alt={tags}
                            largeImage={largeImageURL}
                            onClick={this.handleClick}
                            
                        />
                    </li>
                )
                )}
                </ul>
                { showModal && 
                    <Modal onClose={this.toggleModal}>
                        <img src={largeImage} alt="" />
                    </Modal>
                }
            </>
        )
    }
};
