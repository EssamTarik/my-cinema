import { IStateTree } from './interfaces';
import { Reducer, AnyAction, combineReducers } from 'redux';
import { movieSearchReducer } from './movieSearch/reducers';
import { favoritesReducer } from './favorites/reducers';

type IRootReducer = Reducer<IStateTree, AnyAction>;
const rootReducer: IRootReducer = combineReducers({
  movieSearch: movieSearchReducer,
  favorites: favoritesReducer
})

export default rootReducer;