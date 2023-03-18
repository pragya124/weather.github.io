import React,{useState,useEffect, Fragment} from "react";
import classes from './currentInfo.module.css';

const CurrentInfo=(props)=>{
    const [currentTime,setCurrentTime]=useState();
    const weekday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const today = new Date();
    let day = weekday[today.getDay()];
    var date = month[today.getUTCMonth()]+' '+today.getDate()+' '+today.getFullYear();
    
    const UpdateTime=()=>{
        const time=new Date().toLocaleTimeString();
        setCurrentTime(time);
    };
    setInterval(UpdateTime,1000);
    useEffect(() => {
        //console.log(props.TodaysWeatherInfo); 
    }, [props.TodaysWeatherInfo])

    return(
        <Fragment>
            <div className={classes['current-info']}>
                <div className={classes['date-conatiner']}>
                    <div className={classes.time}>{currentTime}
                    </div>
                    <div className={classes.dates}>{day}, {date}</div>
                    <div className={classes['current-extra-info']}>
                        <span>Temperature:{props.TodaysWeatherInfo.Temp}&deg;C</span>
                        <span>Mood:{props.TodaysWeatherInfo.Mood}</span>
                        <span>Humidity:{props.TodaysWeatherInfo.Humidity}</span>
                        <span>Pressure:{props.TodaysWeatherInfo.Pressure}</span>
                        <span>Wind Speed:{props.TodaysWeatherInfo.WindSpeed}</span>
                    </div>
                </div>
                <div className={classes.mood}>
                <img src={`http://openweathermap.org/img/wn/${props.TodaysWeatherInfo.weathermoodIcon}@2x.png`} alt="current-img"/>
                </div>
                <div className={classes.location}>{props.TodaysWeatherInfo.Country} , {props.TodaysWeatherInfo.City}<div>{props.TodaysWeatherInfo.Lat},{props.TodaysWeatherInfo.Lon}</div></div>
                
            </div>   
        </Fragment>
    );
};

export default CurrentInfo;