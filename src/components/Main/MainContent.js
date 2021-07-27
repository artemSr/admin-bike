import React from "react";
import BikeList from "./BikeList";
import FormData from "./FormData";
import Statistics from "./Statistics";

export default function MainContent({bikes}){
    return(
        <main>
            <div>
                <BikeList bikes={bikes} />
            </div>
            <div className={'vertical-divider'}/>
            <div>
                <FormData />
                <Statistics bikes={bikes}/>
            </div>
        </main>
    )
}