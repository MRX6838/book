import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Reg from './Reg/Reg';
import './Reg/reg.css'
import Log from "./Login/log"
import "./Login/log.css"
import Popup from './voiti/Popup';
import "./Regok/Regok"
import "./Regok/Regok.css"
import { Regok } from './Regok/Regok';
import { Vermail } from './Verakagnum/Vermail';
import "./Verakagnum/Vermail.css"
import {Verkod} from "./Verkod/Verkod"
import "./Verkod/Verkod.css"
import { Veradarc } from './Veradarc/Veradarc';
import "./Veradarc/Veradarc.css"
import {Suscces} from './Suscces/Suscces';
import "./Suscces/Suscces.css"
import {Gor} from "./Gorcnakan/Gor"
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      {/* <Popup/> */}
      {/* <Regok/> */}
      
      {/* <Verkod/> */}
      {/* <Veradarc/> */}
      {/* < Suscces/> */}
      {/* <Gor/> */}
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

