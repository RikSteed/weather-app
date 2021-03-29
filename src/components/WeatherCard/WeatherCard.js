import { Accordion, AccordionDetails, AccordionSummary, Divider, Grid, makeStyles, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { AccessTimeRounded, ExpandMoreRounded, OpacityRounded, TrendingFlatRounded } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    card:{
        margin: "5px",
        alignItems: "center",
        width: ""
    },
    cardContent:{
        display: "flex"
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
        alignContent: "right",
        display: "flex",
        alignItems: "center"
    },
    text:{
        display: "flex",
        alignItems: "center"
    }
}));

const WeatherCard = ({data, image="", time}) => {
    const classes = useStyles();
    console.log(data);
    console.log([data]);
    /*
    import( //webpackMode: "eager"// `../../assets/weather_icon/${image}.svg`).then(src => )
    */
    return(
        <Card elevation={3} className={classes.card}>
                <CardContent>
                    <Typography variant="h5">Vigevano</Typography>
                    <Typography className={classes.title} variant="h6">{time}</Typography>
                            {/*
                            <h3 className={classes.text}>Vento: {(wind_speed*3.6).toFixed(0)} km/h</h3>
                            <h3 className={classes.text}>Temperatura: {air_temperature} C°</h3>
                            */}
                </CardContent>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreRounded/>} color="primary">Previsioni per la giornata</AccordionSummary>
                    
                            {
                                data.map.length &&
                                    data.map((data) =>
                                    <AccordionDetails>
                                        <Grid container>
                                        <Grid container item>
                                            <Grid item xs={8}>
                                                <Typography className={classes.text}><AccessTimeRounded/>&nbsp;{data.time}</Typography>
                                                <Typography className={classes.text}><TrendingFlatRounded/>&nbsp;{(data.data.instant.details.wind_speed*3.6).toFixed(0)} km/h</Typography>
                                                <Typography className={classes.text}><OpacityRounded/>&nbsp;{(data.data.instant.details.relative_humidity).toFixed(0)}%</Typography>
                                            </Grid>
                                            <Grid item xs={2} className={classes.col}>
                                            <Typography variant="h4">{(data.data.instant.details.air_temperature).toFixed(0)}°</Typography>
                                            <img width="100%" src={(`../../assets/weather_icon/${data.data.next_1_hours.summary.symbol_code}.svg`)} alt="weatherIcon"></img>
                                            </Grid>
                                            <Divider light/>
                                        </Grid>
                                        </Grid>
                                    </AccordionDetails>    
                                    )
                            }

                    
                </Accordion>
        </Card>
    );
}

export default WeatherCard;