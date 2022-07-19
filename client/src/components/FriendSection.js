import React from 'react'
import '../App.css'
import { Button } from './Button'
import './FriendSection.css'

export default function FRIENDS() {
    return (
        <div className='friend-container'>
            <h1 className='family'>
                FRIENDS</h1>
            
            <div className='family-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    goto='/write'
                    >
                    WRITE
                </Button>
            </div>
        </div>
    );
}