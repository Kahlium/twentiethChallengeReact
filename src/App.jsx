// Todo: Bring in the required import from 'react-router-dom'
import {  } from 'react-router-dom';
import Nav from './components/Nav';
import Header from './components/UI/Header'
import Footer from './components/UI/Footer'

function App() {
  return (
    <>
    <Header/>
      <Nav />
        <Outlet />
        <Footer/>
    </>
  );
}

export default App;
