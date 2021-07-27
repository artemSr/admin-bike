import React from 'react'
import PageHeader from "./components/PageHeader";
import PageFooter from "./components/PageFooter";
import MainContent from "./components/Main/MainContent";

function App(){

    const bikes = [
        {
            name: 'Marin BOBCAT TRAIL',
            type: 'trail',
            color: 'black',
            price: '19 981.00 UAH/hr',
            id: '11111',
            description: 'The Bobcat Trail family of trail hardtails is designed for beginners and MTB enthusiasts looking for modern geometry that will allow them to ride dynamically on forest trails. And the wheel diameter changing, depending on the size of the frame, will allow you to choose a bike for your height as accurately as possible.',
            status: 'available'
        },
        {
            name: 'Pride MARVEL 9.2',
            type: 'walking',
            color: 'yellow',
            price: '15 629.00 UAH/hr',
            id: '11112',
            description: 'Marvel 9.2 is the hobbyist of the mountain range Pride Bikes. This bike is perfect for active walks in city parks and country trails. It is also a great option for the first bike, because it is equipped with high quality and easy to maintain components.',
            status: 'available'
        },
        {
            name: 'Cannondale TRAIL',
            type: 'trail',
            color: 'green',
            price: '13 774.00 UAH/hr',
            id: '11113',
            description: 'The 20 "Cannondale TRAIL bike is a bright, versatile model that combines simplicity and strength of construction. Suitable for both city riding and walking on dirt roads. The size of the frame and wheels makes the bike comfortable for children, 110-130 cm tall.',
            status: 'busy'
        },
        {
            name: 'Marin BOBCAT TRAIL',
            type: 'trail',
            color: 'black',
            price: '19 979.00 UAH/hr',
            id: '11114',
            description: 'The Bobcat Trail family of trail hardtails is designed for beginners and MTB enthusiasts looking for modern geometry that will allow them to ride dynamically on forest trails. And the wheel diameter changing, depending on the size of the frame, will allow you to choose a bike for your height as accurately as possible.',
            status: 'busy'
        },
        {
            name: 'BMC UnReStricted',
            type: 'gravel',
            color: 'purple',
            price: '95 690.00 UAH/hr',
            id: '11115',
            description: 'The new UnReStricted FOUR 2020 gravel road from the Navy was created specifically for off-road conditions, it is ready to overcome any terrain and difficult tracks. The model will be appreciated by fans of three key riding styles: gravel racing, exciting cross-country rides and long touring.',
            status: 'unavailable'
        },

    ]

    return(
        <div className={'wrapper'}>
            <PageHeader />
            <MainContent bikes={bikes} />
            <PageFooter />
        </div>
    )
}

export default App