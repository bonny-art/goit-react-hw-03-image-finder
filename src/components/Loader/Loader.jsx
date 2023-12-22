import React from 'react';
import { LoaderStyled } from './Loader.styled';
import { GridLoader } from 'react-spinners';

export const Loader = () => {
  return (
    <LoaderStyled>
      <GridLoader color="#3f51b5" />
    </LoaderStyled>
  );
};
