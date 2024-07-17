
import './App.css';
import Navigation from './components/Navigation';
import { data } from './constant/data';

function App() {
  return (
    <div >
   <Navigation data={data}/>
    </div>
  );
}

export default App;
