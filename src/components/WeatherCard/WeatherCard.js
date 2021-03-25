import { CardMedia, makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
    card:{
        padding: "5px",
        margin: "5px",
        display: "flex",
        alignItems: "center"
    },
    img:{
        height: '100px',
        width: 'auto',
    },
    media:{
        padding:"30px"
    },
    title:{
        textTransform: 'capitalize'
    },
    col:{
        textAlign: "center"
    }
}));

const WeatherCard = ({time, wind_speed, air_temperature, image}) => {
    const classes = useStyles();
    /*
    import( //webpackMode: "eager"// `../../assets/weather_icon/${image}.svg`).then(src => )
    */
    return(
        <Card elevation={3} className={classes.card}>
                <CardContent className={classes.content}>
                            <h2 className={classes.title}>{time}</h2>
                            <h3 className={classes.text}>Vento: {(wind_speed*3.6).toFixed(0)} km/h</h3>
                            <h3 className={classes.text}>Temperatura: {air_temperature} C°</h3>
                </CardContent>
                <CardMedia className={classes.media}>
                    <img className={classes.img} src={(`../../assets/weather_icon/${image}.svg`)} alt="weatherIcon"></img>
                </CardMedia>
        </Card>
    );
}

export default WeatherCard;