import React from 'react'
import View from '../../../../Primitives/View';
import {Motion, spring} from 'react-motion';
import styles from './style';


export default function Sidebar({children,toggle}) { 
    if(toggle){
        return(
        <Motion defaultStyle={{x:0}} style={{x: spring(329.55,{stiffness: 120, damping: 14})}}>
            {
            st => (
                <View style={{...styles.root,width:st.x}} color='#fff'>
                    {children}
                </View>
                )
            }
        </Motion>
        ) 
    }else{
        return (<Motion defaultStyle={{x:329.55}} style={{x: spring(0,{stiffness: 120, damping: 14})}}>
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
}

/*
    if(toggle){
        return( 
        <View style={styles.root} color='#fff'>
            {children}
        </View>) 
    }else{
        return null;
    } 
*/