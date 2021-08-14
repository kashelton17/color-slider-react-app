import './App.css';
import Slider from './components/Slider'
import Output from './components/Output'


function App() {
  return (
    <div className="App">
      <header>Color Browser</header>
      <Slider />
      <Slider />
      <Slider />
      <Output />
    </div>
  );
}

export default App;
