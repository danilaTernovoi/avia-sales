import {
  TOGGLE_FILTER,
  APPLY_ALL_FILTER,
  DISABLE_ALL_FILTER,
  DISABLE_ALL_ONLY,
  IFilter,
  IFilterState,
  IToggleFilterAction,
  IAction,
} from '../types';

export const ALL_FILTER_ALIAS: string = 'all';

const defaultList: IFilter[] = [
  {
    showName: 'Все',
    alias: ALL_FILTER_ALIAS,
    active: false,
  },

  {
    showName: 'Без пересадок',
    alias: 'withoutTransfer',
    active: false,
  },

  {
    showName: '1 пересадка',
    alias: 'oneTransfer',
    active: false,
  },

  {
    showName: '2 пересадки',
    alias: 'twoTransfer',
    active: false,
  },

  {
    showName: '3 пересадки',
    alias: 'threeTransfer',
    active: false,
  },
];

const initialState: IFilterState = {
  list: defaultList,
};

const filterReducer = (state: IFilterState = initialState, action: IToggleFilterAction): IFilterState => {
  switch (action.type) {
    case TOGGLE_FILTER:
      return {
        ...state,
        list: state.list.map((filt) => (filt.alias === action.payload ? { ...filt, active: !filt.active } : filt)),
      };

    case APPLY_ALL_FILTER:
      return {
        ...state,
        list: state.list.map((filt) => ({ ...filt, active: true })),
      };

    case DISABLE_ALL_FILTER:
      return {
        ...state,
        list: state.list.map((filt) => ({ ...filt, active: false })),
      };

    case DISABLE_ALL_ONLY:
      return {
        ...state,
        list: state.list.map((filt) =>
          filt.alias === ALL_FILTER_ALIAS || filt.alias === action.payload ? { ...filt, active: !filt.active } : filt
        ),
      };

    default:
      return state;
  }
};

export default filterReducer;

export const applyAllCreator = (): IAction => ({
  type: APPLY_ALL_FILTER,
});

export const disableAllCreator = (): IAction => ({
  type: DISABLE_ALL_FILTER,
});

export const toggleFilterCreator = (alias: string): IToggleFilterAction => ({
  type: TOGGLE_FILTER,
  payload: alias,
});

export const disableAllOnlyCreator = (alias: string): IToggleFilterAction => ({
  type: DISABLE_ALL_ONLY,
  payload: alias,
});
