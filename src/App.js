import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/mainpage/MainPage';
import Converter from './components/Converter/Converter';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/converter' element ={<Converter/>}/>
      </Routes>
    </>
  );
}

export default App;