import React from 'react';

const style = {
    root:{
        flex: 1,
    }
}


export default function AframeView({src}) {
    return(
        <iframe style={style.root} type="text/html" src={src} ></iframe>
    )
}