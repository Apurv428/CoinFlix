import React, { useState, useEffect } from "react";
import axios from "axios";
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
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import InsertEmoticonOutlinedIcon from "@mui/icons-material/InsertEmoticonOutlined";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CandlestickChartIcon from "@mui/icons-material/CandlestickChart";
import "./SearchPg.css";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import {Button} from "@material-ui/core";
import { makeStyles } from "@mui/styles";
import ShowChartIcon from '@mui/icons-material/ShowChart';
import { Link } from "react-router-dom";
import Footer from '../../../Components/Footer';


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
export default function SearchPgStock() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const apiKey = "odP5EvRQMetbESMqtkqBSxFZRvCk83Uk";
  const navigate = useNavigate();
  function handleClickHome() {
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
  const fetchStocks = async (search) => {
    try {
      const { data } = await axios.get(
        `https://api.polygon.io/v2/aggs/ticker/${search}/prev?adjusted=true&apiKey=${apiKey}`
      );

      setCoins(data.results);
    } catch (error) {
      throw new Error(error);
    }
  };
  useEffect(() => {
    window.scroll(0, 0);
   fetchStocks(search);
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    fetchStocks(search);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      fetchStocks(search);
    }
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const priceChange = (coin) => {
    return ((coin.c - coin.o) * 100) / coin.o;
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Divider />
      <AppBar position="fixed" open={open} sx={{ background: "#4B0082" }}>
      <Toolbar sx={{backgroundImage:"linear-gradient(#000428,#5f0a87)" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: "36px",
              color: "white",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            style={{ color: "white" }}
          >
           <Link to = "/" className = {classes.logo}> CoinFlix <ShowChartIcon/></Link>

          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} classes={{ paper: classes.paper }}>
        <DrawerHeader className={classes.textItem}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon style={{ color: "white" }} />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List className={classes.textItem}>
          <br />
          <ListItem
            className={classes.listItem}
            button
            key="1"
            onClick={handleClickHome}
          >
            <ListItemIcon>
              <CottageOutlinedIcon style={{ color: "#fafafa" }} />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <br />
          <ListItem
            className={classes.listItem}
            button
            key="2"
            onClick={handleClickDashboard}
          >
            <ListItemIcon>
              <DashboardOutlinedIcon style={{ color: "#fafafa" }} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <br />
          <ListItem
            className={classes.listItem}
            button
            key="3"
            onClick={handleClickNews}
          >
            <ListItemIcon>
              <NewspaperOutlinedIcon style={{ color: "#fafafa" }} />
            </ListItemIcon>
            <ListItemText primary="News" />
          </ListItem>
          <br />
          <ListItem
            className={classes.listItem}
            button
            key="6"
            onClick={handleClickSearch}
          >
            <ListItemIcon>
              <SearchOutlinedIcon style={{ color: "#fafafa" }} />
            </ListItemIcon>
            <ListItemText primary="Search" />
          </ListItem>
          <br />
          <Divider />
          <br />
          <ListItem
            className={classes.listItem}
            button
            key="5"
            onClick={handleClickAbout}
          >
            <ListItemIcon>
              <InsertEmoticonOutlinedIcon style={{ color: "#fafafa" }} />
            </ListItemIcon>
            <ListItemText primary="About Us" />
          </ListItem>
          <br />
          <ListItem
            className={classes.listItem}
            button
            key="6"
            onClick={handleClickContact}
          >
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
          <div className="coin-app">
            <div className="coin-search">
              <h1 className="stock-text">
                Search a Stock <i class="fas fa-chart-line"></i>
              </h1>
              <form onSubmit={handleChange}>
                <input
                  type="text"
                  placeholder="Search any stock by entering its symbol"
                  className="coin-input"
                  onChange={(e) => setSearch(e.target.value.toUpperCase())}
                  onKeyPress={handleKeyDown}
                />
                <Button
                  onClick={(e) => setSearch(e.target.value.toUpperCase())}
                  variant="contained"
                  style={{
                    marginLeft: -70,
                    backgroundColor: "transparent",
                    color: "white",
                  }}
                >
                  <SearchIcon fontSize="large" />
                </Button>
              </form>
            </div>
            {coins &&
              coins.map((coins) => {
                return (
                  <div
                    class="card border-dark mb-3 text-center"
                    // style={{ maxWidth: "18rem", backgroundImage: "linear-gradient(#ad5389, #3c1053)" }}
                    style={{ maxWidth: "18rem", backgroundImage: "linear-gradient(#3f2b96, #a8c0ff)" }}
                    // style={{ maxWidth: "18rem", backgroundImage: "linear-gradient(to top, #3b41c5 0%, #a981bb 49%, #ffc8a9 100%)" }}
                  >
                    <div class="card-header bg-transparent border-dark text-light ">
                      {coins.T}
                    </div>
                    <div class="card-body text-light">
                      <h5 class="card-title text-light">${coins.c}</h5>
                      <p class="card-text">
                        Range: ${coins.l}-${coins.h}
                      </p>
                    </div>
                    <div class="card-footer bg-transparent border-dark text-center">
                    {priceChange(coins) < 0 ? (
                    <p className="coin-percent red text-center ml-5">
                      {priceChange(coins).toFixed(2)}%
                    </p>
                  ) : (
                    <p className="coin-percent green text-center ml-5">
                      {priceChange(coins).toFixed(2)}%
                    </p>
                  )}
                    </div>
                  </div>
                );
              })}
              {!coins && <p className="text-danger">Plz enter another stock symbol!</p>}
          </div>
          <Footer/>
        </Typography>
      </Box>
    </Box>
  );
}
