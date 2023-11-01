import "./App.css"

import { Visualizer } from "./features/components/Visualizer"
import { SearchBar } from "./features/components/SearchBar"

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

export default App
