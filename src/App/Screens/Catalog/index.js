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
                <Workbar/>
                {/*
                <View style={{height:'auto'}}>
                <Chip
                    key={1}
                    label={"F-16"}
                    onDelete={() => alert('bye')}
                    style={{margin:'5px'}}
                />
                <Chip
                    key={1}
                    label={"דרג א"}
                    onDelete={() => alert('bye')}
                    style={{margin:'5px'}}
                />
                <Chip
                    key={1}
                    label={"some thing else"}
                    onDelete={() => alert('bye')}
                    style={{margin:'5px'}}
                />
                <Chip
                    key={1}
                    label={"random"}
                    onDelete={() => alert('bye')}
                    style={{margin:'5px'}}
                />
                </View>
                */}
                <DisplayView/>
            </View>
        </View>
    )
}
