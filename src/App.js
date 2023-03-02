import './App.css';
import {AppBar, IconButton, Toolbar, Typography} from "@mui/material"
import {Box, Container} from "@mui/system";
import MenuIcon from '@material-ui/icons/Menu'
import { ThemeProvider, useTheme, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) =>({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  }
}));

function App() {
    const theme = useTheme();

    const classes = useStyles();

    return (
          <ThemeProvider theme={theme}>
             <AppBar position="fixed">
                <Container position="fixed">
                     <Toolbar>
                        <IconButton edge="start"
                        color="inherit" aria-label="menu" classname={classes.menuButton}>
                            <MenuIcon />
                        </IconButton>
                         <Typography classname={classes.title}>Welcome</Typography>
                         <Box>
                             <button color="inherit" variant="outlined">Log In</button>
                         </Box>
                         <button color="inherit" variant="outlined">Sign Up</button>
                     </Toolbar>
              </Container>
             </AppBar>
          </ThemeProvider>
     );
}

export default App;
