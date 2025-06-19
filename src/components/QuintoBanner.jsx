import React from 'react'
import fotoAsador from '../../public/img/asado/asado2.jpg'

export const QuintoBanner = () => {
  return (
    <div id='QuintoBanner' className='QuintoBanner'>
        <h1>NUESTRA COCINA</h1>
        <div className='containerDetailQuintoBanner'>
            <p>Nos enorgullece brindar carnes de primera línea. Trabajamos con proveedores seleccionados para asegurar cortes frescos y sabrosos. Nuestras técnicas de asado argentino resaltan cada sabor y crean parrilladas únicas. El equipo de parrilleros combina los mejores ingredientes y la intensidad del fuego para lograr una textura tierna y jugosa. Servimos una amplia variedad de cortes acompañados de chimichurri, escalibada o ensalada criolla.</p>
            <img src={fotoAsador} alt='Parrillero' className='imgBannerAsador'/>
        </div>
    </div>
  )
}
