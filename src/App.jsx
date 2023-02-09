
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Principal from './components/Principal/Principal'

function App() {


  return (
    <div className="App">
      {/* <Principal/> */}
      <HashRouter>
        <Routes>
          <Route path='/principal' element={<Principal/>}/>
          <Route path='/info'/>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
