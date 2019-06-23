import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Tools from './components/tools/tools'

function App() {
  return (
    <div className="App" >
      <Header />
      <div className="container-fluid">
        <div className="row">
          <Tools />

        </div>
      </div>
    </div>
  );
}

export default App;