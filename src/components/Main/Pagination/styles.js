import styled from 'styled-components';
import prevIcon from '@img/page-prev-arrow.svg';
import nextIcon from '@img/page-next-arrow.svg';
import { backgroundImgSetting } from '@components/style/helper';
import { GRAY4 } from '@components/style/colors';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 18px;
  color: ${GRAY4};
  margin-top: 72px;
  > p {
    margin: 0 32px;
  }
  ${({ theme }) => theme.tablet`
    display: none;
  `}
  ${({ theme }) => theme.mobile`
    display: none;
  `}
`;

const PreviousButton = styled.button`
  cursor: pointer;
  background-image: url(${prevIcon});
  ${backgroundImgSetting('20px', '20px', 'center', 'contain')}
`;

const NextButton = styled.button`
  cursor: pointer;
  background-image: url(${nextIcon});
  ${backgroundImgSetting('20px', '20px', 'center', 'contain')}
`;

export { PaginationContainer, PreviousButton, NextButton };
