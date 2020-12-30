import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import RouletteGun from './state-drills/RouletteGun';
import './index.css';
import BookSearchApp from './state/bookSearch_GoogleAPI/BookSearchApp'
// import DemonymApp from './state/demonymapp/demonymApp.js'
import { BrowserRouter } from "react-router-dom";
import App from './paltrows-power-toes/App';

ReactDOM.render(
    // <BrowserRouter>
    //     <App />
    // </BrowserRouter>,
    <BookSearchApp />,
    
document.getElementById('root'));