import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { About } from './components/About';
import { Projects } from './components/Projects';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header style={{height: "50vh"}}/>
      </header>
      <body>
        <About />
        <Projects />
      </body>
    </div>
  );
}

export default App;
