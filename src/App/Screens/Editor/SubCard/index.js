import React from 'react';
import PropTypes from 'prop-types';
import {Card,CardActions,CardContent,CardMedia} from '@material-ui/core';

export default function SubCard({image}){
    return(
        <div style={{margin:'5px'}}>
            <Card>
                <CardMedia image={image} style={{width:'300px',height:'250px'}}/>
                <CardContent>
                    <p>
                        This is a VR lomda.
                    </p>
                </CardContent>
                <CardActions>
                    <p>Share</p>
                </CardActions>
            </Card>
        </div>
    );
}