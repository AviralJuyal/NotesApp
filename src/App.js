import './App.css';
import TextArea from './components/TextArea';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  const [Data, setData] = useState([]);

  return (
    <>
    
    <Navbar />
    <TextArea data = {Data} setData = {setData}/>
    
    </>
  );
}

export default App;
