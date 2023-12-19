import styled from '@emotion/styled';

export const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 2;

  top: 0;
  /* top: 72px; */
  left: 0;
  width: 100vw;
  height: 100vh;
  /* height: calc(100vh - 72px); */
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalStyled = styled.div`
  /* max-width: calc(100% - 48px);
  max-height: calc(100% - 24px); */

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 3px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;
