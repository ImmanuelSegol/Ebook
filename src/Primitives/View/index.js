import React from 'react'


export default function View({children,style,className,...otherProps}) {
    let newStyle = {
        display: otherProps.noFlex ? 'inline' : 'flex',
        backgroundColor: otherProps.color ? otherProps.color : 'red',
    };
    if(style !== undefined){
        newStyle = {...newStyle,...style}
    }
    return(
        <div className={className} style={newStyle}>
            {children}
        </div>
    )
}