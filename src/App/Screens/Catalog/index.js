import React from 'react';

import View from '../../../Primitives/View';
import Chip from '@material-ui/core/Chip';
import {Title} from './Taskbar_components';
import Taskbar from '../../Components/Taskbar';
import Workbar from './Workbar';
import DisplayView from './DisplayView';

import styles from './style';

export default function Catalog() {
    return(
        <View style={styles.root}> 
            <Taskbar center centerItem={() => <Title title='בלהבלהבלה'/>}/>       
            <View style={styles.workZone}>
                <DisplayView/>
            </View>
        </View>
    )
}
