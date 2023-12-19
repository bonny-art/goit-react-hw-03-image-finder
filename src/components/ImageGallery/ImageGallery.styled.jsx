import styled from '@emotion/styled';

export const ImageGalleryStyled = styled.ul`
  max-width: calc((100vh - 72px - 40px - 24px - 16px * 2) * 1.6);

  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  line-height: 1;
`;
