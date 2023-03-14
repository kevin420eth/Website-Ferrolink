import './App.css';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Home />
        <About />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
