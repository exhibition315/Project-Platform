import { useMemo } from 'react';
import { useLocation } from 'react-router';

const useQueryString = () => {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
};

export default useQueryString;
