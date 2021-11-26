import React from 'react'
import DestinationCard from '../components/DestinationCard'
import DestinationImage1 from '../assets/destination-1.png'
import DestinationImage2 from '../assets/destination-2.png'
import DestinationImage3 from '../assets/destination-3.png'

import '../styles/TopSelling.css'

function TopSelling() {
    return (
        <div className='top-selling'>
            <div className='heading'>Top Selling</div>
            <div className='punchline'>Top Destinations</div>
            <div className='destination-cards'>
                <DestinationCard image={DestinationImage1} destination={`Rome, Italy`} price={`$5,42k`} days={`10`}/>
                <DestinationCard image={DestinationImage2} destination={`Rome, Italy`} price={`$5,42k`} days={`10`}/>
                <DestinationCard image={DestinationImage3} destination={`Rome, Italy`} price={`$5,42k`} days={`10`}/>
            </div>
        </div>
    )
}

export default TopSelling
