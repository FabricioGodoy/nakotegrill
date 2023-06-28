import React from 'react'
import banner from '../../public/img/asado/asado3.jpg'

export const CuartoBanner = () => {
  return (
    <div id='CuartoBanner' className='CuartoBanner'>
        <p className='paraphCuartoBanner'>
        Si está buscando una experiencia gastronómica única y memorable, FUEGOS & BRASAS es la opción perfecta para usted. Esta empresa se especializa en la preparación de comida al aire libre, utilizando la técnica del asado argentino para crear platos deliciosos y llenos de sabor.
      <br/>
      <br/>
        Con su equipo experto y su pasión por los ingredientes frescos y de alta calidad, FUEGOS & BRASAS ofrece una experiencia culinaria inolvidable. Ya sea que esté planeando una boda, una fiesta de cumpleaños o cualquier otro evento especial, su cocina al aire libre es la opción perfecta para crear un ambiente único y memorable. 
        Si está buscando una experiencia gastronómica emocionante y única, no busque más allá de FUEGOS & BRASAS. Su cocina al aire libre es la elección perfecta para eventos únicos e inolvidables.
        </p>
    
        <img src={banner} alt='banner' className='bannerThirdBanner'/>
    </div>
  )
}
