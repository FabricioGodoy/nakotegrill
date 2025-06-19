import React from 'react'
import logo from '../../public/img/logos/logo-fuego2.png';
import './style.css';

export const PrimerBanner = () => {
  return (
    <div id="PrimerBanner" className="PrimerBanner">
          <img className="imgLogo" src={logo} alt="Fuegos & Brasas" />
            <h1 className='titulo'>FUEGOS & BRASAS</h1>
            <h2 className='subTitulo'>COCINA DE FUEGOS</h2>
            <h4 className='subSubTitulo'>SERVICIO A DOMICILIO</h4>
    </div>
  )
}
