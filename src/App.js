import logo from './logo.svg';
import './App.css';

import { SearchBar } from './features/search/SearchBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <SearchBar />
        </div>
      </header>
    </div>
  );
}

export default App;
