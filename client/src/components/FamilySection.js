import React from 'react'
import '../App.css'
import { Button } from './Button'
import './FamilySection.css'

export default function Family() {
    return (
        <div className='family-container'>
            <h1 className='family'>
                FAMILY</h1>
            
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