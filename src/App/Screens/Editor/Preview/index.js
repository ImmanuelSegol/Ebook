import React from 'react'
import View from '../../../../Primitives/View';
import styles from './style';

export default function Preview({children}){
    return(
        <View style={styles.root} color="#4a148c">
            {children}           
        </View>  
    )
}