import React from 'react';
import Paper from '@material-ui/core/Paper';
import {View} from '../../../../Primitives';

import ClearAll from '@material-ui/icons/ClearAll';

export default function OptionCards(params) {
    return(
        <View noFlex color='none'>
            <Paper style={{ maxWidth: 300,margin:15}}>
                <ClearAll/>
            </Paper>
        </View>
    );
}