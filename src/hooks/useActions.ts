import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { creators } from '../store';

const useActions = () => {
  const dispatch = useDispatch();
  return useMemo(() => bindActionCreators(creators, dispatch), [dispatch]);
};

export default useActions;
