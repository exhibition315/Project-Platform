import styled from 'styled-components';
import avatarImg from '@img/project-pre-avatar.svg';
import thumbnailImg from '@img/thumbnail.png';
import { backgroundImgSetting } from '@components/style/helper';
import { GRAY4, GRAY5, GRAY6 } from '@components/style/colors';

const CardContainer = styled.div`
  display: flex;
  width: 310px;
  height: 150px;
  padding: 16px;
  background: ${GRAY5};
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.04);
  border-radius: 6px;
  cursor: pointer;
  > div {
    &:first-of-type {
      width: 148px;
      font-size: 14px;
      color: ${GRAY4};
      margin-right: 12px;
      > p:last-of-type {
        margin-top: 4px;
        font-size: 12px;
        color: ${GRAY6};
        overflow: hidden;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        -webkit-line-clamp: 3;
      }
    }
  }
`;

const Avatar = styled.div`
  display: flex;
  align-items: center;
  background-image: url(${avatarImg});
  ${backgroundImgSetting('36px', '36px', 'center', 'contain')}
  border-radius: 50%;
  margin-bottom: 4px;
  ::after {
    content: '${(props) => props.author}';
    margin-left: 44px;
    white-space: nowrap;
  }
`;

const Thumbnail = styled.div`
  background-image: url(${thumbnailImg});
  ${backgroundImgSetting('118px', '118px', 'center', 'contain')}
`;

export { CardContainer, Avatar, Thumbnail };
