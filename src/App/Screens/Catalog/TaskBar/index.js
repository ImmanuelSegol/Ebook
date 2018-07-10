import React from 'react';
import View from '../../../../Primitives/View';
import Text from '../../../../Primitives/Text';
import {AppBar,Toolbar,Button,IconButton} from '@material-ui/core';
import Menu from '@material-ui/icons/Menu';
import X from '@material-ui/icons/Close';
import styles from './style';

export default function Taskbar({showSideBar,toggleSideBar}){
    return(
        <View style={styles.appBarContainer} color='none'>
          <AppBar position="static" style={styles.appBar}>
            <Toolbar style={styles.appBarContent}>
                <Text style={{fontSize: '32px'}}>כותרת</Text>
            </Toolbar>
          </AppBar>
        </View>
    );
}

