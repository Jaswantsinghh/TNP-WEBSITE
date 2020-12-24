import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import PostAddIcon from '@material-ui/icons/PostAdd';
import DescriptionIcon from '@material-ui/icons/Description';
import Menu from "./Menu";
import avatar from "../../../images/avatar11.jpeg";
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  inlinea: {
    display: 'flex',
    justifyContent: 'space-between',
  },
    img: {
        width: '70px',
        height: 'auto',
        // display:"flex",
        padding: '10px',
        marginRight: '40px',
    },
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  sidebarProfileGrids:{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      textAlign:"center",
      paddingTop:"15px"

  },

  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    display:"flex",
    justifyContent:"center",
    alignItems:"center"

  }
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
    
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const showCloseButton=() => {
      return open ? <IconButton color="inherit" aria-label="close drawer" onClick={handleDrawerClose} edge="start" className={classes.menuButton}><ChevronLeftIcon /> </IconButton>   : <span/>

  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={classes.inlinea,clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
     >
       <div className={classes.inlinea}>
       <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <ChevronRightIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Training and Placement
          </Typography>
        </Toolbar>
        <div className={classes.inlinea}>
          {showCloseButton()}
          <Menu />
        </div>
        </div>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
            <Grid container spacing={0} className={classes.draw}>

            <Grid item xs={12} className={classes.sidebarProfileGrids} > 
                  <IconButton >




                  </IconButton>
              </Grid>

              <Grid item xs={12}>
                  <Grid container spacing={0}>
                  <Grid item className={classes.sidebarProfileGrids} xs={12} style={{ padding: 20 }} />
                    <Grid item className={classes.sidebarProfileGrids} xs={12}>
                      <Avatar alt="avatar" src={avatar} className={classes.large} style={{borderRadius:"50%"}}/>
                    </Grid>
                    <Grid className={classes.sidebarProfileGrids} item xs={12}> 
                        <h6>Admin</h6>
                    </Grid>
                  </Grid>
              </Grid>
        
            </Grid>
            <div>
            </div>

        </div>
        <Divider />
        <List>
          {['Home', 'Data using Excel', 'Student', 'Company','Pages','Posts','Notice Maker'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                    {index === 0 && <HomeIcon/>}
                    {index === 1 && <HomeIcon/>}
                    {index === 2 && <DescriptionIcon />}
                    {index === 3 && <DescriptionIcon />}
                    {index === 4 && <DescriptionIcon />}
                    {index === 5 && <DescriptionIcon />}
                    {index === 6 && <PostAddIcon />}
                </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        
      </main>
    </div>
  );
}
