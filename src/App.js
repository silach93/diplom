import './App.css';
import {AppBar, Box, Container, IconButton, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu'
import {makeStyles} from '@material-ui/core/styles'

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

 const classes = useStyles();

  return (
    <AppBar position="fixed">
      <Container fixed>
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
  );
}

export default App;
