import React, { useState, useCallback } from 'react';
import { FILTER_TYPES } from '@common/constants';
import { AccordionContainer, AccordionContent, OptionContainer } from './styles';

const Accordion = () => {
  const [currentType, setCurrentType] = useState(FILTER_TYPES.LATEST);
  const [visible, setVisible] = useState(false);

  const onContentClick = () => {
    setVisible(!visible);
  };

  const onOptionClick = useCallback(
    (filter) => {
      setCurrentType(filter);
      setVisible(false);
    },
    [currentType],
  );

  return (
    <AccordionContainer>
      <AccordionContent onClick={onContentClick}>{currentType.value}</AccordionContent>
      <OptionContainer visible={visible}>
        {Object.keys(FILTER_TYPES).map((key) => {
          const filter = FILTER_TYPES[key];
          return (
            <p key={filter.key} onClick={() => onOptionClick(filter)} role="presentation">
              {filter.value}
            </p>
          );
        })}
      </OptionContainer>
    </AccordionContainer>
  );
};

export default Accordion;
