import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Archives</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                        src="images/img-9.jpg"
                        text="To my mom..."
                        label='Family'
                        path='/family'
                    />
                    <CardItem
                        src="images/img-8.jpg"
                        text="To my best friend xx..."
                        label='Friends'
                        path='/friends'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                        src="images/img-7.jpg"
                        text="My happiest moment..."
                        label='Personal'
                        path='/personal'
                    />
                    <CardItem
                        src="images/img-6.jpg"
                        text="My goal was... Did I achieved it?"
                        label='Personal'
                        path='/personal'
                    />
                    <CardItem
                        src="images/img-5.jpg"
                        text="My car goes to..."
                        label='assets'
                        path='/personal'
                    />
                </ul>
            </div>
        </div>   
    </div>
  )
}

export default Cards