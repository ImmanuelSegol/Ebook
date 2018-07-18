import React from 'react';

const style = {
    root:{
        width:'100%',
        height:'100%'
    }
}


export default function SwfView({src}) {
    return(
        <object style={style.root}>
                <param name="movie" value={src}/>
                <embed style={style.root} src={src}></embed>
        </object>
    )
}