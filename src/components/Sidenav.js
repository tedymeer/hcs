import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom';
import PhoneIcon from '@material-ui/icons/Phone';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import PeopleIcon from '@material-ui/icons/People';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import BookIcon from '@material-ui/icons/Book';

import logo from '../assets/logo.png'
import '../styles/navbar.css'

const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  });

export default function TemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });
    const toggleDrawer = (anchor, open) => (event) => {
        
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };

      const list = (anchor) => (
        <div
          className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
          })}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
          <ListItem button >
                <ListItemIcon> <HomeIcon/> </ListItemIcon>
                <NavLink className="navbarlink" to="/"><ListItemText primary="Home" ></ListItemText></NavLink>
          </ListItem>
          <ListItem button >
                <ListItemIcon> <InfoIcon/> </ListItemIcon>
                <NavLink className="navbarlink" to="/aboutus"><ListItemText primary="About US" ></ListItemText></NavLink>
          </ListItem>
          <ListItem button >
                <ListItemIcon> <CheckCircleIcon/> </ListItemIcon>
                <NavLink className="navbarlink" to="/certification"><ListItemText primary="Certification" ></ListItemText></NavLink>
          </ListItem>
          <ListItem button >
                <ListItemIcon> <PeopleIcon/> </ListItemIcon>
                <NavLink className="navbarlink" to="/training"><ListItemText primary="Trainings" ></ListItemText></NavLink>
          </ListItem>
          <ListItem button >
                <ListItemIcon> <ContactMailIcon/> </ListItemIcon>
                <NavLink className="navbarlink" to="/application"><ListItemText primary="Application" ></ListItemText></NavLink>
          </ListItem>
          <ListItem button >
                <ListItemIcon> <LiveHelpIcon/> </ListItemIcon>
                <NavLink className="navbarlink" to="/faq"><ListItemText primary="FAQ" ></ListItemText></NavLink>
          </ListItem>
          <ListItem button >
                <ListItemIcon> <BookIcon/> </ListItemIcon>
                <NavLink className="navbarlink" to="/blog"><ListItemText primary="BLOG" ></ListItemText></NavLink>
          </ListItem>
          <ListItem button >
                <ListItemIcon> <PhoneIcon/> </ListItemIcon>
                <NavLink className="navbarlink" to="/contact"><ListItemText primary="Contact" ></ListItemText></NavLink>
          </ListItem>
          </List>
        </div>
      );
      return (
        <div className="navbar-div">
          {['left'].map((anchor) => (
              
            <React.Fragment key={anchor} className="nav-bar-left-div">

              <Button onClick={toggleDrawer(anchor, true)} ><MenuIcon style={{color:'#126535',width:'2em',height:'1.7em'}}/></Button>
                 
             
              <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}

          <div className="hcs-logo"><img src={logo} style={{height:'6em',width:'9em'}}/></div>
          <div className="nav-bar-right-div"></div>
        </div>
      );
    }