import React from "react";
import BikeItem from "./BikeItem";

export default function BikeList({bikes}){
    return(
        <ul>
            {bikes.map(bike => {
                return <BikeItem bike={bike} />
            })}
        </ul>
    )
}