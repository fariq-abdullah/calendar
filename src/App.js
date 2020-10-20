import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { ApiProvider, useGet } from 'react-rest-api'

const Dates = () => {
  const { loading, result, error, } = useGet('gToH?date=20-10-2020')

  if (loading) {
    return 'loading ...'
  }

  if (error) {
    return error.toString()
  }

  return JSON.stringify(result, null, 2)
}

const resolveCallback = response => response.json()

function App() {

  const mystyle = {
    textAlign: "-webkit-center"
  };

  const [value, onChange] = useState(new Date());

  const [apiConfig, setApiConfig] = useState({
    url: 'http://api.aladhan.com/v1/',
    config: {
      headers: {
        'Content-Type': 'application/json'
      }
    },
    resolveCallback
  })

  return (
    <div style={mystyle}>
      <Calendar
        onChange={onChange}
        value={value}
      />
      <ApiProvider {...apiConfig} setConfig={setApiConfig}>
        <Dates />
      </ApiProvider>
    </div>
    
  );
}

export default App;
