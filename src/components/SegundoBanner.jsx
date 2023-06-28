import React from 'react'

export const SegundoBanner = () => {
  return (
    <div id="SegundoBanner" className="SegundoBanner">
      <div className='SegundoBannerCards'>   
        <h1>PRODUCTOS DE CALIDAD</h1>
         <hr/>

        <p>Nuestro abastecimiento proviene de productores locales seleccionando fruta y verdura orgánica de estación.</p>
      </div>
      
      <div className='SegundoBannerCards'>   
        <h1>COCINA A LEÑA</h1>
         <hr/>
        <p>NUESTROS FUEGOS Y BRASAS SE REALIZAN CON LEÑA SIGUIENDO LAS ANTIGUAS TRADICIONES GAUCHAS.</p>
      </div>
     
      <div className='SegundoBannerCards'>  
        <h1>FUEGOS Y BRASAS VEGAN</h1>
         <hr/>
        <p>Nuestra cocina de fuegos vegana es perfecta para aquellos que siguen una dieta basada en plantas y buscan opciones deliciosas y saludables.</p>
      </div>
    </div>
  )
}
