import React from 'react'
import fotoAsador from '../../public/img/asado/asado2.jpg'

export const QuintoBanner = () => {
  return (
    <div id='QuintoBanner' className='QuintoBanner'>
        <h1>NUESTRA COCINA</h1>
        <div className='containerDetailQuintoBanner'>
            <p>Ofrecemos carnes seleccionadas y técnicas de asado argentino que realzan su sabor. Nuestro equipo de parrilleros prepara cada corte al punto justo y lo acompaña con guarniciones tradicionales como chimichurri y ensaladas frescas.</p>
            <img src={fotoAsador} alt='banner' className='imgBannerAsador'/>
        </div>
    </div>
  )
}
