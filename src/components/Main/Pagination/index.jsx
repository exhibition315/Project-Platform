import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { UPDATE_CURRENT_PAGE } from '@store/main/actions';
import { PaginationContainer, PreviousButton, NextButton } from './styles';

const Pagination = ({ totalContent, contentPerPage }) => {
  const dispatch = useDispatch();
  const { currentPage } = useSelector((state) => state.main);

  const totalPage = useMemo(() => Math.ceil(totalContent / contentPerPage), [totalContent, contentPerPage]);
  const canPrev = () => currentPage - 1 > 0;
  const canNext = () => currentPage + 1 <= totalPage;
  const [prevEnable, setPrevEnable] = useState(true);
  const [nextEnable, setNextEnable] = useState(true);

  useEffect(() => {
    setPrevEnable(canPrev());
    setNextEnable(canNext());
  }, [currentPage]);

  const onPreviousClick = () => {
    if (canPrev()) {
      dispatch(UPDATE_CURRENT_PAGE.ACTION(currentPage - 1));
    }
  };

  const onNextClick = () => {
    if (canNext()) {
      dispatch(UPDATE_CURRENT_PAGE.ACTION(currentPage + 1));
    }
  };

  return (
    <PaginationContainer>
      <PreviousButton onClick={onPreviousClick} active={prevEnable} />
      <p>{currentPage}</p>
      <NextButton onClick={onNextClick} active={nextEnable} />
    </PaginationContainer>
  );
};

Pagination.propTypes = {
  totalContent: PropTypes.number.isRequired,
  contentPerPage: PropTypes.number.isRequired,
};

export default Pagination;
