import { connect } from 'react-redux';
import MovieSearchResultsContainer from './MovieSearchResultsContainer';
import { IStateTree } from '../../store/interfaces';

const mapStateToProps = ({ movieSearch }: IStateTree) => ({ movieSearchState: movieSearch })

export default connect(mapStateToProps)(MovieSearchResultsContainer);