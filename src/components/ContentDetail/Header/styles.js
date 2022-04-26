import styled from 'styled-components';
import { WHITE, GRAY4, GRAY6 } from '@components/style/colors';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 78px;
  padding: 0 24px;
  background-color: ${WHITE};
  border-radius: 8px 8px 0px 0px;
  > div {
    display: flex;
  }
`;

const AuthorContainer = styled.div`
  margin-left: 16px;
  > p {
    &:first-of-type {
      font-size: 16px;
      color: ${GRAY4};
      margin-bottom: 2px;
    }
    &:last-of-type {
      font-size: 14px;
      color: ${GRAY6};
    }
  }
`;

const AuthorButton = styled.button`
  font-size: 16px;
  color: ${GRAY4};
  background-color: transparent;
  cursor: pointer;
  &:last-of-type {
    color: ${GRAY6};
    margin-left: 46px;
    ${({ theme }) => theme.tablet`
      margin-left: 32px;
    `};
  }
`;

export { HeaderContainer, AuthorContainer, AuthorButton };
