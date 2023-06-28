import React from 'react'
import fotoAsador1 from '../../public/img/asado/asado1.jpg'
import fotoAsador2 from '../../public/img/asado/asado2.jpg'
import fotoAsador3 from '../../public/img/asado/asado3.jpg'

export const SextoBanner = () => {
  return (
    <div id='SextoBanner' className='SextoBanner'>
      
        <article name="carrousel" id="carrouselImagenesSextoBanner" className='carrouselImagenesSextoBanner'> 
           
            <img src={fotoAsador2} alt='fotoasador' className='fotoCarrouselAsadoSextoBanner' />
      
        <h1 className='h1SextoBanner'>COCINA DE FUEGOS VEGAN</h1>
          
            <img src={fotoAsador2} alt='fotoasador' className='fotoCarrouselAsadoSextoBanner' />
        
        </article>

        <div className='containerDetailSextoBanner'>
            <p>Nuestra cocina de fuegos vegana es perfecta para aquellos que siguen una dieta basada en plantas y buscan opciones deliciosas y saludables. Utilizamos verduras orgánicas, ingredientes frescos y de alta calidad para crear platillos veganos satisfactorios y sabrosos. Desde platos principales hasta entradas y postres.
            Además, nuestra cocina de fuegos vegana es ideal para aquellos con intolerancias alimentarias o alergias, ya que muchos de nuestros platillos son libres de gluten, soya y otros alérgenos comunes. ¡Descubre la deliciosa variedad de opciones disponibles en nuestra cocina de fuegos vegana hoy mismo!
            </p>
        </div>
        
    </div>
  )
}
