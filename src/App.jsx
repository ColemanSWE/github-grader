import './App.css';
import { Dashboard } from "./Components/Dashboard";
import { URLBar } from './Components/URLBar/URLBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <URLBar />
      </header>
    </div>
  );
}

export default App;
