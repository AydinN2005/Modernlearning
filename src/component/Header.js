import React from 'react';
import imglaptop from  '../image/V6UGPl.jpg'
import { FaSistrix } from "react-icons/fa";
const Header = () => {
    return (
        <div>
    <header className = 'topheader' >
        <img className='laptopimg'src={imglaptop}/>
        <h2> Modern Learning </h2> 
        <h4> طراحی سایت شما و اپلیکیشن کار شما </h4>
        <div className='containerinputs'>
        <input type='text' className='headerinputtext' placeholder='جست و جو کنید ...'/>
        <bottun type='bottun' className='searchbuton'><FaSistrix className='searchicon'/></bottun>
        </div>
        <bottun type='bottun' className='submitbtn'>ثبت سفارش</bottun>
    </header>
        </div>
    );
};

export default Header;