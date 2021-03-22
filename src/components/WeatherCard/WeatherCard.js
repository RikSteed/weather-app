import { Grid, makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
    card:{
        backgroundColor: '#385AFA',
        padding: "5px",
        margin: "5px"
    },
    media:{
        width: '400px',
        height: 'auto'
    },
    content:{
        display: 'flex 1 0 1',
        alignItems: 'center',

    },
    title:{
        color: 'white',
        textTransform: 'capitalize'
    },
    text:{
        color: 'white',
    }
}));

const WeatherCard = ({time, wind_speed, air_temperature, image}) => {
    const classes = useStyles();
    return(
        <Card className={classes.card}>
                <CardContent className={classes.content}>
                    <Grid container spacing={0}>
                        <Grid item xs={12}>
                            <h2 className={classes.title}>{time}</h2>
                        </Grid>
                        <Grid item xs={10}>
                            <h3 className={classes.text}>Vento: {(wind_speed*3.6).toFixed(0)} km/h</h3>
                        </Grid>
                        <Grid item xs={6}>
                            <h3 className={classes.text}>Temperatura: {air_temperature} C°</h3>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <img src={`../../assets/weather_icon/${image}.svg`} alt={image}/>
                    </Grid>
                    </Grid>
                </CardContent>
        </Card>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            );
}

export default WeatherCard;