import styled from 'styled-components';
import { WHITE, GRAY4 } from '@components/style/colors';
import arrowIcon from '@img/arrow-icon.svg';
import { backgroundImgSetting } from '@components/style/helper';

const AccordionContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

const AccordionContent = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: ${GRAY4};
  ::after {
    content: '';
    background-image: url(${arrowIcon});
    ${backgroundImgSetting('12px', '11px', 'center', 'contain')}
    margin-left: 36px;
  }
`;

const OptionContainer = styled.div`
  position: absolute;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  height: 116px;
  overflow: hidden;
  right: 0;
  width: 128px;
  padding: 24px 32px;
  background-color: ${GRAY4};
  border-radius: 8px;
  font-size: 16px;
  color: ${WHITE};
  > p:first-of-type {
    margin-bottom: 24px;
  }
`;

export { AccordionContainer, AccordionContent, OptionContainer };
