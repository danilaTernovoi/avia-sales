import { IAction } from '../types';

export type SortGuard = 'priceless' | 'timeless';
const APPLY_SORT = 'APPLY_SORT';

interface ISortersAction extends IAction {
  payload: SortGuard;
}
interface ISortersState {
  activeAlias: SortGuard;
}

const initialState: ISortersState = {
  activeAlias: 'priceless',
};

export const applySort = (sorterAlias: SortGuard): ISortersAction => ({
  type: APPLY_SORT,
  payload: sorterAlias,
});

const sortersReducer = (state = initialState, action: ISortersAction): ISortersState => {
  switch (action.type) {
    case APPLY_SORT:
      return {
        activeAlias: action.payload,
      };

    default:
      return { ...state };
  }
};

export default sortersReducer;
