import { AppBar, Button, makeStyles, Toolbar, Typography } from "@material-ui/core";
import ReplayIcon from '@material-ui/icons/Replay';


const useStyles = makeStyles((theme)=>({
    menuButton:{
      marginRight: theme.spacing(2),
    },
    title:{
      flexGrow: 1,
    },
    button:{
      marginRight: "20px",
    }
  })); 

const NavBar = () => {
    const classes = useStyles();
    
    return(
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" className={classes.title}>
                Meteo
            </Typography>
            <Button className={classes.button} color="inherit">Altra Pagina</Button>
            <Button variant="contained" color="secondary">
                <ReplayIcon/>
            </Button>
        </Toolbar>
    </AppBar>
    );
}

export default NavBar;