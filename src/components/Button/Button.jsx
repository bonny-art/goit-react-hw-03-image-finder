import React from 'react';
import { ButtonStyled } from './Button.styled';

export const Button = ({ onClick }) => {
  return (
    <ButtonStyled type="button" onClick={onClick}>
      Load more
    </ButtonStyled>
  );
};
