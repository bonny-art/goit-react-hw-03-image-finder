import { ImageGalleryItem } from 'components';
import React from 'react';
import { ImageGalleryStyled } from './ImageGallery.styled';

export const ImageGallery = ({ imageList }) => {
  return (
    <ImageGalleryStyled>
      {imageList.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          smallImage={webformatURL}
          largeImage={largeImageURL}
          tags={tags}
        />
      ))}
    </ImageGalleryStyled>
  );
};
