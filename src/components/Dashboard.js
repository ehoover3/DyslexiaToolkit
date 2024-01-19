import * as React from "react";
import { useEffect } from "react";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import { indigo } from "@mui/material/colors";
import AudioBooks from "../widgets/AudioBooks/AudioBooks";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import Box from "@mui/material/Box";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import HowItWorks from "../widgets/HowItWorks/RotationGifs";
import Grid from "@mui/material/Grid";
import HelperBird from "../widgets/ReadingTools/HelperBird";
import HdrAutoIcon from "@mui/icons-material/HdrAuto";
import DyslexicFont from "../widgets/ReadingTools/OpenDyslexicFont";
import IconButton from "@mui/material/IconButton";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import PdfMaker from "../widgets/PdfTools/PdfMaker";
import MenuIcon from "@mui/icons-material/Menu";
import MoreResources from "../widgets/FutureIdeas/Ideas";
import MuiDrawer from "@mui/material/Drawer";
import Paper from "@mui/material/Paper";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import Simulation from "../widgets/HowItWorks/Simulation";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const theme = createTheme({
  palette: {
    primary: {
      main: indigo[800],
    },
    secondary: {
      main: indigo[500],
    },
  },
});

function Copyright(props) {
  return (
    <Typography variant='body2' color='text.secondary' align='center' {...props}>
      Copyright © Dyslexia Toolkit {new Date().getFullYear()}
    </Typography>
  );
}

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

export default function Dashboard() {
  const [activeSection, setActiveSection] = React.useState("ReadingTools");
  const [open, setOpen] = React.useState(true);

  useEffect(() => {
    const handleResize = () => {
      setOpen(window.innerWidth > 412);
    };
    handleResize();
  }, []);

  const buttonOnHover = {
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  function ListItem({ text, handleClick, icon }) {
    return (
      <ListItemButton onClick={() => setActiveSection(handleClick)} sx={buttonOnHover}>
        <ListItemIcon sx={{ color: "white" }} style={{ position: "relative", left: "4.5px" }}>
          {icon}
        </ListItemIcon>
        {open ? <div>{text}</div> : <div></div>}
      </ListItemButton>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        {/*  */}
        {/* Sidebar */}
        {/*  */}
        <Drawer variant='permanent' open={open}>
          <List component='nav' sx={{ backgroundColor: "primary.main", height: "100%", color: "white" }}>
            {open ? (
              <div id='logo' onClick={toggleDrawer} style={{ cursor: "pointer" }}>
                <IconButton sx={{ color: "white" }} style={{ position: "absolute", left: "200px" }}>
                  <ChevronLeftIcon />
                </IconButton>
                <img src='./images/logo.png' alt='logo' style={{ padding: "15px", width: "100%" }} />
              </div>
            ) : (
              <Toolbar
                sx={{
                  backgroundColor: "primary.main",
                  pr: "24px", // keep right padding when drawer closed
                  ...buttonOnHover,
                }}>
                <IconButton
                  edge='start'
                  aria-label='open drawer'
                  onClick={toggleDrawer}
                  sx={{
                    color: "white",
                    // marginRight: "36px",
                    ...(open && { display: "none" }),
                  }}>
                  <MenuIcon />
                </IconButton>
              </Toolbar>
            )}
            <ListItem text='How It Works' handleClick='HowItWorks' icon={<CheckCircleIcon />} />
            <ListItem text='Reading Tools' handleClick='ReadingTools' icon={<HdrAutoIcon />} />
            <ListItem text='PDF Tools' handleClick='PdfMaker' icon={<PictureAsPdfIcon />} />
            <ListItem text='Audio Books' handleClick='AudioBooks' icon={<AutoStoriesIcon />} />
            <ListItem text='Future Ideas' handleClick='Ideas' icon={<LightbulbIcon />} />
          </List>
        </Drawer>

        {/*  */}
        {/* MAIN */}
        {/*  */}
        <Box
          component='main'
          sx={{
            backgroundColor: (theme) => (theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[900]),
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}>
          <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {activeSection === "HowItWorks" && (
                <Grid item xs={12}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                    }}>
                    <HowItWorks />
                  </Paper>
                  <br />
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                    }}>
                    <Simulation />
                  </Paper>
                </Grid>
              )}

              {activeSection === "ReadingTools" && (
                <Grid item xs={12}>
                  <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                    <DyslexicFont />
                  </Paper>
                  <br />
                  <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                    <HelperBird />
                  </Paper>
                </Grid>
              )}

              {activeSection === "PdfMaker" && (
                <Grid item xs={12}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                    }}>
                    <PdfMaker />
                  </Paper>
                </Grid>
              )}

              {activeSection === "AudioBooks" && (
                <Grid item xs={12}>
                  <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                    <AudioBooks />
                  </Paper>
                </Grid>
              )}

              {activeSection === "Ideas" && (
                <Grid item xs={12}>
                  <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                    <MoreResources />
                  </Paper>
                </Grid>
              )}
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
