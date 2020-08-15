import { connect } from 'react-redux';
import { getMovieTrailer, resetMovieTrailer } from '../../store/movieTrailer/actions';
import { IStateTree } from '../../store/interfaces';
import MovieTrailerModal from './MovieTrailerModal';

const mapStateToProps = ({ trailer }: IStateTree) => ({ trailerState: trailer })
const mapDispatchToProps = {
  getMovieTrailer,
  resetMovieTrailer
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieTrailerModal)