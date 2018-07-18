import React from 'react';

const style = {
    root:{
        width:'100%',
        height:'100%'
    }
}

export default function PdfView({src}) {
    return(
        <embed src={src} style={style.root} type='application/pdf'/>
    )
}