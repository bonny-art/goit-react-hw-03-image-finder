import React from 'react';
import {
  ImageGalleryItemImageStyled,
  ImageGalleryItemStyled,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ smallImage, id, tags, openModal }) => {
  return (
    <ImageGalleryItemStyled onClick={() => openModal(id)}>
      <ImageGalleryItemImageStyled src={smallImage} alt={tags} />
    </ImageGalleryItemStyled>
  );
};
