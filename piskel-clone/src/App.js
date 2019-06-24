import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Tools from './components/tools/tools'
import Frame from './components/frames/frame';
import MainCanvas from './components/canvas/mainCanvas';
import Preview from './components/preview/preview';

function App() {
  return (
    <div className="App" >
      <Header />
      <div className="container-fluid">
        <div className="row">

          <Tools />
          <div className="col-11 column-wrap">
            <Frame />
            <MainCanvas />
            <Preview />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;