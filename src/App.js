import logo from './logo.svg';
import './App.css';
import Add_visitors from './components/Add_visitors';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewAllVisitors from './components/ViewAllVisitors';

function App() {
  return (
   
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Add_visitors/>} />
        <Route path='/viewall' element={<ViewAllVisitors/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
