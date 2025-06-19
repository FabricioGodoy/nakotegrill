import React from 'react'

export const SegundoBanner = () => {
  return (
    <div id="SegundoBanner" className="SegundoBanner">
      <div className='SegundoBannerCards'>
        <h1>INGREDIENTES PREMIUM</h1>
         <hr/>

        <p>Seleccionamos productos frescos de temporada de productores locales para garantizar la mejor calidad.</p>
      </div>
      
      <div className='SegundoBannerCards'>
        <h1>COCINA A LEÑA</h1>
         <hr/>
        <p>Nuestros fuegos se alimentan con leña, respetando la auténtica tradición gaucha.</p>
      </div>
     
      <div className='SegundoBannerCards'>
        <h1>OPCIONES VEGANAS</h1>
         <hr/>
        <p>Nuestra propuesta vegana ofrece sabores increíbles cocinados al fuego, ideales para cualquier evento.</p>
      </div>
    </div>
  )
}
