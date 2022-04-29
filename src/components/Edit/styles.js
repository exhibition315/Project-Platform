import styled from 'styled-components';
import editCover from '@img/edit-cover.svg';
import { backgroundImgSetting } from '@components/style/helper';
import { WHITE, BLACK4, GRAY1, GRAY3, GRAY4, GRAY6, RED1 } from '@components/style/colors';

const MainSection = styled.div`
  align-self: center;
  width: 954px;
  margin: 120px 0;
  padding: 50px 100px;
  background-color: ${WHITE};
  box-shadow: 0px 4px 4px ${BLACK4};
  border-radius: 16px;
`;

const TopContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

const CoverContainer = styled.div`
  font-size: 14px;
  color: ${RED1};
`;

const CoverContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 192px;
  height: 192px;
  background-color: ${GRAY1};
  border-radius: 12px;
  > p {
    font-size: 16px;
    color: ${GRAY6};
    margin-top: 16px;
    text-decoration: underline;
  }
`;

const Cover = styled.div`
  background-image: url(${editCover});
  ${backgroundImgSetting('64px', '60px', 'center', 'contain')};
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

export { MainSection, TopContainer, CoverContainer, CoverContent, Cover, FooterContainer };
