import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import filterReducer from './reducers/filter';
import ticketsReducer from './reducers/tickets';
import sortersReducer from './reducers/sorters';

const rootReducer = combineReducers({
  filter: filterReducer,
  tickets: ticketsReducer,
  sorters: sortersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
