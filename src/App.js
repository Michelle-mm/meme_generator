import './App.css';
import {Headers} from './components/Headers';
import {Meme} from './components/Meme';
import {Footer} from './components/Footer';

function App() {

  return (
    <div className="App">
      <Headers />
      <Meme />
      <Footer/>
    </div>
  );
}

export default App;
