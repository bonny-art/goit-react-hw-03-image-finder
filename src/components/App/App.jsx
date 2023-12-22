import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import * as ImageService from 'services/image-service';

import {
  Searchbar,
  ImageGallery,
  Button,
  Modal,
  Loader,
  ErrorMessage,
} from 'components';
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
    status: null,
  };

  componentDidUpdate(_, prev) {
    if (prev.query !== this.state.query || prev.page !== this.state.page) {
      this.getImages();
    }
  }

  handleSearch = query => {
    this.setState({ query, images: [], page: 1, err: null, status: 'pending' });
  };

  scrollDown = () => {
    window.scroll({
      top: window.scrollY + (window.innerHeight - (72 + 40 + 24 + 16)) + 2,
      behavior: 'smooth',
    });
  };

  getImages = async () => {
    const { query, page } = this.state;

    try {
      const { hits, totalHits } = await ImageService.getImages(query, page);

      hits.map(hit => (hit.id = nanoid()));
      this.setState(
        prev => ({
          images: [...prev.images, ...hits],
          isButtonVisible:
            this.state.page < Math.ceil(totalHits / ImageService.PER_PAGE),
          status: totalHits === 0 ? 'rejected' : 'resolved',
          err: totalHits === 0 ? `There is no images on query: ${query}` : null,
        }),
        () => {
          setTimeout(() => {
            this.scrollDown();
          }, 500);
        }
      );
    } catch (error) {
      this.setState({ err: error, status: 'rejected' });
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
    const { images, showModal, isButtonVisible, selectedImageId, status, err } =
      this.state;

    const selectedImage = images.find(image => image.id === selectedImageId);

    return (
      <>
        <AppStyled>
          <Searchbar onSubmit={this.handleSearch} />

          {status === 'pending' && <Loader />}

          {status === 'rejected' && <ErrorMessage message={err} />}

          {status === 'resolved' && (
            <>
              <ImageGallery
                imageList={images}
                showBigImage={this.showBigImage}
              />
              {isButtonVisible && <Button onClick={this.loadNextPage} />}
            </>
          )}
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
