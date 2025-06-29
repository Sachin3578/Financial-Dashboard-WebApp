import './App.css'
import Landing from './modules/Dashboard/index';
import {Routes, Route} from 'react-router-dom';

function App() {

  return (
    <Routes>
      <Route  path='/' element={<Landing/>}/>
    </Routes>
  )
}

export default App
