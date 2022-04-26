import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UPDATE_PROJECT_FILTER } from '@store/main/actions';
import { FILTER_TYPES } from '@common/constants';
import { getValueByKey } from '@utils/utils';
import { AccordionContainer, AccordionContent, OptionContainer } from './styles';

const Accordion = () => {
  const dispatch = useDispatch();
  const { filter: currentType } = useSelector((state) => state.main);
  const [visible, setVisible] = useState(false);

  const onContentClick = () => {
    setVisible(!visible);
  };

  const onOptionClick = useCallback(
    (key) => {
      dispatch(UPDATE_PROJECT_FILTER.ACTION(key));
      setVisible(false);
    },
    [currentType],
  );

  return (
    <AccordionContainer>
      <AccordionContent onClick={onContentClick}>{getValueByKey(currentType, FILTER_TYPES)}</AccordionContent>
      <OptionContainer visible={visible}>
        {Object.keys(FILTER_TYPES).map((key) => {
          const filter = FILTER_TYPES[key];
          return (
            <p key={filter.key} onClick={() => onOptionClick(filter.key)} role="presentation">
              {filter.value}
            </p>
          );
        })}
      </OptionContainer>
    </AccordionContainer>
  );
};

export default Accordion;
