import React from 'react'
import Combi1 from './combis/Combi1'
import './styles/infoBets.css'

const InfoBets = () => {
  return (
    <div className='infoBets-Container'>
      <section className='infoBets-Container__section1'>
        <div>APUESTA #1</div>
        <div>APUESTA #2</div>
        <div>APUESTA #3</div>
        <div>APUESTA #4</div>
      </section>
      <section>
        <Combi1 />
      </section>
    </div>
    
  )
}

export default InfoBets