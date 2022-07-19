import React, { useContext } from 'react';
import '../App.css';
import { Context } from '../context/Context';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  const {user, dispatch} = useContext(Context);

  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>LAST MOMENT</h1>
      <p>Don't let it cascade</p>
      <div className='hero-btns'>
        {user ? (
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            goto='/write'
          >
            SHARE
          </Button>
        ) : (
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            goto='/register'
          >
            REGISTER
          </Button>
        )}
        
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          goto='/shared'
        >
          OTHERS EPILOGUE <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;