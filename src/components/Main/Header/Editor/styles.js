import styled from 'styled-components';
import { BaseButton } from '@components/style';
import { backgroundImgSetting } from '@components/style/helper';
import editIcon from '@img/edit-icon.svg';
import avatarIcon from '@img/avatar-icon.svg';

const EditContainer = styled.div`
  display: flex;
`;

const EditButton = styled(BaseButton)`
  height: 46px;
  padding: 0 24px;
  margin-right: 16px;
  ::before {
    content: '';
    background-image: url(${editIcon});
    ${backgroundImgSetting('21px', '20px', 'center', 'contain')}
    margin-right: 12px;
  }
`;

const Avatar = styled.div`
  min-width: 46px;
  min-height: 46px;
  background-image: url(${avatarIcon});
  ${backgroundImgSetting('46px', '46px', 'center', 'contain')}
  border-radius: 50%;
`;

export { EditContainer, EditButton, Avatar };