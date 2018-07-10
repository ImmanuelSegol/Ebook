import React from 'react';
import View from '../../../../Primitives/View';
import Text from '../../../../Primitives/Text';
import CircularProgress from '@material-ui/core/CircularProgress';
import purple from '@material-ui/core/colors/purple';

import styles from './style';

export default function DisplayView({viewState}) {
    return( 
    <View style={styles.root}>
        <CircularProgress style={{color: purple[500]}} thickness={7} size={150}/>
        {viewState === 0 ? <Text>מטעין את המארזים שלך</Text> : null}
        {viewState === 1 ? <Text>מטעין מארזים משותפים</Text> : null}
        {viewState === 2 ? <Text>מטעין מארזים ששותפו איתך</Text> : null}
    </View>
    )
}