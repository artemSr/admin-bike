import React from "react";

export default function Statistics({bikes}){
    let count = 0;
    bikes.map(bike =>{
        if (bike.status === 'available'){
            count++
        }
        return count;
    })
    return(
        <div className={'statistics-wrapper'}>
            <h1>STATISTICS</h1>
            <p>Total Bikes: <strong>{bikes.length}</strong></p>
            <p>Available Bikes : <strong>{count}</strong></p>
            <p>Booked Bikes: <strong>0</strong></p>
            <p>Average bike cost: <strong>0.00</strong> UAH/hr.</p>
        </div>
    )
}