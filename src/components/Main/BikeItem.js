import React from "react";


export default function BikeItem({bike}){
    const classes = [];
    if (bike.status === 'busy'){
        classes.push('busy')
    }
    else if(bike.status === 'unavailable'){
        classes.push('unavailable')
    }
    return(
        <li className={classes.join(' ')}>
            <div>
                <p className={classes.join(' ')}><strong className={classes.join(' ')}>{bike.name.toUpperCase()}</strong>&nbsp;&ndash;&nbsp;{bike.type.toUpperCase()} ({bike.color.toUpperCase()})</p>
                <p className={`id ${classes.join(' ')}`}>ID: {bike.id}</p>
                <div className={'status-wrapper'}>
                    <p>STATUS:</p>
                    <select value={bike.status}>
                        <option value="available">Available</option>
                        <option value="busy">Busy</option>
                        <option value="unavailable">Unavailable</option>
                    </select>
                </div>
            </div>
            <div>
                <h1 className={classes.join(' ')}>{bike.price}.</h1>
            </div>
        </li>
    )
}