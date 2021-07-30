import React from "react";
import BikeItem from "./BikeItem";

export default function BikeList({bikes,changeBikeStatus,deleteBike}){
    return(
        <ul>
            {bikes.map(bike => {
                return <BikeItem
                    bike={bike}
                    key={bike.id}
                    changeBikeStatus={changeBikeStatus}
                    deleteBike={deleteBike} />
            })}
        </ul>
    )
}