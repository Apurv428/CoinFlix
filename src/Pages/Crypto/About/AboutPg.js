import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CottageTwoToneIcon from "@mui/icons-material/CottageTwoTone";
import DashboardTwoToneIcon from "@mui/icons-material/DashboardTwoTone";
import NewspaperTwoToneIcon from "@mui/icons-material/NewspaperTwoTone";
import InsertEmoticonTwoToneIcon from "@mui/icons-material/InsertEmoticonTwoTone";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import { useNavigate } from "react-router-dom";
import "./AboutPg.css";
import Footer from '../../../Components/Footer';
import { makeStyles } from '@mui/styles';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import { Link } from "react-router-dom";
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
const drawerWidth = 240;


const useStyles = makeStyles({
  textItem: { color: 'white' + '!important', },
  listItem: { '&:hover': { backgroundColor: '#7b1fa2' + '!important', } },
  paper: { background: '#9921e8', backgroundImage: "linear-gradient(#5f0a87,#000428)" },
  icon: { background: 'white' + '!important' },
  logo: { textDecoration: "none", color: "white", '&:hover': { textDecoration: "none", color: '#90caf9' } }
})
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

export default function AboutPgCrypto() {
  const classes = useStyles();

  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  function handleClickHome() {
    console.log("home");
    navigate("/", { replace: true });
  }
  function handleClickDashboard() {
    navigate("/crypto", { replace: true });
  }
  function handleClickNews() {
    navigate("/crypto/news", { replace: true });
  }
  function handleClickAbout() {
    navigate("/crypto/about", { replace: true });
  }
  function handleClickContact() {
    navigate("/crypto/contact", { replace: true });
  }
  function handleClickSearch() {
    navigate("/crypto/search", { replace: true });
  }
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Divider />
      <AppBar position="fixed" open={open} sx={{ background: "#4B0082" }} >
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
          <ListItem className={classes.listItem} button key="6" onClick={handleClickSearch}>
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
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography>
          <h1 className="text-center mb-5 developers">Developers👩‍💻</h1>
          <div className="container">
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6 px-5">
                <div className="item">
                  <div className="hidden-content">
                    <h4>Pratiksha Sankhe</h4>
                  </div>
                  <div className="showed-content">
                    <img
                      src="https://lh3.googleusercontent.com/nvL_RG4esZpDg1Bcxsp4vyqbPtyJCSA3M_HWaHajYVpUHOyn_blFihC3AchFG5nKcuu8WUBFYBcW89-owWE2KM1EOzwg4DGw7U41P12BxXa1dWveGz3JJ2oeQTsnOUzPxTJ9iYy99Q=w2400"
                      alt=""
                    ></img>
                  </div>
                </div>
                <div className="icon">
                  <a
                    href="https://github.com/psankhe28"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github mx-3"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/pratiksha-sankhe/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin-in mx-3"></i>
                  </a>
                </div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 px-5">
                <div className="item">
                  <div className="hidden-content">
                    <h4>Apurv Sonawane</h4>
                  </div>
                  <div className="showed-content">
                    <img
                      src="https://lh3.googleusercontent.com/yTs9QqP_n8sbiPnGGRe5a-uxWV_v9_WHC7fIEl2YmZ84whWbwbnx2BGhalCsFdAINEgL9RChOF8249E35oDtGz608dqMXt9j37ewHJtJL610bc1RtafMg7ZK92euZvzXv7puk6j_9w=w2400"
                      alt=""
                    ></img>
                  </div>
                </div>
                <div className="icon">
                  <a
                    href="https://github.com/Apurv428"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github mx-3"></i>
                  </a>
                  <a
                    href="
                    https://www.linkedin.com/in/apurvSonawane/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin-in mx-3"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-center my-2 about">About CoinFlix <i className="fas fa-info-circle"></i></h1>
          <div className="container">
            <div className="row mt-3">
              <div className="col-4">
                <div className="card border border-dark box1" style={{ borderRadius: "5px" }}>
                  CoinFlix is the ultimate cryptocurrency market tracker and has an intuitive interface with all the data you need at your fingertips. It is easy to use for beginners too!
                </div>
              </div>
              <div className="col-4">
                <div className="card border border-dark box2" style={{ borderRadius: "5px" }}>
                  Keep track of cryptocurrencies with CoinFlix! It's the #1 tracker for your portfolio. CoinFlix will monitor prices. Invest in the right cryptocurrency, to keep up.
                </div>
              </div>
              <div className="col-4">
                <div className="card border border-dark box3" style={{ borderRadius: "5px" }}>
                  CoinFlix is the cryptocurrency market tracker and investment analyst.Learn which coins to buy and which to avoid. Invest wisely and see your money grow with CoinFlix.
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </Typography>
      </Box>
    </Box>
  );
}


