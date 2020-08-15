import { connect } from 'react-redux';
import SearchPage from './SearchPage';
import { searchMovies, resetMovieSearch } from '../../../store/movieSearch/actions';
import { IStateTree } from '../../../store/interfaces';

const mapStateToProps = ({ movieSearch }: IStateTree) => ({ movieSearchState: movieSearch })
const mapDispatchToProps = {
  searchMovies,
  resetMovieSearch
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);