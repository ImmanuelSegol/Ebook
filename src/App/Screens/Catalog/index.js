import React from 'react';
import View from '../../../Primitives/View';
import styles from './style';

import Taskbar from './TaskBar';
import Workbar from './Workbar';
import DisplayView from './DisplayView';

export default function Catalog() {
    return(
        <View style={styles.root}> 
            <Taskbar/>
            <View style={styles.workZone}>
                <Workbar/>
                <DisplayView/>
            </View>
        </View>
    )
}
