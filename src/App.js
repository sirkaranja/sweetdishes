import logo from './logo.svg';
import './App.css';
import  DisplayFood from './components/foodDisplay';
import NavBar from './components/navbar';
 import PlaceOrder from './components/order';
function App() {
  return (
    <div className="App">
      < NavBar />
      <div className="about">
      <img src="https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width="100%"  height="700px"/>
      <h3>Get to order your Food from Us</h3>
      </div>
      
      < DisplayFood />
      {/* <PlaceOrder /> */}
    </div>

  );
}

export default App;
