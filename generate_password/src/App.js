import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer.js';
import Header from './components/header/Header.js';

function App() {
  return(
    <>
      <Header />
        <Outlet />
      <Footer />
    </>
  );
}

export default App;