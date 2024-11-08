import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Signup from './pages/Signup';

function App() {
  return (
    <Routes>
      <Route
        Component={Signup}
        path='/signup'
      />
      <Route
        Component={Home}
        path='/'
      />
    </Routes>
  );
}

export default App;
