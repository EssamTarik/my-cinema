import { connect } from 'react-redux';
import SearchPage from './SearchPage';
import { searchMovies, setSearchText } from '../../../store/movieSearch/actions';
import { IStateTree } from '../../../store/interfaces';

const mapStateToProps = ({ movieSearch, searchText }: IStateTree) => ({ movieSearchState: movieSearch, searchText })
const mapDispatchToProps = {
  searchMovies,
  setSearchText
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);