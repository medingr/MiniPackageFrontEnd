import React from 'react';

import './App.css';
import {Button} from "antd";
import MainPackage from "./components/MainPackage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <div>
           <Button>All</Button>
           <Button>Reservation</Button>
           <Button>PickUp</Button>
           <Button>Not Reserved</Button>
           <MainPackage/>
       </div>
      </header>
    </div>
  );
}

export default App;
