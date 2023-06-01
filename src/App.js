import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses';
import Addexpenses from './components/Addexpenses';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
// import Expenses from './components/Expenses';

function App() {
  const authentication = useSelector((state) => state.authentication.valuee);

  useEffect(() => {
    console.log(authentication);
  }, [authentication]);

  return (

    <>
    <Addexpenses/>

<Expenses/>
    </>
    
  );
}

export default App;
