import React from 'react';
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

import {View,Text} from '../../../../Primitives';
import Loading from '../Loading/index';    

import styles from './style';

const Thing = () => (
    <Card style={{maxWidth: '340px',margin:'5px',alignSelf: 'flex-start'}}>
        <CardMedia style={{display:'flex',justifyContent: 'center'}}>
            <h1>Some image</h1>
        </CardMedia>
        <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
            Lizard
        </Typography>
        <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
        </Typography>
        </CardContent>
        <CardActions>
        <Button size="small" color="primary">
            View
        </Button>
        <Button size="small" color="primary">
            edit
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


export default function DisplayView({viewState,books}) {
    return( 
    <View style={styles.root}>
        <Menu/>
        {
            books ? 
            <View  style={{width: '100%',height: '100%',flex: 1,flexWrap: 'wrap',alignContent: 'flex-start',overflowY: 'scroll'}}>
                {
                    books.map(book => (
                        <Thing />
                    ))
                }                
            </View>
            : <Loading state={viewState}/>
        }
    </View>
    )
}
