import { connect } from 'react-redux';
import { addFavorite, removeFavorite } from '../../store/favorites/actions';
import MovieGridContainer from './MovieGridContainer';
import { IStateTree } from '../../store/interfaces';

const mapDispatchToProps = {
  addFavorite,
  removeFavorite
};

const mapStateToProps = ({ favorites }: IStateTree) => ({ favorites });

export default connect(mapStateToProps, mapDispatchToProps)(MovieGridContainer);