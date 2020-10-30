import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import logo from './face_recognition.svg';

const Logo = () => {
    return (
       <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2 logo-container" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
            <div className="Tilt-inner pa3">
                 <img alt = 'logo' src = {logo}/> 
            </div>
            </Tilt>
       </div>
    );
}

export default Logo;