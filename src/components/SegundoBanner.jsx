import React from 'react'

export const SegundoBanner = () => {
  return (
    <div id="SegundoBanner" className="SegundoBanner">
      <div className='SegundoBannerCards'>
        <h1>INGREDIENTES DE PRIMERA</h1>
         <hr/>

        <p>Nos abastecemos de productores locales, seleccionando frutas y verduras orgánicas de estación.</p>
      </div>
      
      <div className='SegundoBannerCards'>
        <h1>ARTE A LA LEÑA</h1>
         <hr/>
        <p>Nuestros fuegos se preparan con leña siguiendo las antiguas tradiciones gauchas.</p>
      </div>
     
      <div className='SegundoBannerCards'>
        <h1>FUEGOS VEGANOS</h1>
         <hr/>
        <p>La propuesta vegana es ideal para quienes siguen una dieta basada en plantas y desean sabores únicos.</p>
      </div>
    </div>
  )
}
