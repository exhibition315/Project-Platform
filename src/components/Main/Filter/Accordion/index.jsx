import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as R from 'ramda';
import { UPDATE_PROJECT_FILTER } from '@store/main/actions';
import { FILTER_TYPES } from '@common/constants';
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

  const getContent = () => R.prop('value', R.find(R.propEq('key', currentType))(R.values(FILTER_TYPES)));

  return (
    <AccordionContainer>
      <AccordionContent onClick={onContentClick}>{getContent()}</AccordionContent>
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
