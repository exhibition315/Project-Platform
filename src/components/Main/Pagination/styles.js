import styled from 'styled-components';
import prevIcon from '@img/page-prev-arrow.svg';
import nextIcon from '@img/page-next-arrow.svg';
import { backgroundImgSetting } from '@components/style/helper';
import { GRAY4, GRAY6 } from '@components/style/colors';

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

const PaginationButton = styled.button`
  cursor: pointer;
  ${backgroundImgSetting('20px', '20px', 'center', 'contain')}
  background-color: ${(props) => (props.active ? 'transparent' : GRAY6)};
`;

const PreviousButton = styled(PaginationButton)`
  background-image: url(${prevIcon});
`;

const NextButton = styled(PaginationButton)`
  background-image: url(${nextIcon});
`;

export { PaginationContainer, PreviousButton, NextButton };
