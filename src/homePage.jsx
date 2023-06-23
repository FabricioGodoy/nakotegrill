import React from 'react'
import { FirstBanner } from './components/FirstBanner'
import { SecondBanner } from './components/SecondBanner'
import { ThirdBanner } from './components/ThirdBanner'
import { FourthBanner } from './components/Fourthbanner'
import { FifthBanner } from './components/FifthBanner'

export const HomePage = () => {
  
  return (
    <div>
      <FirstBanner/>
      <SecondBanner/>
      <ThirdBanner/>
      <FourthBanner/>
      <FifthBanner/>

    </div>
  )
}
  