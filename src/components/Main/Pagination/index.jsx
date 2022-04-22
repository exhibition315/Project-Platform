import React from 'react';
import { PaginationContainer, PreviousButton, NextButton } from './styles';

const Pagination = () => (
  <PaginationContainer>
    <PreviousButton />
    <p>1</p>
    <NextButton />
  </PaginationContainer>
);

export default Pagination;
