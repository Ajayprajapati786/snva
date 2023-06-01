import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses';
import Addexpenses from './components/Addexpenses';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <Addexpenses />
        </div>
        <div className="col-md-8">
          <Expenses />
        </div>
      </div>
    </div>
  );
}

export default App;
