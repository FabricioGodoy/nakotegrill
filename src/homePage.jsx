import React from 'react'
import { PrimerBanner } from './components/PrimerBanner'
import { SegundoBanner } from './components/SegundoBanner'
import { TercerBanner } from './components/TercerBanner'
import { CuartoBanner } from './components/CuartoBanner'
import { QuintoBanner } from './components/QuintoBanner'
import { SextoBanner } from './components/SextoBanner'
import { BannerPresupuesto } from './components/BannerPresupuesto'

export const HomePage = () => {
  
  return (
    <div>
      <PrimerBanner/>
      <SegundoBanner/>
      <TercerBanner/>
      <CuartoBanner/>
      <QuintoBanner/>
      <SextoBanner/>
      <BannerPresupuesto/>

    </div>
  )
}
  