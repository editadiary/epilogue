import React from 'react'
import '../App.css'
import { Button } from './Button'
import './AssetSection.css'

export default function Asset() {
    return (
        <div className='asset-container'>
            <h1 className='family'>
                Asset</h1>
            
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