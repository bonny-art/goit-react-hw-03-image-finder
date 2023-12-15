import React, { Component } from 'react';

import * as ImageService from 'services/image-service';

import { Searchbar, ImageGallery, Button } from 'components';
import { AppStyled } from './App.styled';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    err: null,
    isButtonVisible: false,
  };

  handleSearch = query => {
    this.setState({ query, images: [], page: 1, err: null });
  };

  componentDidUpdate(_, prev) {
    if (prev.query !== this.state.query || prev.page !== this.state.page) {
      this.getImages();
    }
  }

  getImages = async () => {
    // this.state.isButtonVisible = false;
    const { query, page } = this.state;
    try {
      const { hits, totalHits } = await ImageService.getImages(query, page);
      this.setState(prev => ({
        images: [...prev.images, ...hits],
        isButtonVisible:
          this.state.page < Math.ceil(totalHits / ImageService.PER_PAGE),
      }));
    } catch (error) {
      this.setState({ err: error });
    }
  };

  loadNextPage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    return (
      <AppStyled>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery imageList={this.state.images} />
        {this.state.isButtonVisible && <Button onClick={this.loadNextPage} />}
      </AppStyled>
    );
  }
}
