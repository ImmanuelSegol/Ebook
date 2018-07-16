import React from 'react';
import * as editorActions from './actions';
import {connect} from 'react-redux';

import Editor from './Editor';

const mapStateToProps = state => (
    {
        showSidebar: state.editorUi.sideBarIsVisibal,
        bookTabs: state.mockData.tabs,
        bookSubTabs: state.mockData.subTab,
    }
) 
const mapDispatchToProps = dispatch => (
    {
        toggleSideBar: () => dispatch(editorActions.cntrlSideBar()),
    }
) 

export default connect(mapStateToProps,mapDispatchToProps)(Editor);