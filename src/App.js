import logo from './logo.svg';
import './App.css';
import  DisplayFood from './components/foodDisplay';
import NavBar from './components/navbar';

function App() {
  return (
    <div className="App">
      < NavBar />
      < DisplayFood />
    </div>

  );
}

export default App;
