import {connect} from 'react-redux';
import DisplayView from './DisplayView';

const mapStateToProps = state => (
    {
        viewState: state.catalogUi.tabToRender,
    }
) 

export default connect(mapStateToProps)(DisplayView);