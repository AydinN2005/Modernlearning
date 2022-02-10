import React from 'react';
import imgali from '../image/_MG_0390.jpg'
import imgamin  from '../image/_MG_0371.jpg'
import imgaydin from '../image/_MG_0365.jpg'
const Teachers = () => {
    return (
        <div>
            <div className='teacherscontainer'>
                <div className='teachersbox'>
                    <img className='teacherimg' src={imgali}/>
                    <h3 className='teachersname'>علی محمدزاده</h3>
                    <h4 className='teachersjob'>آموزش فلاتر</h4>
                </div>
                <div className='teachersbox'>
                    <img className='teacherimg' src={imgamin}/>
                    <h3 className='teachersname'>مهرداد گلشن</h3>
                    <h4 className='teachersjob'> آموزش فتوشاپ </h4>
                </div>
                <div className='teachersbox'>
                    <img className='teacherimg' src={imgaydin}/>
                    <h3 className='teachersname'>آیدین نوروزی</h3>
                    <h4 className='teachersjob'>آموزش جاوا اسکریپت</h4>
                </div>
            </div>
        </div>
    );
};

export default Teachers;