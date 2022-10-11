import React from 'react';
import logo from './logo.svg';
import './App.css';
import { flexbox, width } from '@mui/system';

function App() {
  return (
    <div style={{height: "100%", width: "100%", position: "absolute"}}>
      <div style={{position: "relative", height: "100%", width: "100%", flex: 1, flexDirection: "column", backgroundColor: "rgb(248,250,252)"}}>
        <div style={{position: "relative", height: "30%", }}>
        <img src={process.env.PUBLIC_URL + "US-CBP Logo.png"} alt="image" />
        </div>
        <div style={{position: "relative", height: 0.5, backgroundColor: "rgb(100,116,139)", marginTop: 4}}/>
        <div style={{position: "relative", height: "40%", backgroundColor: "rgb(248,250,252)"}}>
          Please enter Citizens SS# 
        </div>
        <div style={{position: "relative", height: 0.5, backgroundColor: "rgb(100,116,139)", marginBottom: 2}}/>
        <div style={{position: "relative", height: "30%"}}>
          <img src={process.env.PUBLIC_URL + "NTAS Bulletin.png"} alt="image" />
        </div>
      </div>
    </div>
  );
}

export default App;
