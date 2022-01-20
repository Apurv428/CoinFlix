import React, { useState, useEffect } from 'react';

import axios from "axios";
import Item from "./Card";
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
import DashboardTwoToneIcon from '@mui/icons-material/DashboardTwoTone';
import NewspaperTwoToneIcon from "@mui/icons-material/NewspaperTwoTone";
import InsertEmoticonTwoToneIcon from "@mui/icons-material/InsertEmoticonTwoTone";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './Dashboard.css'
import { makeStyles } from '@mui/styles';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import { Link } from "react-router-dom";
import Footer from '../../../Components/Footer'

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

export default function SearchPgCrypto() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const apiKey = "0ddb41322b699ea5c21d1a9d91915326";
  const [loss, setLoss] = useState([]);
  const [gain, setGain] = useState([]);
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
  const fetchLosers = async () => {
    const { data } = await axios.get(
      `https://financialmodelingprep.com/api/v3/stock_market/losers?apikey=${apiKey}`
    );
    console.log(data);
    const newArray = [];
    for (let i = 0; i < 4; i++) {
      newArray[i] = data[i];
    }
    console.log(newArray);
    setLoss(newArray);
  };

  const fetchGains = async () => {
    const { data } = await axios.get(
      `https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=${apiKey}`
    );
    console.log(data);
    const newArray = [];
    for (let i = 0; i < 4; i++) {
      newArray[i] = data[i];
    }
    console.log(newArray);
    setGain(newArray);
  };
  useEffect(() => {
    window.scroll(0, 0);
    fetchLosers();
    fetchGains();
    // eslint-disable-next-line
  }, []);

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
        <List className={classes.textItem} >
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
          <h1 className="header">Market Dashboard <span><i className="fas fa-chart-line"></i></span></h1>
          <div className="container">
            <div className="row">
              <div className="col-xs-6">
                <h2 className="text-center heading-stock mb-2" >Gainers</h2>
                <Row className="g-4 text-center d-flex justify-content-around flex-wrap">
                  {gain &&
                    gain.map((c) => (
                      <Col>
                        <Item
                          name={c.name}
                          symbol={c.symbol}
                          price={c.price}
                          changesPercentage={c.changesPercentage}
                          change={c.change}
                        />
                      </Col>
                    ))}
                </Row>
              </div>
              
              <div className="col-xs-6">
                <h2 className="text-center heading-stock mt-2">Losers</h2>

                <Row className="g-4 text-center d-flex justify-content-around flex-wrap">
                  {loss &&
                    loss.map((c) => (
                      <>
                        <Col>
                          <Item
                            name={c.name}
                            symbol={c.symbol}
                            price={c.price}
                            changesPercentage={c.changesPercentage}
                            change={c.change}
                          />
                        </Col>
                      </>
                    ))}
                </Row>
              </div>
            </div>
          </div>
          <Footer />
        </Typography>
      </Box>
    </Box>
  );
}