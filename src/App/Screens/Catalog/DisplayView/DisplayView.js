import React from 'react';
import {Card,Typography,Button,CardActions,CardContent} from '@material-ui/core';

import {View,Text} from '../../../../Primitives';
import Loading from '../Loading/index';    

import styles from './style';

const Thing = () => (
    <Card style={{maxWidth: '345px',margin:'5px'}}>
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
            Share
        </Button>
        <Button size="small" color="primary">
            Learn More
        </Button>
        </CardActions>
  </Card>
)


export default function DisplayView({viewState,data={}}) {
    return( 
    <View style={styles.root}>
        {
            data ?  
            <View  style={{width: '100%',height: '100%',flex: 1,flexWrap: 'wrap',alignContent: 'flex-start',justifyContent: 'center',overflowY: 'scroll'}}>
                <Thing/>
                <Thing/>
                <Thing/>         
                <Thing/>
                <Thing/>
                <Thing/>
                <Thing/>
                <Thing/>
                <Thing/>
                <Thing/>
                <Thing/>
                <Thing/>         
                <Thing/>
                <Thing/>
                <Thing/>
                <Thing/>
                <Thing/>
                <Thing/>                  
                <Thing/>
                <Thing/>
                <Thing/>         
                <Thing/>
                <Thing/>
                <Thing/>
                <Thing/>
                <Thing/>
                <Thing/>                  
                <Thing/>
                <Thing/>
                <Thing/>         
                <Thing/>
                <Thing/>
                <Thing/>
                <Thing/>
                <Thing/>
                <Thing/>                  
                <Thing/>
                <Thing/>
                <Thing/>         
                <Thing/>
                <Thing/>
                <Thing/>
                <Thing/>
                <Thing/>
                <Thing/>                                    
            </View>
            : <Loading state={viewState}/>
        }
    </View>
    )
}