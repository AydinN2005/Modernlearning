import React from 'react';
import './style.css'
import Header from './component/Header';
import Navifation from './component/Navifation';
import Main from './component/Main';
import Teachers from './component/Teachers';
import Courses from './component/Courses';
const App = () => {
    return ( <div className = 'container' >
        <Header/>
        <Navifation/>
        <Main/>
        <Courses/>
        <Teachers/>
        </div>
    );
};

export default App;