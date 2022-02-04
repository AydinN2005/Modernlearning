import React from 'react';
import imgfltter from '../image/ic4xhwlaljlw.png'
import imgpcc from '../image/1200px-Adobe_Photoshop_Mobile_icon.svg.png'
const Main = () => {
    return (
        <div>
        <main className='maincontent'> 
            <div className='mainheader'>
                <h1 className='mainheadertitle'>
                    Modern Learning
                </h1>
                <h4 className='mainheaderdescribtion'>
                سایت لورم‌ساز علاوه بر تولید متن ساختگی لورم ایپسوم، انواع ابزارهای آنلاین در زمینه‌های طراحی وبسایت و گرافیک، حسابداری و اندازه‌گیری و دیگر ابزارهای کاربردی برای استفاده در کارهای مختلف ارائه می‌دهد.
                سایت لورم‌ساز علاوه بر تولید متن ساختگی لورم ایپسوم، انواع ابزارهای آنلاین در زمینه‌های طراحی وبسایت و گرافیک، حسابداری و اندازه‌گیری و دیگر ابزارهای کاربردی برای استفاده در کارهای مختلف ارائه می‌دهد.
                سایت لورم‌ساز علاوه بر تولید متن ساختگی لورم ایپسوم، انواع ابزارهای آنلاین در زمینه‌های طراحی وبسایت و گرافیک، حسابداری و اندازه‌گیری و دیگر ابزارهای کاربردی برای استفاده در کارهای مختلف ارائه می‌دهد.
                </h4>
            </div>
            <h1 className='coursetitle'>دوره های آموزشی</h1>
            <div className='containercourses'>
                <div className='boxcoursecontainer'> 
                <div className='boxcourse'>
                    <img src={imgfltter} className='boxcourseimg'/>
                    <h3 className='boxcoursetitle'>دوره آموزشی فلاتر</h3>
                    <h4 className='boxcoursetitle2'>مقدمات فلاتر</h4>
                    <p className='boxcoursedescription'>
                    سایت لورم‌ساز علاوه بر تولید متن ساختگی لورم ایپسوم، انواع ابزارهای آنلاین در زمینه‌های طراحی وبسایت و گرافیک، حسابداری و اندازه‌گیری و دیگر ابزارهای کاربردی برای استفاده در کارهای مختلف ارائه می‌دهد.
                    </p>
                </div>
                <div className='boxcourse'>
                <img src={imgpcc} className='boxcourseimg'/>
                    <h3 className='boxcoursetitle'>دوره آموزشی فتوشاپ</h3>
                    <h4 className='boxcoursetitle2'>مقدمات فتوشاپ</h4>
                    <p className='boxcoursedescription'>
                    سایت لورم‌ساز علاوه بر تولید متن ساختگی لورم ایپسوم، انواع ابزارهای آنلاین در زمینه‌های طراحی وبسایت و گرافیک، حسابداری و اندازه‌گیری و دیگر ابزارهای کاربردی برای استفاده در کارهای مختلف ارائه می‌دهد.
                    </p>
                </div>
                <div className='boxcourse'>
                <img src={imgfltter} className='boxcourseimg'/>
                    <h3 className='boxcoursetitle'>دوره آموزشی فلاتر</h3>
                    <h4 className='boxcoursetitle2'>مقدمات فلاتر</h4>
                    <p className='boxcoursedescription'>
                    سایت لورم‌ساز علاوه بر تولید متن ساختگی لورم ایپسوم، انواع ابزارهای آنلاین در زمینه‌های طراحی وبسایت و گرافیک، حسابداری و اندازه‌گیری و دیگر ابزارهای کاربردی برای استفاده در کارهای مختلف ارائه می‌دهد.
                    </p>
                </div>
                </div>
            </div>
        </main> 
        </div>
    );
};

export default Main;