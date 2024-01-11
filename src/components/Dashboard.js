import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DyslexiaIntro from "../widgets/DyslexiaIntro";
import MakeAPdf from "../widgets/MakeAPdf";
import HowTheFontWorks from "../widgets/HowTheFontWorks";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import HdrAutoIcon from "@mui/icons-material/HdrAuto";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AudioBooks from "../widgets/AudioBooks";
import MoreResources from "../widgets/MoreResources";

const defaultTheme = createTheme();

// const theme = createTheme({
//   palette: {
//     primary: "#1976d2",
//     secondary: "#9c27b0",
//   },
// });

function Copyright(props) {
  return (
    <Typography variant='body2' color='text.secondary' align='center' {...props}>
      <div color='inherit'>Copyright © Dyslexia Toolkit {new Date().getFullYear()}</div>
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
  const [activeSection, setActiveSection] = React.useState("pdf");

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <Drawer variant='permanent' open={open}>
          {open ? (
            <Toolbar
              sx={{
                color: "white",
                backgroundColor: "primary.main",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                px: [1],
              }}
              id='title'>
              DYSLEXIA TOOLKIT
              <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon
                  sx={{
                    color: "white",
                  }}
                />
              </IconButton>
            </Toolbar>
          ) : (
            <Toolbar
              sx={{
                backgroundColor: "primary.main",
                pr: "24px", // keep right padding when drawer closed
              }}>
              <IconButton
                edge='start'
                // color='inherit'
                aria-label='open drawer'
                onClick={toggleDrawer}
                sx={{
                  color: "white",

                  marginRight: "36px",
                  ...(open && { display: "none" }),
                }}>
                <MenuIcon />
              </IconButton>
            </Toolbar>
          )}
          <Divider />
          <List component='nav' sx={{ backgroundColor: "primary.main", height: "100%", color: "white" }}>
            {/* <img src='./images/logo.png' alt='logo' style={{ padding: "15px", width: "100%" }} /> */}
            <ListItemButton onClick={() => handleButtonClick("understand")}>
              <ListItemIcon sx={{ color: "white" }}>
                <LightbulbIcon />
              </ListItemIcon>
              <div>Dyslexia Intro</div>
            </ListItemButton>
            <ListItemButton onClick={() => handleButtonClick("font")}>
              <ListItemIcon sx={{ color: "white" }}>
                <HdrAutoIcon />
              </ListItemIcon>
              <div>Dyslexic Font</div>
            </ListItemButton>
            <ListItemButton onClick={() => handleButtonClick("pdf")}>
              <ListItemIcon sx={{ color: "white" }}>
                <PictureAsPdfIcon />
              </ListItemIcon>
              <div>Make a PDF</div>
            </ListItemButton>

            <Divider sx={{ my: 1 }} />
            <ListItemButton onClick={() => handleButtonClick("books")}>
              <ListItemIcon sx={{ color: "white" }}>
                <AutoStoriesIcon />
              </ListItemIcon>
              <div>Free Audio Books</div>
            </ListItemButton>
            <ListItemButton onClick={() => handleButtonClick("resources")}>
              <ListItemIcon sx={{ color: "white" }}>
                <CheckCircleIcon />
              </ListItemIcon>
              <div>More Resources</div>
            </ListItemButton>
          </List>
        </Drawer>
        <Box
          component='main'
          sx={{
            backgroundColor: (theme) => (theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[900]),
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}>
          <Toolbar />

          <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {activeSection === "understand" && (
                <Grid item xs={12}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                    }}>
                    <DyslexiaIntro />
                  </Paper>
                </Grid>
              )}

              {/* How The Font Works */}
              {activeSection === "font" && (
                <Grid item xs={12}>
                  <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                    <HowTheFontWorks />
                  </Paper>
                </Grid>
              )}

              {/* Make A PDF */}
              {activeSection === "pdf" && (
                <Grid item xs={12}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                    }}>
                    <MakeAPdf />
                  </Paper>
                </Grid>
              )}
              {activeSection === "books" && (
                <Grid item xs={12}>
                  <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                    <AudioBooks />
                  </Paper>
                </Grid>
              )}

              {activeSection === "resources" && (
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