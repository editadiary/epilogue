import React from 'react'
import '../App.css'
import { Button } from './Button'
import './PersonalSection.css'

export default function Personal() {
    return (
        <div className='personal-container'>
            <h1 className='family'>
                PERSONAL</h1>
            
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