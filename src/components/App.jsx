import { Component } from "react";
import { ToastContainer } from 'react-toastify';
import { fetchImages, pageSize } from "../services/api";
import SearchBar from "./SearchBar";
import ImageGallery from "./ImageGallery";
import Button from "./Button";
import classes from './App.module.css'
export class App extends Component {
  state = {
    searchName: '',
    isLoading: false,
    currentPage: 1,
    items: [],
    error: null,
    totalHits: null,
  };
   componentDidUpdate(prevProps, prevState) {  
    const { searchName, currentPage } = this.state;

    if (prevState.searchName !== searchName ||
      prevState.currentPage !== currentPage) {
      this.setState({ isLoading: true });

      fetchImages({ searchName, currentPage })
        .then(data => { 
          this.setState((prevState) =>
          ({
            isLoading: false,
            items: data.hits.length ? [...prevState.items, ...data.hits] : [],
            totalHits: data.totalHits,
          })
          )
        }
        )
        .catch(error=> this.setState({error}))
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  };

  handleSubmit = (value) => {
    this.setState({searchName: value });
  
  };

  handleLoadMore = (prevState) => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage +1,
    }))
  };

  render() {
    const { items, isLoading, currentPage, totalHits } = this.state;
    const totalPages = totalHits / pageSize;
    return (
      <div className={classes.container}>
        <SearchBar onSubmit={this.handleSubmit} loading={isLoading} />
        {items ? <ImageGallery items={items} /> : 'Please try to enter another name'}
        {totalPages > currentPage && <Button onClick={this.handleLoadMore} />}
        <ToastContainer  autoClose={2000} />
      </div> 
    )
  }
}
