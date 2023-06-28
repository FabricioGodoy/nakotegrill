import React from 'react'
import { PrimerBanner } from './components/PrimerBanner'
import { SegundoBanner } from './components/SegundoBanner'
import { TercerBanner } from './components/TercerBanner'
import { CuartoBanner } from './components/CuartoBanner'
import { QuintoBanner } from './components/QuintoBanner'

export const HomePage = () => {
  
  return (
    <div>
      <PrimerBanner/>
      <SegundoBanner/>
      <TercerBanner/>
      <CuartoBanner/>
      <QuintoBanner/>

    </div>
  )
}
  