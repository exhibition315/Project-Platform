import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import main from '@store/main/reducer';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  main,
});

export default createRootReducer;
