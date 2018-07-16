import React from 'react';
import PropTypes from 'prop-types';
import View from '../../../Primitives/View';
import Taskbar from '../../Components/Taskbar';
import {ShareButton,Title,ToggleMenu} from './Taskbar_components';
import Sidebar from './Sidebar';
import Preview from './Preview';
import RecipeReviewCard from './SidebarCard';
import styles from './style';

function Editor({showSidebar,toggleSideBar,bookTabs,bookSubTabs}){
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
                        {/*<iframe style={{flex:1}} type="text/html" src="http://localhost:3000/media_content/Aframe/index.html" ></iframe>*/}
                        <video style={{flex: 1,background: '#fff'}} controls>
                            <source src="http://localhost:3000/media_content/Video/sample.mp4" type="video/mp4"/>
                        </video>
                    </Preview>
                    <Sidebar>
                        {
                            bookTabs.map(tab => <RecipeReviewCard 
                                key={tab.id}
                                id={tab.id}
                                title={tab.title} 
                                date={tab.date}
                                details={tab.details}
                                subTabs={bookSubTabs}
                                />
                            )
                        }
                    </Sidebar>
                </View>
        </View>
    )
}

Editor.propTypes = {
    showSidebar: PropTypes.bool.isRequired,
    toggleSideBar: PropTypes.func.isRequired,
    bookTabs: PropTypes.arrayOf(PropTypes.object),
    bookSubTabs: PropTypes.arrayOf(PropTypes.object),
}
export default Editor;