import React from 'react';
import logo from './logo.svg';
import './App.css';
import { flexbox, width } from '@mui/system';

function App() {
  return (

    <div style={{height: "100%", width: "100%", position: "absolute"}}>
      <div style={{position: "relative", height: "100%", width: "100%", flex: 1, flexDirection: "column", backgroundColor: "rgb(248,250,252)"}}>
        <div style={{position: "relative", height: "30%", }}>
        <img className="Test" src={process.env.PUBLIC_URL + "US-CBP Logo.png"} alt="image" />
        </div>
        <div style={{position: "relative", height: 0.5, backgroundColor: "rgb(100,116,139)", marginTop: 4}}/>
        <div style={{position: "relative", height: "40%", backgroundColor: "rgb(248,250,252)", textAlign: 'left'}}>
          <p className="Test3">
          Please enter Citizens SS:
            </p>
          <form>
            <input className ="Textbox" type="text" placeholder='XXX-XX-XXXX' />
          </form>  
          <form action="https://ttp.dhs.gov/">
            <button className="Button2">Login to Global Entry</button>
          </form>
          <form action="https://www.cbp.gov/">
            <button className="Button3">Go To Main Page</button>
          </form>
          <input className ="Button1" type="button"  value="GO" />
        </div>
        <div style={{position: "relative", height: 0.5, backgroundColor: "rgb(100,116,139)", marginBottom: 2}}/>
        <div style={{position: "relative", height: "30%"}}>
            <img className ="NTAS" src={process.env.PUBLIC_URL + "NTAS Bulletin.png"} alt="image" style={{width: "325px", margin: 20}} />
            <img src={process.env.PUBLIC_URL + "TextInfo.jpeg"} alt="image" style={{width: "800px", height:"250px", margin: 20, position: "absolute", left: 400}} />
          </div>  
        </div>
      </div>
  );
}

export default App;
