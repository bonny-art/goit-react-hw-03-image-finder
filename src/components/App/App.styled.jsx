import styled from '@emotion/styled';

export const AppStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;

export const BigImageStyled = styled.img`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 72px - 24px);
  cursor: zoom-out;
`;
