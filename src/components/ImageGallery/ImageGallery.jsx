import { ImageGalleryItem } from 'components';
import React from 'react';
import { ImageGalleryStyled } from './ImageGallery.styled';

export const ImageGallery = ({ imageList, showBigImage }) => {
  return (
    <ImageGalleryStyled>
      {imageList.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          smallImage={webformatURL}
          id={id}
          tags={tags}
          openModal={showBigImage}
        />
      ))}
    </ImageGalleryStyled>
  );
};
