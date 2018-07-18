import React from 'react';
import {Paper,Typography} from '@material-ui/core';

import {View,Text} from '../../../../Primitives';
import Loading from '../Loading/index';    

import styles from './style';

const Thing = () => (
    <Paper style={{margin: '10px',minHeight: '200px'}}>
                    <Typography variant="headline" component="h3">
                            This is a sheet of paper.
                    </Typography>
                    <Typography component="p">
                    Paper can be used to build surface or other elements for your application.
                    </Typography>
    </Paper>
)


export default function DisplayView({viewState,data={}}) {
    return( 
    <View style={styles.root}>
        {
            data ?  
            <View  style={{width: '100%',height: '100%',flex: 1,flexWrap: 'wrap',alignContent: 'flex-start',overflowY: 'scroll'}}>
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