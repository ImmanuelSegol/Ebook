import React from 'react'


export default function View({children,style,className,col,...otherProps}) {
    let newStyle = {
        display: otherProps.noFlex ? 'block' : 'flex',
        flexDirection: col ? 'column' : 'row',
        backgroundColor: otherProps.color ? otherProps.color : 'none',
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