import styled from '@emotion/styled';

export const MessageContainerStyled = styled.div`
  height: calc(100vh - (72px + 40px + 24px + 16px * 4) + 2px + 16px * 2);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MessageStyled = styled.p`
  font: inherit;
  font-size: 20px;
`;
