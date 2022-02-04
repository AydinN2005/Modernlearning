import React from 'react';
import './style.css'
import Header from './component/Header';
import Navifation from './component/Navifation';
import Main from './component/Main';
const App = () => {
    return ( <div className = 'container' >
        <Header/>
        <Navifation/>
        <Main/>
        </div>
    );
};

export default App;