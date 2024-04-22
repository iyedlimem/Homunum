import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import client1 from "/Client1.png";
import "./testimonials.css"
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const TestimonialsContainer = () => {
    return (
        <div>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className="declaration-container">
                        <img src={client1}  className='client-img'/>
                        <div className="testimonial-content">
                            <p className="client-declaration">
                                I am incredibly impressed with the transformative technology solutions provided by FutureSphere. Their cutting-edge innovations have revolutionized our business operations, streamlining processes and boosting productivity. The seamless connectivity and intuitive user interface have made a significant impact on our team's efficiency. Thanks to their advanced data analytics capabilities, we now make data-driven decisions with confidence. I highly recommend FutureSphere to any organization seeking to stay ahead in the digital era.
                            </p>
                            <h4 className="client-name">
                                Sarah Thompson
                            </h4>
                            <p className="client-post">
                                CEO Thompson Enterprises
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="declaration-container">
                        <img src={client1}  className='client-img' />
                        <div className="testimonial-content">
                            <p className="client-declaration">
                                I am incredibly impressed with the transformative technology solutions provided by FutureSphere. Their cutting-edge innovations have revolutionized our business operations, streamlining processes and boosting productivity. The seamless connectivity and intuitive user interface have made a significant impact on our team's efficiency. Thanks to their advanced data analytics capabilities, we now make data-driven decisions with confidence. I highly recommend FutureSphere to any organization seeking to stay ahead in the digital era.
                            </p>
                            <h4 className="client-name">
                                Sarah Thompson
                            </h4>
                            <p className="client-post">
                                CEO Thompson Enterprises
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="declaration-container">
                        <img src={client1}   className='client-img'/>
                        <div className="testimonial-content">
                            <p className="client-declaration">
                                I am incredibly impressed with the transformative technology solutions provided by FutureSphere. Their cutting-edge innovations have revolutionized our business operations, streamlining processes and boosting productivity. The seamless connectivity and intuitive user interface have made a significant impact on our team's efficiency. Thanks to their advanced data analytics capabilities, we now make data-driven decisions with confidence. I highly recommend FutureSphere to any organization seeking to stay ahead in the digital era.
                            </p>
                            <h4 className="client-name">
                                Sarah Thompson
                            </h4>
                            <p className="client-post">
                                CEO Thompson Enterprises
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div >
    )
}

export default TestimonialsContainer
