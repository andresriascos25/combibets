import React from 'react'
import './styles/combi1.css'

const Combi1 = () => {
  return (
    <div className='combi1-container'>
      <h1>BETPLAY</h1>
        <div>
          <div className='combi1-container__bet'>
            <h3>FUTBOL</h3>
            <div>
              <p>America vs Cali</p>
              <p>Final del partido</p>
              <p>G1</p>
            </div>
            <h3>2,2</h3>
          </div>
          <div className='combi1-container__bet'>
            <h3>FUTBOL</h3>
            <div>
              <p>Millonarios vs Tolima</p>
              <p>Mas / Menos</p>
              <p>G1</p>
            </div>
            <h3>2,2</h3>
          </div>
          <div>
            <div>Importe: $ 2.000.000</div>
            <div>Cuota Total: 4,4</div>
          </div>
        </div>
        <div>PAGO POTENCIAL: $ 8.000.000</div>
    </div>
  )
}

export default Combi1