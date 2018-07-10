import React from 'react'
import View from '../../../../Primitives/View';
import styles from './style';


export default function Sidebar({children,toggleSidebar}) {
    if(toggleSidebar){
        return( 
        <View style={styles.root} color='#fff'>
            {children}
        </View>) 
    }else{
        return null;
    }
}


