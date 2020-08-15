import { IStateTree } from './interfaces';
import { Reducer, AnyAction, combineReducers } from 'redux';
import { movieSearchReducer } from './movieSearch/reducers';
import { favoritesReducer } from './favorites/reducers';
import { watchLaterReducer } from './watchLater/reducers';

type IRootReducer = Reducer<IStateTree, AnyAction>;
const rootReducer: IRootReducer = combineReducers({
  movieSearch: movieSearchReducer,
  favorites: favoritesReducer,
  watchLater: watchLaterReducer
})

export default rootReducer;