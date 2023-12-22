import React from 'react';
import { MessageContainerStyled, MessageStyled } from './ErrorMessage.styled';

export const ErrorMessage = ({ message }) => {
  return (
    <MessageContainerStyled>
      <MessageStyled>{message}</MessageStyled>
    </MessageContainerStyled>
  );
};
