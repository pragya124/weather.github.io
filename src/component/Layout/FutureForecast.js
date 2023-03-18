import React, { useState } from "react";
import classes from './FutureForecast.module.css';
import { useNavigate } from "react-router-dom";


const FutureForecast=( {TempInfo,AllData})=>{
    const [PassCurrentDayWiseData,setPassCurrentDayWiseData]=useState([]);
    const navigate=useNavigate();
    const filterItem =(dt_txt) =>{
        const updatedList=AllData.list.filter((Ele)=>{
            return Ele.dt_txt.slice(0,10)===dt_txt.slice(0,10);
    });
    navigate.push({pathname:'./DayWiseData',state:{details:updatedList}});
    }
    return(
        <>
            <div className={classes['future-forecast']}>
                <div className={classes['weather-forecast']}>
                    {TempInfo.map((curElement)=>{
                        var futureDate=new Date(curElement.date);
                        let month=futureDate.toLocaleString('default', { month: 'long' });
                        let day=futureDate.getDate();
                        return(
                            <>
                                <div className={classes['weather-forecast-item']} onClick={()=>filterItem(curElement.date)}>
                                    <div className={classes['future-date']}>{month} {day}</div>
                                    <img src={`http://openweathermap.org/img/wn/${curElement.weathermoodIcon}@2x.png`} alt="future-img"/>
                                    <div className={classes['min-max-temp']}>Mood-{curElement.mood}</div>
                                    <div className={classes['min-max-temp']}>Current-{curElement.Temp}&deg;C</div>
                                    <div className={classes['min-max-temp']}>min-{curElement.Min_temp}&deg;C</div>
                                    <div className={classes['min-max-temp']}>max-{curElement.Max_temp}&deg;C</div>
                                </div>
                            </>
                        );
                    })} 
                </div>
            </div>
        </>
    );
};

export default FutureForecast;