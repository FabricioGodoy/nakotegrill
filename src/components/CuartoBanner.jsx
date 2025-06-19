import React from 'react'
import banner from '../../public/img/asado/asado3.jpg'

export const CuartoBanner = () => {
  return (
    <div id='CuartoBanner' className='CuartoBanner'>
        <p className='paraphCuartoBanner'>
        Si buscás una experiencia gastronómica distinta y memorable, FUEGOS & BRASAS es tu mejor elección. Nos especializamos en la cocina a cielo abierto, aplicando el tradicional asado argentino para lograr sabores irresistibles.
      <br/>
      <br/>
        Nuestro equipo, apasionado por los ingredientes frescos y de calidad, garantiza una experiencia culinaria inolvidable. Ya sea una boda, un cumpleaños o cualquier celebración, nuestra cocina al aire libre crea un ambiente singular.
        Si querés sorprender a tus invitados, FUEGOS & BRASAS es la opción ideal para encuentros inolvidables.
        </p>

        <img src={banner} alt='Asado al aire libre' className='bannerTercerBanner'/>
    </div>
  )
}
