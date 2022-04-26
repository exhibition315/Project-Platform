import styled from 'styled-components';
import { backgroundImgSetting } from '@components/style/helper';
import { WHITE, GRAY1, GRAY2, GRAY4, GRAY6, BLUE1 } from '@components/style/colors';
import authorizeIcon from '@img/authorize-icon.svg';
import watchIcon from '@img/watch-icon.svg';

const ContentContainer = styled.div`
  padding: 32px 20px 0;
  background-color: ${WHITE};
  border-radius: 0px 0px 8px 8px;
  font-size: 16px;
  color: ${GRAY4};
  a {
    text-decoration: none;
    color: ${BLUE1};
  }
  > p {
    margin-bottom: 16px;
  }
`;

const AuthorizeContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 20px;
  > p {
    margin-left: 8px;
  }
`;

const AuthorizeIcon = styled.div`
  background-image: url(${authorizeIcon});
  ${backgroundImgSetting('88px', '31px', 'center', 'contain')};
`;

const ContentTitle = styled.p`
  font-size: 18px;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 8px;
  margin: 16px 0 24px;
  > p {
    padding: 4px 10px;
    font-size: 14px;
    color: ${GRAY6};
    background-color: ${GRAY1};
    border-radius: 6px;
  }
`;

const Footer = styled.div`
  margin: 0 -20px;
  padding: 18px 20px;
  border-top: 5px solid ${GRAY2};
`;

const WatchIcon = styled.div`
  background-image: url(${watchIcon});
  ${backgroundImgSetting('21px', '21px', 'center', 'contain')};
  ::after {
    content: '${(props) => `${props.watchCount} 人看過`}';
    white-space: nowrap;
    margin-left: 32px;
  }
`;

export { ContentContainer, AuthorizeContainer, AuthorizeIcon, ContentTitle, TagContainer, Footer, WatchIcon };
