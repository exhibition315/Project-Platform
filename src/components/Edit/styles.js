import styled from 'styled-components';
import { WHITE, BLACK4, GRAY3, GRAY4 } from '@components/style/colors';

const MainSection = styled.div`
  align-self: center;
  width: 954px;
  margin: 120px 0;
  padding: 50px 100px;
  background-color: ${WHITE};
  box-shadow: 0px 4px 4px ${BLACK4};
  border-radius: 16px;
  ${({ theme }) => theme.tablet`
    width: 736px;
    margin: 36px 0 46px 0;
    padding: 46px;
  `}
  ${({ theme }) => theme.mobile`
    width: 100%;
    margin: 24px 0 0 0;
    padding: 40px 30px;
  `}
`;

const TopContainer = styled.div`
  display: flex;
  align-items: flex-end;
  ${({ theme }) => theme.mobile`
    flex-direction: column-reverse;
    align-items: flex-start;
  `}
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  > button {
    width: 214px;
    height: 64px;
    font-size: 20px;
    color: ${WHITE};
    background-color: ${GRAY3};
    border-radius: 8px;
    margin-right: 16px;
    cursor: pointer;
    :last-of-type {
      background-color: ${GRAY4};
      margin-right: 0;
    }
  }
`;

export { MainSection, TopContainer, FooterContainer };
