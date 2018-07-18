import React from 'react'
import PropTypes from 'prop-types';
import View from '../../../../Primitives/View';
import styles from './style';
import {AframeView,PdfView,SwfView,VideoView,} from '../../../Components/page_views';


const NothingToRender = () => (
    <h1>LOADING...</h1>
) 


export default function Preview({type,src}){
    let elementToRender;

    switch (type) {
        case 'aframe':
            elementToRender = <AframeView src={src}/>
            break;
        case 'pdf':
            elementToRender = <PdfView src={src}/>
            break;
        case 'swf':
            elementToRender = <SwfView src={src}/>
            break;
        case 'video':
            elementToRender = <VideoView src={src}/>
            break;
        default:
            elementToRender = <NothingToRender/>
            break;
    }

    return(
        <View style={styles.root} color="#4a148c">
            {elementToRender}
        </View>  
    )
}



Preview.propTypes = {
    type: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
}