import React from 'react';
import SwitchButton from '@components/Main/Filter/SwitchButton';
import Accordion from '@components/Main/Filter/Accordion';
import { FilterContainer } from './styles';

const Filter = () => (
  <FilterContainer>
    <SwitchButton />
    <Accordion />
  </FilterContainer>
);

export default Filter;
