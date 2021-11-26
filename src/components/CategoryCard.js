import React from 'react'
import '../styles/CategoryCard.css'

function CategoryCard(props) {
    return (
        <div className='category-card'>
            <img src={props.image} alt=''/>
            <div className='category-title'>{props.title}</div>
            <div className='category-desc'>{props.desc}</div>
        </div>
    )
}

export default CategoryCard
