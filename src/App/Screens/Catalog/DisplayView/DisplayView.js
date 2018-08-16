import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {
    Card,
    Typography,
    Button,
    CardActions,
    CardContent,
    CardMedia,
    Drawer,
    Divider
} from '@material-ui/core';

import * as actions from '../actions';

import {View,Text} from '../../../../Primitives';
import Loading from '../Loading/index';    

import styles from './style';

const Thing = ({bookInfo,setEbook}) => (
    <Card style={{maxWidth: '340px',margin:'5px',alignSelf: 'flex-start'}}>
        <CardMedia style={{display:'flex',justifyContent: 'center'}}>
            <h1>Some image</h1>
        </CardMedia>
        <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
            {bookInfo.title}
        </Typography>
        <Typography component="p">
            {bookInfo.details}
        </Typography>
        </CardContent>
        <CardActions>
            <Link style={{textDecoration: 'none'}} to="/editor" onClick={() => setEbook({
                id:bookInfo.id,
                title:bookInfo.title
            })}>
                <Button size="small" color="primary">View</Button>
            </Link>
        <Button size="small" color="primary">
            Edit
        </Button>
        </CardActions>
  </Card>
)

class Menu extends React.Component{
    state = {
        isOpen: false,
    }
    onClose = this.onClose.bind(this);
    onClose(){
        this.setState()
    }
    render(){
        return(
            <Drawer anchor='right' open={this.state.isOpen} onClose={() => alert('Close')}>
                <View col>
                    <h1>Hello</h1>
                    <Divider/>
                    <h1>Hello</h1>
                    <Divider/>
                    <h1>Hello</h1>
                </View>
            </Drawer>
        )
    }
}


export default function DisplayView({viewState,books,setCurrentEbook}) {
    return( 
    <View style={styles.root}>
        <Menu/>
        {
            books ? 
            <View  style={{width: '100%',height: '100%',flex: 1}}>
                    <View style={{flex:'1 1 20%'}}>

                    </View>
                    <View col style={{flex:'1 1 60%',minHeight:'100%',backgroundColor:'white',overflowY: 'scroll'}}>
                           
                    </View>
                    <View style={{flex:'1 1 20%'}}>
                
                    </View>
            </View>
            : <Loading state={viewState}/>
        }
    </View>
    )
}


/*
                    {
                    books.map((book) => (
                        <Thing key={book.id} bookInfo={book} setEbook={setCurrentEbook}/>
                    ))
                }                
*/

