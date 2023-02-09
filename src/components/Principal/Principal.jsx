import React from 'react'
import Surebets from './Surebets'
import './styles/Principal.css'

const Principal = () => {
  return (
    <div className='container-pricipal'>
      <div className='tittle'>
        <h1> CombiBets</h1>
      </div>
      <div className='sections'>
      <section className='section-1 '>
        <div>
          <h2>Inversión total</h2>
          <input type="number" />
          <button>OK</button>
          <div>
            <button>Crear filtro</button>
          </div>
        </div>
        <div>
          <div>
            <h3>Deporte</h3>
            <ul>
              <li>Futbol</li>
              <li>Tennis</li>
            </ul>
          </div>
          <div>
            <h3>Casas de apuestas</h3>
            <ul>
              <li>Betplay</li>
              <li>1xBet</li>
            </ul>
          </div>
        </div>
      </section>
      <section className='section-2'>
        <div>
        <Surebets/>
        </div>
      </section>
      </div>
    </div>
  )
}

export default Principal
