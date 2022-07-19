import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline']; //css btn classes
const SIZES = ['btn--medium', 'btn--large'];
const LINKS = ['/register', '/login', '/shared', '/write', '/?cat=family','/'];

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize,
    goto
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle 
    : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize)
    ? buttonSize 
    : SIZES[0];

    const checkGoto= LINKS.includes(goto)
    ? goto
    : LINKS[0];

    return (
        <Link to={checkGoto} className='btn-mobile'>
            <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            >
                {children}
            </button>
        </Link>
    )
}