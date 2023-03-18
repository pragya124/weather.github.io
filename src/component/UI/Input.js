import React,{Fragment} from "react";
import classes from './Input.module.css';



const Input=(props)=>{
    return(
        <Fragment>
            <div className={classes['header-inner']}>
                <input type="search" placeholder="Search..." autoFocus id="search" 
                    className={classes.search} value={props.value} onChange={props.onChange}/>
                <button className={classes['search-button']} type="button" onClick={props.onClick}>Search</button>
            </div>
        </Fragment>
    );
};

export default Input;