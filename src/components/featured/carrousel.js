import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide_one from '../../resources/images/img1.jpeg';
import slide_two from '../../resources/images/img2.webp';
import slide_three from '../../resources/images/img3.webp';

const Carrousel = () => {
    const setting = {
        dots:false,
        infinite:true,
        autoplay:true,
        speed:50
    }
    return (
        <div 
            className="carrousel_wrapper"
            style={{
                height: '${window.innerHeight}px'
            }}>
                <Slider {...setting}>
                    <div>
                        <div className="carrousel_image"
                        style={{
                            background:`url(${slide_one})` ,
                            height:`${window.innerHeight}px`
                        }}> 
                        </div>
                    </div>
                    <div>
                    <div className="carrousel_image"
                        style={{
                            background:`url(${slide_two})` ,
                            height:`${window.innerHeight}px`
                        }}> 
                        </div>
                    </div>
                    <div>
                    <div className="carrousel_image"
                        style={{
                            background:`url(${slide_three})` ,
                            height:`${window.innerHeight}px`
                        }}> 
                        </div>
                    </div>
                </Slider>
        </div>
    )
}

export default Carrousel;