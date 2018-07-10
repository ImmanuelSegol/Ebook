import React from 'react';
import {FormControl,InputLabel,Input,Button} from '@material-ui/core';
import View from '../../../Primitives/View';
import Text from '../../../Primitives/Text';
import styles from './style';

const login = {
    root:{
        width:'400px',
        height: '400px',
        backgroundColor: '#fff',
        borderRadius:'3px',
        boxShadow: '0 0 4px 1px rgba(0, 0, 0, 0.3)',
        flexDirection: 'column',
    },
    title:{
        backgroundColor: '#38006b',
        justifyContent: 'center',
    },
    titleText:{
        fontSize: 32,
        margin:30,
    },
    zone:{
        margin: 50,
        flexDirection: 'column',
        justifyContent: 'center',
    }
}


export default function Login() {
    return(
        <View style={styles.root}>
            <View style={login.root}>
                <View style={login.title}>
                    <Text style={login.titleText}>ברוכים הבאים</Text>
                </View>
                <View style={login.zone} color='none'>
                <FormControl style={{margin:10}}>
                        <InputLabel htmlFor="name-simple">מספפר אישי</InputLabel>
                        <Input id="name-simple" value={'name'} onChange={() => alert('change')} />
                </FormControl>
                <FormControl style={{margin:10}}>
                        <InputLabel htmlFor="name-simple">סיסמא</InputLabel>
                        <Input id="name-simple" value={'***'} onChange={() => alert('change')} />
                </FormControl>
                <Button variant="contained" style={{backgroundColor:'#38006b',color:'#fff',}}>כנס</Button>
                </View>
            </View>
        </View>
    )
}