import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Home from '../screens/home';
import * as notesActions from '../actions/notesActions';

const actions = {
  ...notesActions,
};

const mapStateToProps = state => ({
  notes: state.notes,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
