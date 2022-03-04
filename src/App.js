import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ShowPagePokemon from './components/ShowPagePokemon';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PokemonDetails from './components/PokemonDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<ShowPagePokemon />} />
          <Route path='/pokemon/:id' element={<PokemonDetails />} />
        </Routes>
      </BrowserRouter>

      <ToastContainer />
    </div>
  );
}

export default App;
