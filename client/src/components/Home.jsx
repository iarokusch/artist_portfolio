import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='image-container'>
            <Link to='/photo/1'>
                <div className='vikno'>
                    <img src="/vikno/vikno2.png" alt="IMG_7925" /> {/* Шлях відносно public */}
                </div>
            </Link>
            <Link to='/photo/6'>
                <div className='hause'>
                    <img src="/hause/RotHaus.jpg" alt="Rot" />
                </div>
            </Link>
            <Link to='/photo/3'>
                <div className='fxk'>
                    <img src="/fxk.jpg" alt="fxk" />
                </div>
            </Link>
            <Link to='/photo/2'>
                <div className='plakat'>
                    <img src="/plakat.jpg" alt="plakat" />
                </div>
            </Link>

            <Link to='/photo/4'>
                <div className='kylym'>
                    <img src="/kylym.png" alt="kylym" />
                </div>
            </Link>
            <Link to='/photo/5'>
                <div className='insect'>
                    <img src="/insect/insect7.png" alt="insect" />
                </div>
            </Link>
        </div>
    );
}

export default Home;
