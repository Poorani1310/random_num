import './App.css';
import Random from './components/Random';
import { useState } from 'react';

function App() {
  
  const [randnum, setRandnum] = useState(0);

  const gen_random = () => {
    console.log('In gen_random 1');
    setRandnum(Math.floor(Math.random() * 100));
    console.log('In gen_random 2');
  }
 
  return (
    <div className="App">
      <Random randnum={randnum} gen_random={gen_random}/>
    </div>
  );
}

export default App;
