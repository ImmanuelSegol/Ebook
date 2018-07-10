import {connect} from 'react-redux';
import * as editorActions from '../actions/index';
import Taskbar from './Taskbar';

const mapStateToProps = state => (
  { 
      showSideBar: state.editorUi.sideBarIsVisibal,
  }
)
const mapDispatchToProps = dispatch => (
  {
      toggleSideBar: () => dispatch(editorActions.cntrlSideBar()),
  }
)

export default connect(mapStateToProps,mapDispatchToProps)(Taskbar)