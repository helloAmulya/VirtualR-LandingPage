import { useState } from 'react'

import Navbar from './components/Navbar'
import './index.css'
import { HeroSection } from './components/HeroSection'
import { FeatureSection } from './components/FeatureSection'
import { Workflow } from './components/Workflow'

function App() {

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection/>
        <Workflow/>
      </div>
    </>
  )
}

export default App
