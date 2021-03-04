import logo from './logo.svg';
import Logo from './kitten.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} className="App-logo" alt="logo" />
        <p>
          My name is Ibnat Iqbal and I'm going to master React!
        </p>
        <a
          className="App-link"
          href="https://github.com/ibnatiqbal/ibnatiqbal.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Me Out!
        </a>
      </header>
    </div>
  );
}

export default App;
