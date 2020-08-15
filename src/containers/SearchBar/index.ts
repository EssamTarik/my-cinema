import { connect } from 'react-redux';
import { searchMovies } from '../../store/movies/actions';
import SearchBarContainer from './SearchBarContainer';

const mapDispatchToProps = {
  searchMovies
}

export default connect(null, mapDispatchToProps)(SearchBarContainer);