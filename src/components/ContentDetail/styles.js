import styled from 'styled-components';
import { backgroundImgSetting } from '@components/style/helper';
import contentImg from '@img/content-img.svg';

const MainSection = styled.div`
  align-self: center;
  width: 670px;
  margin: 48px 0 88px 0;
  ${({ theme }) => theme.tablet`
    width: 100%;
    margin: 32px 0 0 0;
  `};
  ${({ theme }) => theme.mobile`
    width: 100%;
    margin: 16px 0 0 0;
  `};
`;

const ContentImage = styled.div`
  background-image: url(${contentImg});
  ${backgroundImgSetting('670px', '502px', 'center', 'contain')};
  ${({ theme }) => theme.tablet`
    width: 100%;
    height: 576px;
  `};
  ${({ theme }) => theme.mobile`
    width: 100%;
    height: 270px;
  `};
`;

export { MainSection, ContentImage };
