import './App.css';

import { SearchBar } from './features/search/SearchBar';
import { Visualizer } from './features/components/Visualizer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <SearchBar />
          <Visualizer />
        </div>
      </header>
    </div>
  );
}

export default App;
