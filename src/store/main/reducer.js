import { PROJECT_TYPES, FILTER_TYPES } from '@common/constants';
import * as ACTIONS from './actions';

export const initialState = {
  project: PROJECT_TYPES.DESIGN.key,
  filter: FILTER_TYPES.LATEST.key,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_PROJECT_TYPE.TYPE: {
      return {
        ...state,
        project: action.payload,
      };
    }
    case ACTIONS.UPDATE_PROJECT_FILTER.TYPE: {
      return {
        ...state,
        filter: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
