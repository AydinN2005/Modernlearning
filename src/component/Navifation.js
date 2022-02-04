import React from 'react';
import { AiFillCaretDown } from "react-icons/ai";
const Navifation = () => {
    return (
        <div>
                    <nav className='menucontainer'>
        <ul className='menu'>
            <li><a href='#'>دوره های آموزشی<AiFillCaretDown className='arrowdownicon'/></a></li>
            <li><a href='#'>آموزش رایگان<AiFillCaretDown className='arrowdownicon'/></a></li>
            <li><a href='#'>مجله<AiFillCaretDown className='arrowdownicon'/></a></li>
            <li><a href='#'>ارتباط با ما<AiFillCaretDown className='arrowdownicon'/></a></li>
            <li><a href='#'>تیم جوانان<AiFillCaretDown className='arrowdownicon'/></a></li>
        </ul>
        </nav>
        </div>
    );
};

export default Navifation;