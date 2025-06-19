import React from 'react'
import fotoAsador1 from '../../public/img/asado/asado1.jpg'
import fotoAsador2 from '../../public/img/asado/asado2.jpg'
import fotoAsador3 from '../../public/img/asado/asado3.jpg'

export const SextoBanner = () => {
  return (
    <div id='SextoBanner' className='SextoBanner'>
      
        <article name="carrousel" id="carrouselImagenesSextoBanner" className='carrouselImagenesSextoBanner'> 
           
            <img src={fotoAsador2} alt='Parrilla vegana' className='fotoCarrouselAsadoSextoBanner' />
      
        <h1 className='h1SextoBanner'>COCINA DE FUEGOS VEGANA</h1>
          
            <img src={fotoAsador2} alt='Parrilla vegana' className='fotoCarrouselAsadoSextoBanner' />
        
        </article>

        <div className='containerDetailSextoBanner'>
            <p>Nuestra propuesta vegana combina verduras orgánicas con el sabor del fuego para lograr platos llenos de identidad. Desde entradas hasta postres, cada bocado es saludable y delicioso. Muchas de nuestras recetas son libres de gluten y otros alérgenos. ¡Descubrí la variedad de sabores que tenemos preparada para vos!</p>
        </div>
        
    </div>
  )
}
