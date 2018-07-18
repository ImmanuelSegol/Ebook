import React from 'react';
import Paper from '@material-ui/core/Paper';
import {View} from '../../../../Primitives';

import {ClearAll,Add,Save,SupervisorAccount} from '@material-ui/icons';

const style = {
    fontSize: '64px'
};

export default function OptionCards(params) {
    return(
        <View noFlex color='none'>
            <Paper style={{ width: 'auto',margin:15,display: 'flex',justifyContent:'space-around',alignItems:'center'}}>
                <SupervisorAccount style={style}/>
                <Save style={style}/>
                <Add style={style}/>
                <ClearAll style={style}/>
            </Paper>
        </View>
    );
}