import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Showcase from './components/Showcase/Showcase';
import SingleProduct from './components/SingleProduct/SingleProduct';
import Service from './components/Service/Service';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <div>
            <header>
              <Header />
            </header>
            <main>
              <Home />
              <About />
              <Service />
              <Contact />
            </main>
            <footer>
              <Footer />
            </footer>
          </div>
        } />

        <Route path='/product/:productType' element={<Showcase />} />
        <Route path='/product/:productType/:productName' element={<SingleProduct />} />
      </Routes>
    </div>
  );
}

export default App;
