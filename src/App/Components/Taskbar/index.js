import React from 'react';
import PropTypes from 'prop-types';
import View from '../../../Primitives/View';
import {AppBar,Toolbar} from '@material-ui/core';
import styles from './style';

export default function Taskbar({leftItem,centerItem,rightItem,style}){
    let newStyle = {
        ...styles,
    }
    if(style !== undefined){
        newStyle = {
            ...newStyle,
            ...style
        }
    }
    return(
        <View style={newStyle.appBarContainer} color='none'>
          <AppBar position="static" style={newStyle.appBar}>
            <Toolbar style={newStyle.appBarContent}>
                {leftItem ? leftItem() : null}
                {centerItem ? centerItem() : null}
                {rightItem ? rightItem() : null}
            </Toolbar>
          </AppBar>
        </View>
    );
}

Taskbar.propTypes = {
    style: PropTypes.object,
    leftItem: PropTypes.func,
    centerItem: PropTypes.func,
    rightItem: PropTypes.func,
}


