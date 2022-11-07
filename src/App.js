import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/Home';
import MemoComp from './page/memo';
function App() {
  return (
    <div className="App">
      <h3 className='alltitle'>React Router APP(1107)</h3>
      <br/>
      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='/memo' element={<MemoComp />} />

      </Routes>
      
    
    </div>
  );
}

export default App;
