import React from 'react'
import fotoAsador1 from '../../public/img/asado/asado1.jpg'
import fotoAsador2 from '../../public/img/asado/asado2.jpg'
import fotoAsador3 from '../../public/img/asado/asado3.jpg'

export const SextoBanner = () => {
  return (
    <div id='SextoBanner' className='SextoBanner'>
      
        <h1 className='h1SextoBanner'>COCINA VEGANA AL FUEGO</h1>

        <article name="carrousel" id="carrouselImagenesSextoBanner" className='carrouselImagenesSextoBanner'>

            <img src={fotoAsador1} alt='fotoasador' className='fotoCarrouselAsadoSextoBanner' />
            <img src={fotoAsador2} alt='fotoasador' className='fotoCarrouselAsadoSextoBanner' />
            <img src={fotoAsador3} alt='fotoasador' className='fotoCarrouselAsadoSextoBanner' />

        </article>

        <div className='containerDetailSextoBanner'>
            <p>Propuesta vegana con ingredientes orgánicos y sabores innovadores. Platos al fuego aptos para diferentes dietas e intolerancias.</p>
        </div>
        
    </div>
  )
}
