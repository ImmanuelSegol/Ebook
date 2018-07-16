import React from 'react';
import PropTypes from 'prop-types';
import style from './style';
import {Card,CardActions,CardContent,CardMedia,IconButton,Button, CardHeader} from '@material-ui/core';
import OpenInWindow from '@material-ui/icons/OpenInBrowser';
import Delete from '@material-ui/icons/Clear';
import styles from './style';

export default function SubCard({image,title,content}){
    return(
        <div style={{margin:'5px'}}>
            <Card>
                <CardHeader action={
                    <IconButton>
                    <Delete/>
                </IconButton>
                }
                title={title}
                />
                <CardContent>
                    <p>
                        {content}
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