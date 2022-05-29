import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={handleSubmit}>
          <label>Enter your name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)} />
          </label>
          <input type="submit" />
        </form>
      </header>
    </div>
  );
}

export default App;
