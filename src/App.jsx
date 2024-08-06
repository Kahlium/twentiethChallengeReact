// Todo: Bring in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/UI/Footer'

function App() {
  return (
    <>
      <Header />
        <Outlet />
        <Footer/>
    </>
  );
}

export default App;
