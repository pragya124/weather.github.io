import React, { useContext } from "react";
import classes from './DayWiseData.module.css';

const DayWiseData = (props) => {
    // const DaywiseData=useContext(WeatherContext)
    console.log(props.history.location.state.details);
    const DataCurrent = props.history.location.state.details;
    console.log(DataCurrent);
    return (
        <>
            <div className={classes.container}>
                <div className={classes['weather-forecast']}>
                    {DataCurrent.map((curDayWiseElement) => {
                        var futureDate = new Date(curDayWiseElement.dt_txt.slice(0, 10));
                        let month = futureDate.toLocaleString('default', { month: 'long' });
                        let day = futureDate.getDate();
                        //let hours=new Date(curDayWiseElement.dt_txt.slice(10,20));
                        return (
                            <>
                                <div className={classes['weather-forecast-item']}>
                                    <div className={classes['future-date']}>{curDayWiseElement.dt_txt}</div>
                                    <img src={`http://openweathermap.org/img/wn/${curDayWiseElement.weather[0].icon}@2x.png`} alt="future-img" />
                                    <div className={classes['min-max-temp']}>Mood-{curDayWiseElement.weather[0].description}</div>
                                    <div className={classes['min-max-temp']}>Current-{curDayWiseElement.main.temp}&deg;C</div>
                                    <div className={classes['min-max-temp']}>min-{curDayWiseElement.main.temp_max}&deg;C</div>
                                    <div className={classes['min-max-temp']}>max-{curDayWiseElement.main.temp_min}&deg;C</div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>

        </>
    );
};

export default DayWiseData;