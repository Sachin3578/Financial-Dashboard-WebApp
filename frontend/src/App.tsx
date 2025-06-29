import './App.css'
import Landing from './modules/Dashboard/index';
import {Routes, Route} from 'react-router-dom';
import LoginPage from './modules/loginPage';
import ProtectedRoute from './components/Dashboard/ProtectedRoute';

function App() {

  return (
    <Routes>
       <Route path="/" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Landing />
            </ProtectedRoute>
          }
        />
    </Routes>
  )
}

export default App
