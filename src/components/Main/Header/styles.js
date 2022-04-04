import styled from 'styled-components';
import headerImg from '@img/header-title.svg';
import { backgroundImgSetting } from '@components/style/helper';
import { Black2, Gray2 } from '@components/style/colors';

const HeaderContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  height: 102px;
  padding: 0 40px;
  background-color: ${Gray2};
  box-shadow: 0px 4px 3px ${Black2};
`;

const HeaderTitleImg = styled.div`
  background-image: url(${headerImg});
  ${backgroundImgSetting('174px', '63px', 'center', 'contain')}
`;

export { HeaderContainer, HeaderTitleImg };
