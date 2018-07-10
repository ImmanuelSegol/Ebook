import React from 'react';

export default function Text({children,style,...otherProps}) {
    let newStyle = {
        fontSize: '18px',
        color: otherProps.color ? otherProps.color : '#fff'
    }
    if(style !== undefined){
        newStyle = {...newStyle,...style}
    }
    return(
        <span style={newStyle}>{children}</span>
    )
}