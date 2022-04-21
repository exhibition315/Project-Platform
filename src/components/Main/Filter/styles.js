import styled from 'styled-components';

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ theme }) => theme.mobile`
    justify-content: center;
  `}
`;

// eslint-disable-next-line import/prefer-default-export
export { FilterContainer };
