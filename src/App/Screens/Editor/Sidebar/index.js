import {connect} from 'react-redux';
import Sidebar from './sidebar';


const mapStateToProps = state => (
    {
        toggleSidebar: state.editorUi.sideBarIsVisibal,
    }
) 

export default connect(mapStateToProps)(Sidebar);