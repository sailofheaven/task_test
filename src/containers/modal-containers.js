import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Modals from '../components/modals';
import * as actions from '../actions/modal-action';


const mapStateToProps = state => ({
    modals: state.modals
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Modals);