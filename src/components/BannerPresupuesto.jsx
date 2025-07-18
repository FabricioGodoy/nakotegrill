import React from 'react'
import iconoGmail from '../../public/img/iconos/gmail.png';
import iconoWhatsapp from '../../public/img/iconos/whatsapp.png';

export const BannerPresupuesto = () => {
  return (
    <div id='BannerPresupuesto' className='BannerPresupuesto'>
        
        <div className='primerContainerBannerPresupuesto'>
            <h1> SOLICITÁ TU PRESUPUESTO</h1>
          
            <div className='containerIconContact'>
                <a className='iconContactoPresupuesto' href="mailto:ignaciodiazguinazu@gmail.com?subject=Presupuesto para Evento"  target="_blank">
                    <img src={iconoGmail} alt="Gmail"/>
                </a>
                <a className='iconContactoPresupuesto' href="https://wa.me/34662021515"  target="_blank">
                    <img src={iconoWhatsapp} alt="Whatsapp"/>
                </a>
            </div>
        </div>
        
        <div className='segundoContainerBannerPresupuesto'>        
            <h4>Contactanos indicando:</h4>
            <ul>
                <li>- Nombre</li><li>- Teléfono</li><li>- Fecha</li> <li>- Tipo de evento</li> <li>- Cantidad de invitados</li><li>- ¿Menú vegetariano o vegano? ¿Cuántos?</li>
            </ul>
            
        </div>

    </div>
  )
}
