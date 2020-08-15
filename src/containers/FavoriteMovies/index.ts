import { connect } from 'react-redux';
import FavoriteMoviesContainer from './FavoriteMoviesContainer';
import { IStateTree } from '../../store/interfaces';

const mapStateToProps = ({ favorites }: IStateTree) => ({ favorites })

export default connect(mapStateToProps)(FavoriteMoviesContainer);