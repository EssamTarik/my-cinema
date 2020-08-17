import { connect } from 'react-redux';
import WatchLaterMoviesContainer from './WatchLaterMoviesContainer';
import { IStateTree } from '../../store/interfaces';

const mapStateToProps = ({ watchLater }: IStateTree) => ({ watchLater })

export default connect(mapStateToProps)(WatchLaterMoviesContainer);