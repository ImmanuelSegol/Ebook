import {connect} from 'react-redux';
import Workbar from './Workbar';
import {toggleTab} from '../actions';

const mapDispatchToProps = dispatch => (
    {
        toggleTabs: id => dispatch(toggleTab(id)),
    }
)

export default connect(undefined,mapDispatchToProps)(Workbar);