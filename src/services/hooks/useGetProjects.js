import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useSWR from 'swr';
import { UPDATE_CURRENT_PAGE } from '@store/main/actions';
import { api, fetcher } from '@api';
import { isDesktop } from '@utils/utils';

const useGetProjects = () => {
  const dispatch = useDispatch();
  const [content, setContent] = useState([]);
  const { project: projectType, filter: filterType, currentPage } = useSelector((state) => state.main);
  const { data, error } = useSWR([api.getProjects, currentPage, projectType, filterType], (url) =>
    fetcher.get(url, { currentPage, projectType, filterType }));

  const handleScroll = () => {
    const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
    if (bottom) {
      dispatch(UPDATE_CURRENT_PAGE.ACTION(currentPage + 1));
    }
  };

  useEffect(() => {
    if (!isDesktop()) {
      window.addEventListener('scroll', handleScroll, {
        passive: true,
      });
    }

    return () => {
      if (!isDesktop()) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    if (!data) return;

    if (isDesktop()) {
      setContent(data);
      return;
    }

    setContent([...content, ...data]);
  }, [data]);

  return { content, error };
};

export default useGetProjects;
