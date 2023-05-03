import React from 'react';
import './App.css';
import Item from './components/Item';

function App() {
  const tempTitles = ['6시 기상', '헬스', '강의듣기', '일찍 자기'];
  return (
    <div className="App">
      {tempTitles.map((title, index) => (
        <Item title={title} key={index} />
      ))}
    </div>
  );
}

export default App;
