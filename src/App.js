import './App.css';
import Products from './Hooks/Products';
import Nav from './components/Nav';
import Logas from './components/Logas';

function App() {
  return (
    <div className='App'>
      <div className='nav containeris'>
        <Logas />
        <Nav />
      </div>

      <div className='container'>
        <Products />
      </div>
    </div>
  );
}

export default App;
