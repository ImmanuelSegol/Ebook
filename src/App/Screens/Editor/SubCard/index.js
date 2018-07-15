import React from 'react';
import PropTypes from 'prop-types';
import style from './style';
import {Card,CardActions,CardContent,CardMedia,IconButton,Button, CardHeader} from '@material-ui/core';
import OpenInWindow from '@material-ui/icons/OpenInBrowser';
import Delete from '@material-ui/icons/Clear';
import styles from './style';

export default function SubCard({image}){
    return(
        <div style={{margin:'5px'}}>
            <Card>
                <CardHeader action={
                    <IconButton>
                    <Delete/>
                </IconButton>
                }
                title={'כותרת'}
                />
                <CardContent>
                    <p>
                        This is a VR lomda.
                    </p>
                </CardContent>
                <CardActions style={style.actions}>
                <Button>
                    שתף
                </Button>
                <IconButton>
                    <OpenInWindow/>
                </IconButton>                    
                </CardActions>
            </Card>
        </div>
    );
}