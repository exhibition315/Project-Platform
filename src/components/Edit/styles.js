import styled from 'styled-components';
import { space } from 'styled-system';
import editCover from '@img/edit-cover.svg';
import { backgroundImgSetting } from '@components/style/helper';
import { WHITE, BLACK4, GRAY1, GRAY3, GRAY4, GRAY6, GRAY7, BLUE1, RED1 } from '@components/style/colors';

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
    :last-of-type {
      background-color: ${GRAY4};
      margin-right: 0;
    }
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${space};
  > div {
    display: flex;
    align-items: flex-end;
    margin-bottom: 10px;
  }
  > section {
    position: relative;
  }
`;

const Title = styled.p`
  font-size: 16px;
  color: ${GRAY4};
  margin-right: 4px;
  > a {
    font-size: 14px;
    color: ${BLUE1};
    margin-left: 10px;
    text-decoration: none;
    cursor: pointer;
  }
`;

const Required = styled.p`
  font-size: 14px;
  color: ${RED1};
`;

const Description = styled.p`
  font-size: 14px;
  color: ${GRAY6};
  margin-top: 6px;
`;

const Input = styled.input`
  width: 100%;
  height: 52px;
  font-size: 16px;
  color: ${GRAY4};
  padding: 16px 20px;
  background-color: ${GRAY7};
  border-radius: 8px;
`;

export {
  MainSection,
  TopContainer,
  CoverContainer,
  CoverContent,
  Cover,
  FooterContainer,
  InputContainer,
  Title,
  Required,
  Description,
  Input,
};
