import React from 'react';
import View from '../../../Primitives/View';
import Taskbar from '../../Components/Taskbar';
import {ShareButton,Title,ToggleMenu} from './Taskbar_components';
import Sidebar from './Sidebar';
import Preview from './Preview';
import RecipeReviewCard from './SidebarCard';
import styles from './style';

export default function Editor({showSidebar,toggleSideBar}){
    return(
        <View style={styles.root} color='none'>
            <Taskbar 
                leftItem={() => <ShareButton title='שתף'/>} 
                centerItem={() => <Title title='קורס בלהבלהבלה'/>}
                rightItem={() => <ToggleMenu 
                    onClick={() => toggleSideBar()}
                    showSideBar={showSidebar}/>}
            />
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