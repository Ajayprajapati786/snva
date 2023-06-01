import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses';
import Addexpenses from './components/Addexpenses';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const authentication = useSelector((state) => state.authentication.valuee);

  useEffect(() => {
    console.log(authentication);
  }, [authentication]);

  return (

    
    <Addexpenses/>
  );
}

export default App;
