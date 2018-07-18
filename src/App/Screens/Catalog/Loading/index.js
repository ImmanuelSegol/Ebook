import React from 'react';
import {View,Text} from '../../../../Primitives';

import CircularProgress from '@material-ui/core/CircularProgress';
import purple from '@material-ui/core/colors/purple';

export default function Loading({state}) {
    return(
        <View col>
            <CircularProgress style={{color: purple[500]}} thickness={7} size={150}/>
            {state === 0 ? <Text>מטעין את המארזים שלך</Text> : null}
            {state === 1 ? <Text>מטעין מארזים משותפים</Text> : null}
            {state === 2 ? <Text>מטעין מארזים ששותפו איתך</Text> : null}
        </View>
    )
}