import React from 'react';
import View from '../../../Primitives/View';
import Taskbar from './Taskbar';
import Sidebar from './Sidebar';
import Preview from './Preview';
import RecipeReviewCard from './SidebarCard';
import styles from './style';

export default function Editor(){
    return(
        <View style={styles.root} color='none'>
            <Taskbar/>
                <View style={styles.editZone}>
                    <Preview>
                    <object style={{flex:1}} type="text/html" data="https://aframe.glitch.me/" ></object>
                    </Preview>
                    <Sidebar>
                        <RecipeReviewCard/>
                        <RecipeReviewCard/>
                        <RecipeReviewCard/>
                    </Sidebar>
                </View>
        </View>
    )
}