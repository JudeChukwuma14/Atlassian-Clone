import React from 'react'
// import { Work } from './Work'
import Hero from '../Hero'
import { Teams } from './Teams'
import { Essentials } from './Essentials'
import { Careers } from './Careers'
import { Footer } from './Footer'
import { Paper } from './Paper'

export const Landingpage:React.FC = () => {
  return (
    <div>
        <Hero />
        <Paper />
        
        <Teams />
        <Essentials />
        <Careers />
        <Footer />
    </div>
  )
}
