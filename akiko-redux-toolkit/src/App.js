import './App.css';
import Home from './Screen/Home';
import {useSelector} from 'react-redux'
function App() {

  const home = useSelector(state => state.screen)
  return (
    <div className="App">
      <header className="App-header">
       <Home />
      </header>
    </div>
  );
}

export default App;
