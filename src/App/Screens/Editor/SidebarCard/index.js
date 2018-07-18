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
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import OpenInWindow from '@material-ui/icons/OpenInBrowser';


import SubCard from '../SubCard';
import {Vrlogo,threeSixlogo,Pdflogo} from '../../../../img';  


const styles = theme => ({
  card: {
    maxWidth: 300,
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

class RecipeReviewCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes,title,date,details,subTabs,id,onClickToggleRenderView,type,src} = this.props;
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
            <IconButton aria-label="Share">
              <ShareIcon />
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
                  subTabs.filter(tab => tab.parentId === id ).map(tab => <SubCard title={tab.title} content={tab.details}/>)
                }
            </CardContent>
          </Collapse>
        </Card>
      </View>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);