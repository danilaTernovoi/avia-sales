import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import * as creators from './creators';

import filterReducer from './reducers/filter';
import sortReducer from './reducers/sort';
import ticketsReducer from './reducers/tickets';

const rootReducer = combineReducers({
  filter: filterReducer,
  sort: sortReducer,
  tickets: ticketsReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export { creators };
export default store;
