import logo from './logo.svg';
import './App.css';
import WeatherApp from './Component/WeatherApp';
import Footer from './Component/Footer';

function App() {
  return (
    <div className='app' >
      <WeatherApp />
      <Footer />
    </div>
  );
}

export default App;
