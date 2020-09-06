
import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToApp from '@material-ui/icons/ExitToApp';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import { Grid } from '@material-ui/core';

const drawerWidth = 200;

const useStyles = makeStyles(theme => ({
  drawer: {
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    width: drawerWidth,   
    overflowX:'hiden',    
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundImage:'linear-gradient(0.60turn, #00040a,#043442 , #041d42)',
    color: 'grey',
  },
  bigAvatar: {
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    margin: 30,
    width: 150,
    height: 150,
  },
}));



function SideMenu() {
    const classes = useStyles();
  
    return (
      <Drawer
        open={true}
        variant='permanent'
        anchor='left'
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Grid container justify='center' alignItems='center'>
          <Avatar
            src='https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/23754698_10213673844297141_8403857353441778332_n.jpg?_nc_cat=103&_nc_sid=8bfeb9&_nc_ohc=z6YelpIziiIAX8BS9E2&_nc_ht=scontent-lga3-1.xx&oh=9bbdefcf4d2ce18b5e0a44f35b25a55d&oe=5F7CBCD2'
            className={classes.bigAvatar}
          />
        </Grid>
        <List>
          {['Profile', 'Sign Out'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <AccountCircle /> : <ExitToApp />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    );
  }
  
  export default SideMenu;