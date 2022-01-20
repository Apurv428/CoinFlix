import React, { useState } from 'react';
import './ContactPg.css'
import { db } from './firebase'
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import CottageTwoToneIcon from '@mui/icons-material/CottageTwoTone';
import DashboardTwoToneIcon from '@mui/icons-material/DashboardTwoTone';
import NewspaperTwoToneIcon from '@mui/icons-material/NewspaperTwoTone';
import InsertEmoticonTwoToneIcon from '@mui/icons-material/InsertEmoticonTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import { Link } from "react-router-dom";
import Footer from '../../../Components/Footer'
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
const useStyles = makeStyles({
  textItem: { color: 'white' + '!important', },
  listItem: { '&:hover': { backgroundColor: '#7b1fa2' + '!important', } },
  paper: { background: '#9921e8', backgroundImage: "linear-gradient(#5f0a87,#000428)" },
  icon: { background: 'white' + '!important' },
  logo: { textDecoration: "none", color: "white", '&:hover': { textDecoration: "none", color: '#90caf9' } }
})

export default function ContactPgStocks() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  function handleClickHome() {
    console.log("home");
    navigate("/", { replace: true });
  }
  function handleClickDashboard() {
    navigate("/stocks", { replace: true });
  }
  function handleClickNews() {
    navigate("/stocks/news", { replace: true });
  }
  function handleClickAbout() {
    navigate("/stocks/about", { replace: true });
  }
  function handleClickContact() {
    navigate("/stocks/contact", { replace: true });
  }
  function handleClickSearch() {
    navigate("/stocks/search", { replace: true });
  }


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Divider />
      <AppBar position="fixed" open={open} sx={{ background: "#4B0082" }}>

        <Toolbar sx={{ backgroundImage: "linear-gradient(#000428,#5f0a87)" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <Link to="/" className={classes.logo}> CoinFlix <ShowChartIcon /></Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} classes={{ paper: classes.paper }}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon style={{ color: 'white' }} />
            ) : (
              <ChevronLeftIcon style={{ color: 'white' }} />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List className={classes.textItem}>
          <br />
          <ListItem className={classes.listItem} button key="1" onClick={handleClickHome}>
            <ListItemIcon>
              <CottageTwoToneIcon style={{ color: "#fafafa" }} />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <br />
          <ListItem className={classes.listItem} button key="2" onClick={handleClickDashboard}>
            <ListItemIcon>
              <DashboardTwoToneIcon style={{ color: "#fafafa" }} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <br />
          <ListItem className={classes.listItem} button key="3" onClick={handleClickNews}>
            <ListItemIcon>
              <NewspaperTwoToneIcon style={{ color: "#fafafa" }} />
            </ListItemIcon>
            <ListItemText primary="News" />
          </ListItem>
          <br />
          <ListItem className={classes.listItem} button key="4" onClick={handleClickSearch}>
            <ListItemIcon>
              <SearchTwoToneIcon style={{ color: "#fafafa" }} />
            </ListItemIcon>
            <ListItemText primary="Search" />
          </ListItem>
          <br />
          <Divider />
          <br />
          <ListItem className={classes.listItem} button key="5" onClick={handleClickAbout}>
            <ListItemIcon>
              <InsertEmoticonTwoToneIcon style={{ color: "#fafafa" }} />
            </ListItemIcon>
            <ListItemText primary="About Us" />
          </ListItem>
          <br />
          <ListItem className={classes.listItem} button key="6" onClick={handleClickContact}>
            <ListItemIcon>
              <ContactPageOutlinedIcon style={{ color: "#fafafa" }} />
            </ListItemIcon>
            <ListItemText primary="Contact Us" />
          </ListItem>
          <br />
        </List>

      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

        <Typography>
        <div className="app">
            <form className="form" onSubmit={handleSubmit}>
              <h1 className="contact">Write us here!📝</h1>

              <label>Name</label>
              <input
              type="text"
              name="name"
                placeholder="Name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />

              <label>Email</label>
              <input
              type="email"
                placeholder="Email"
                value={email}
                name="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />

              <label>Message</label>
              <textarea
              type="text"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>

              <button
                type="submit"
                style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)",  backgroundImage: "linear-gradient(#41295a,#2F0743)" }}
              >
                Send! &nbsp;
                <i className="fa fa-paper-plane" aria-hidden="true"></i>
              </button>
            </form>
          </div>
          <Footer />
        </Typography>
      </Box>
    </Box>
  );
}