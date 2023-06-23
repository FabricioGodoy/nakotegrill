import React from 'react'
import fotoAsador from '../../public/img/asado/asado2.jpg'

export const FifthBanner = () => {
  return (
    <div id='FifthBanner' className='FifthBanner'>
        <h1>NUESTRA COCINA</h1>
        <div className='containerDetailFifthBanner'>        
            <p>Nos enorgullece ofrecer a nuestros clientes carnes de la mejor calidad. Trabajamos con proveedores cuidadosamente seleccionados para asegurarnos de que cada corte sea fresco y delicioso. Además, utilizamos nuestras técnicas de asado argentino para preparar parrilladas únicas que no encontrarás en ningún otro lugar. Nuestro equipo está compuesto por expertos parrilleros que han perfeccionado su técnica durante años. Utilizan sólo los mejores ingredientes naturales y un fuego ardiente para cocinar las carnes hasta el punto perfecto. El resultado es una carne tierna, jugosa y llena de sabor. Ofrecemos una amplia variedad de cortes, desde bifes hasta costillas y chorizo criollo. Todos ellos son servidos con guarniciones tradicionales como chimichurri, escalibada, ensalada criolla o ensalada mixta argentina.</p>
            <img src={fotoAsador} alt='banner' className='imgBannerAsador'/>
        </div>
    </div>
  )
}
