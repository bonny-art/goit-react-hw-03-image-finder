import styled from '@emotion/styled';

export const ImageGalleryItemStyled = styled.li`
  width: calc((100% - 16px * 3) / 4);
  height: calc((100vh - (72px + 40px + 24px + 16px * 4) + 2px) / 3);
  /* height: calc((100vh - (72px + 40px + 24px + 16px * 4)) / 3); */
  /* overflow: hidden; */

  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const ImageGalleryItemImageStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
