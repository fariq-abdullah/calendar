import React from 'react';
import MyCalendar from './MyCalendar';

function App() {

  const mystyle = {
    textAlign: "-webkit-center"
  };

  return (
    <div style={mystyle}>
      <MyCalendar />
    </div>
    
  );
}

export default App;
