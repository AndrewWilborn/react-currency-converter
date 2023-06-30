import logo from './logo.svg';
import './App.css';
import Converter from './components/Converter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Currency Converter</h1>
      </header>
      <Converter/>
      <Footer/>
    </div>
  );
}

export default App;
