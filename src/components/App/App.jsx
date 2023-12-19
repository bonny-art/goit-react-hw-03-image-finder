import React, { Component } from 'react';

import * as ImageService from 'services/image-service';

import { Searchbar, ImageGallery, Button, Modal } from 'components';
import { AppStyled, BigImageStyled } from './App.styled';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    err: null,
    isButtonVisible: false,
    showModal: false,
    selectedImageId: '',
  };

  componentDidUpdate(_, prev) {
    if (prev.query !== this.state.query || prev.page !== this.state.page) {
      this.getImages();
    }

    if (prev.page !== this.state.page) {
      console.log(`Scroll to page ${this.state.page}!!!`);
      // console.log('window.innerHeight :>> ', window.innerHeight);
      window.scroll({
        top: window.scrollY + 800,
        // top: window.scrollY + (window.innerHeight - (72 + 40 + 24 + 16)),
        behavior: 'smooth',
      });
    }
  }

  handleSearch = query => {
    this.setState({ query, images: [], page: 1, err: null });
  };

  getImages = async () => {
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

  toggleModal = () => {
    this.setState(prevState => ({
      selectedImageId: prevState.showModal ? '' : prevState.selectedImageId,
      showModal: !prevState.showModal,
    }));
  };

  showBigImage = id => {
    this.setState({ selectedImageId: id }, () => this.toggleModal());
  };

  render() {
    const { images, showModal, isButtonVisible, selectedImageId } = this.state;

    const selectedImage = images.find(image => image.id === selectedImageId);

    return (
      <>
        <AppStyled>
          <Searchbar onSubmit={this.handleSearch} />
          <ImageGallery imageList={images} showBigImage={this.showBigImage} />
          {isButtonVisible && <Button onClick={this.loadNextPage} />}
        </AppStyled>
        {showModal && selectedImageId && (
          <Modal onClose={this.toggleModal}>
            <BigImageStyled
              src={selectedImage.largeImageURL}
              alt={selectedImage.tags}
            />
          </Modal>
        )}
      </>
    );
  }
}
