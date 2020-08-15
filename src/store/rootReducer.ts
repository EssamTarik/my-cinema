import { IStateTree } from './interfaces';
import { Reducer, AnyAction, combineReducers } from 'redux';
import { movieSearchReducer } from './movieSearch/reducers';

type IRootReducer = Reducer<IStateTree, AnyAction>;
const rootReducer: IRootReducer = combineReducers({
  movieSearch: movieSearchReducer
})

export default rootReducer;