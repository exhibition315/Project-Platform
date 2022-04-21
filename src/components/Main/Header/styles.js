import styled from 'styled-components';
import headerImg from '@img/header-title.svg';
import { backgroundImgSetting } from '@components/style/helper';
import { BLACK2, GRAY2 } from '@components/style/colors';

const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 102px;
  min-height: 102px;
  padding: 0 40px;
  background-color: ${GRAY2};
  box-shadow: 0px 4px 3px ${BLACK2};
  ${({ theme }) => theme.tablet`
    padding: 0 16px;
  `}
  ${({ theme }) => theme.mobile`
    height: 122px;
    align-items: flex-end;
    padding-bottom: 8px;
  `}
`;

const HeaderTitleImg = styled.div`
  background-image: url(${headerImg});
  ${backgroundImgSetting('174px', '63px', 'center', 'contain')};
  ${({ theme }) => theme.mobile`
    position: absolute;
    width: 120px;
    height: 44px;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
  `}
`;

export { HeaderContainer, HeaderTitleImg };
