import { connect } from 'react-redux';
import { addFavorite, removeFavorite } from '../../store/favorites/actions';
import { addWatchLater, removeWatchLater } from '../../store/watchLater/actions';
import MovieGridContainer from './MovieGridContainer';
import { IStateTree } from '../../store/interfaces';

const mapDispatchToProps = {
  addFavorite,
  removeFavorite,
  removeWatchLater,
  addWatchLater
};

const mapStateToProps = ({ favorites, watchLater }: IStateTree) => ({ favorites, watchLater });

export default connect(mapStateToProps, mapDispatchToProps)(MovieGridContainer);