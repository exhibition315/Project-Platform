import styled from 'styled-components';
import { GRAY3, GRAY4 } from '@components/style/colors';

const MainSection = styled.div`
  align-self: center;
  width: 954px;
  padding: 50px 0;
  ${({ theme }) => theme.tablet`
    width: 632px;
    padding: 28px 0;
  `}
  ${({ theme }) => theme.mobile`
    width: 312px;
    padding: 22px 0;
  `}
`;

const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  margin-top: 48px;
  gap: 12px;
  ${({ theme }) => theme.tablet`
    margin-top: 28px;
  `}
  ${({ theme }) => theme.mobile`
    margin-top: 22px;
  `}
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 40px;
  height: 60px;
  background-color: ${GRAY4};
  font-size: 12px;
  color: ${GRAY3};
  ${({ theme }) => theme.tablet`
    display: none;
  `}
  ${({ theme }) => theme.mobile`
    display: none;
  `}
`;

export { MainSection, ContentContainer, Footer };
