import React from 'react'
import {View} from '../../../Primitives';
import {Motion, spring} from 'react-motion';
import styles from './style';


export default function Sidebar({children,toggle}) { 
    return(
        <Motion defaultStyle={{x:toggle? 0 : 329.55}} style={{x: spring(toggle? 329.55 : 0,{stiffness: 120, damping: 14})}}>
            {
            st => (
                <View style={{...styles.root,width:st.x}} color='#fff'>
                    {children}
                </View>
                )
            }
        </Motion>
        ) 
}
