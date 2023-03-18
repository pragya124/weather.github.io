import React,{useState,useEffect,Fragment} from "react";
import classes from './header.module.css';
import Input from "../UI/Input";
import CurrentInfo from './CurrentInfo';
import FutureForecast from "./FutureForecast";
import { Link } from 'react-router-dom';
import Nav from "./Nav";


const Header=()=>{

    const [SearchValue,setSearchValue]=useState('Delhi');
    const [TempInfo,setTempInfo]=useState([]);
    const [PassCurrentData,setPassCurrentData]=useState({});
    const [PassAllData,setPassAllData]=useState([]);

    const SearchValueHandler=(event)=>{
        setSearchValue(event.target.value);
    }

    const getWeatherInfo=async()=>{
        try{
            const url=`https://api.openweathermap.org/data/2.5/forecast?q=${SearchValue}&units=metric&appid=4beffc863037e89f0f181d893d1cf79b`;
            const response=await fetch(url);
            const data=await response.json();
            setPassAllData(data);
            const arr=[];
            for(let i=0;i<40;i++){
                if(i%8===0){
                    arr.push(
                            {   
                                Temp:data.list[i].main.temp,
                                Min_temp:data.list[i].main.temp_min,
                                Max_temp:data.list[i].main.temp_max,
                                date:data.list[i].dt_txt,
                                mood:data.list[i].weather[0].main,
                                weathermoodIcon:data.list[i].weather[0].icon,
                                Humidity:data.list[i].main.humidity,
                                City:data.city.name,
                                Country:data.city.country,
                                Lat:data.city.coord.lat,
                                Lon:data.city.coord.lon,
                                Pressure:data.list[i].main.pressure,
                                WindSpeed:data.list[i].wind.speed
                            }
                        );  
                }
            }
            setTempInfo(arr);
            let obj={
                Temp:arr[0].Temp,
                City:arr[0].City,
                Country:arr[0].Country,
                Lat:arr[0].Lat,
                Lon:arr[0].Lon,
                Mood:arr[0].mood,
                Humidity:arr[0].Humidity,
                Pressure:arr[0].Pressure,
                WindSpeed:arr[0].WindSpeed,
                weathermoodIcon:arr[0].weathermoodIcon
            };
            setPassCurrentData(obj);
        }catch(error){
            console.log(error);
        }
    };
    useEffect(() => {
        getWeatherInfo();
    },[]);
    return(
        <Fragment>
        <Nav />
            <div className={classes.container}>
                <div className={classes.header}>
                    <Input value={SearchValue} onChange={SearchValueHandler} onClick={getWeatherInfo}/>
                </div>
                <CurrentInfo TodaysWeatherInfo={PassCurrentData}/>
                <FutureForecast TempInfo={TempInfo}  AllData={PassAllData} />
            </div>
        </Fragment>
    );
};


export default Header;