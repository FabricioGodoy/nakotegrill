import React from 'react'
import banner from '../../public/img/asado/asado3.jpg'

export const CuartoBanner = () => {
  return (
    <div id='CuartoBanner' className='CuartoBanner'>
        <p className='paraphCuartoBanner'>
        Si buscas una experiencia gastronómica diferente, Fuegos & Brasas es tu mejor opción. Nuestro equipo combina ingredientes frescos con el auténtico sabor del asado argentino para crear platos inolvidables.<br/><br/>
        Sorprende a tus invitados con nuestra cocina al aire libre y vive un evento único junto a nosotros.
        </p>
    
        <img src={banner} alt='banner' className='bannerTercerBanner'/>
    </div>
  )
}
