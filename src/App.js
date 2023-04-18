import logo from './logo.svg';
import './App.css';
import  DisplayFood from './components/foodDisplay';
import NavBar from './components/navbar';
 import PlaceOrder from './components/order';
function App() {
  return (
    <div className="App">
      < NavBar />
      < DisplayFood />
      {/* <PlaceOrder /> */}
    </div>

  );
}

export default App;
