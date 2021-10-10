import './App.css';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Header from './components/Header';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Home />
        <About />
        <Team />
        <Services />
        <Footer />
      </div>
    </div>
  );
}

export default App;
