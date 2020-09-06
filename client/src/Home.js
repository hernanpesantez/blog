import React from 'react';
import TopMenu from './TopMenu';
import MainContent from './MainContent';
import Footer from './Footer'
import SideMenu from './SideMenu'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
    },
  }));
  


function Home() {
    const classes = useStyles();


    return (
        <div className={classes.root}>
          <TopMenu />
          <SideMenu />
          <MainContent />
          <Footer />
        </div>
      );
}

export default Home;