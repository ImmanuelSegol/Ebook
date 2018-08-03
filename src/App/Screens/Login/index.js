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
        flex: 1,
        margin: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
    }
}


export default function Login() {
    return(
        <View style={styles.root}>
            <View style={login.root}>
                <View style={login.title}>
                    <Text style={login.titleText}>ברוכים הבאים</Text>
                </View>
                <View col style={login.zone} color='none'>
                    <FormControl style={{width: '300px'}}>
                            <InputLabel htmlFor="name-simple">מספפר אישי</InputLabel>
                            <Input id="name-simple" value={'name'} onChange={() => alert('change')} />
                    </FormControl>
                    <FormControl style={{width: '300px'}}>
                            <InputLabel htmlFor="name-simple">סיסמא</InputLabel>
                            <Input id="name-simple" value={'*****'} onChange={() => alert('change')} />
                    </FormControl>
                    <Button variant="contained" style={{backgroundColor:'#38006b',color:'#fff',width: '200px'}}>התחבר</Button>
                    <View style={{width:'200px',justifyContent:'space-around',marginBottom:'-40px'}}>
                        <Text style={{color:'black', textAlign: 'center', fontSize:'16px'}}><a href="#0">שכחתי סיסמא</a></Text>
                        <Text style={{color:'black', textAlign: 'center', fontSize:'16px'}}><a href="#0">משתמש חדש</a></Text>
                    </View>
                </View>
            </View>
        </View>
    )
}