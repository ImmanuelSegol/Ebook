import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import View from '../../../../Primitives/View';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
//import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';

import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import OpenInWindow from '@material-ui/icons/OpenInBrowser';


import SubCard from '../SubCard';
import {Vrlogo,threeSixlogo,Pdflogo} from '../../../../img';  


const styles = theme => ({
  card: {
    width: 282,
    margin:15,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class SidebarCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes,title,date,details,subTabs,id,onClickToggleRenderView,type,src,removeEbookTab} = this.props;
    const {expanded} = this.state;
    return (
      <View noFlex color='none'>
        <Card raised={true} className={classes.card}>
          <CardHeader
            action={
              <IconButton onClick={() => {
                onClickToggleRenderView(type,src)
              }}>
                <OpenInWindow/>
              </IconButton>
            }
            title={title}
            subheader={date}
          />
          <CardMedia
            className={classes.media}
            image={Vrlogo}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography component="p">
              {details}
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Share" onClick={() => removeEbookTab(id)}>
              <DeleteIcon />
            </IconButton>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
                {
                  subTabs.filter(tab => tab.parentId === id ).map((tab,i) => <SubCard key={i + Math.random(1,10)} title={tab.title} content={tab.details}/>)
                }
            </CardContent>
          </Collapse>
        </Card>
      </View>
    );
  }
}

SidebarCard.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  subTabs: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  onClickToggleRenderView: PropTypes.func.isRequired,
  type:PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  removeEbookTab: PropTypes.func.isRequired,
};

export default withStyles(styles)(SidebarCard);