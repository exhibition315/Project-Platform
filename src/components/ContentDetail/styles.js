import styled from 'styled-components';
import { backgroundImgSetting } from '@components/style/helper';
import contentImg from '@img/content-img.svg';

const MainSection = styled.div`
  align-self: center;
  width: 670px;
  margin: 48px 0 88px 0;
`;

const ContentImage = styled.div`
  background-image: url(${contentImg});
  ${backgroundImgSetting('670px', '502px', 'center', 'contain')};
`;

export { MainSection, ContentImage };
