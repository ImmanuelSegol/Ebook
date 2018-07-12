import React from 'react';
import View from '../../../../Primitives/View';
import Text from '../../../../Primitives/Text';
import Taskbar from '../../../Components/Taskbar';
import {AppBar,Toolbar} from '@material-ui/core';
import styles from './style';

export default function CatalogTaskBar(){
    return(
        <Taskbar
            centerItem
        />
    )
}







/*

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


*/