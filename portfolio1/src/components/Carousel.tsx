import React, { useRef } from 'react';
import Glide from 'react-glidejs';

import 'react-glidejs/dist/index.css';
// import './transitions.css';

const Carousel = () => {
    const gliderRef = useRef(null);

    return (
        <div
            className="App"
            style={{
                background: '#1B262C',
            }}
        >
            <Glide
                ref={gliderRef}
                throttle={0}
                type="slider"
                customSlideAnimation={{
                    timeout: 500,
                    classNames: 'fade',
                }}
                peek={{
                    before: 500,
                    after: 500,
                }}
                perView={1}
                startAt={3}
                slideClassName="slider__frame"
                focusAt="center"
            >
                <img className="rounded-t-lg" src="" alt="" />

                <div className="p-5">

                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">title</h5>

                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">description</p>

                </div>

                <div className="p-5">

                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">title</h5>

                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">description</p>

                </div>

                <div className="p-5">

                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">title</h5>

                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">description</p>

                </div>
              
            </Glide>
        </div>
    );
};

export default Carousel;