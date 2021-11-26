import React from 'react'
import '../styles/DestinationCard.css'
import icon from '../assets/near-me.png'

function DestinationCard(props) {
    return (
        <div className='destination-card'>
            <img src={props.image} alt='' className='image'/>
            <div className='destination-card-contents'>
                <div className='destination-and-price'>
                    <div className='destination'>
                        {props.destination}
                    </div>
                    <div>{props.price}</div>
                </div>
                <div className='trip-days'><img src={icon} alt='' className='icon'/> {props.days} Days Trip</div>
            </div>
        </div>
    )
}

export default DestinationCard
