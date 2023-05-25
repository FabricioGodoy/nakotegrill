import React from 'react'
import logo from '../../public/img/logos/tacologo.webp';
import './style.css';

export const FirstBanner = () => {
  return (
    <div id="FirstBanner" className="FirstBanner">
          <img className="imgLogo" src={logo} />
            <h1 className='titulo'>titulo o resto de logo</h1>
    </div>
  )
}
