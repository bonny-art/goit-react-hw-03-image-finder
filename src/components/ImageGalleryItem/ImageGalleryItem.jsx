import React from 'react';
import {
  ImageGalleryItemImageStyled,
  ImageGalleryItemStyled,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ smallImage, largeImage, tags }) => {
  const showBigImage = () => {};
  return (
    <ImageGalleryItemStyled onClick={() => showBigImage(largeImage)}>
      <ImageGalleryItemImageStyled src={smallImage} alt={tags} />
    </ImageGalleryItemStyled>
  );
};
