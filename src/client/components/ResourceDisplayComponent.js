import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import InfoIcon from 'material-ui-icons/Info';
import AddToQueueIcon from 'material-ui-icons/AddToQueue';
import ListSubheader from 'material-ui/List/ListSubheader';
import Button from 'material-ui/Button';
import Chip from 'material-ui/Chip';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 1000,
    background: theme.palette.background.paper,
  },
  
});

function ResourceDisplayComponent(props) {
  const classes = props.classes;
  return (
    <div className={classes.row}>
      <Chip label="Resource 1" className={classes.chip} />
      <Chip label="Resource 2" className={classes.chip} />
      <List className={classes.root}>
          <ListItemText primary="Reasource 1" />
          <ListItemText primary="Reasource 2" />
          <ListItemText primary="Reasource 3" />
      </List>
    </div>
  );
}

ResourceDisplayComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ResourceDisplayComponent);