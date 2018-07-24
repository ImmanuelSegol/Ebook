import React from 'react'
import PropTypes from 'prop-types';
import View from '../../../../Primitives/View';
import styles from './style';
import {AframeView,PdfView,SwfView,VideoView,} from '../../../Components/page_views';


const NothingToRender = () => (
    <h1>אין תוכן להציג</h1>
) 


export default function Preview({type,src}){
    let elementToRender;
    let newStyle = null;

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
            newStyle = {...styles.root,justifyContent: 'center',alignItems:'center'}
            elementToRender = <NothingToRender/>
            break;
    }

    return(
        <View style={newStyle ? newStyle : styles.root} color="#4a148c">
            {elementToRender}
        </View>  
    )
}


//Issue her ewith required
Preview.propTypes = {
    type: PropTypes.any,
    src: PropTypes.any,
}