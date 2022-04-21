import styled from 'styled-components';
import { GRAY1 } from '@components/style/colors';

const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100%;
  background-color: ${GRAY1};
`;

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

export { MainContainer, MainSection, ContentContainer };
