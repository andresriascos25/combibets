
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import InfoBets from './components/InfoBets'
import Principal from './components/Principal/Principal'

function App() {

  return (
    <div className="App">
      {/* <Principal/> */}
      <HashRouter>
        <Routes>
          <Route path='/' element={<Principal/>}/>
          <Route path='/info' element={<InfoBets />}/>
        </Routes>
      </HashRouter>
      
    </div>
  )
}

export default App
