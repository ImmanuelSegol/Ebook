import React from 'react';


const style = {
    root:{
        width:'100%',
        height:'100%',
        background: '#fff'
    }
}

export default function VideoView({src}) {
    return(
        <video style={style.root} controls>
            <source src={src} type="video/mp4"/>
        </video>
    );
}