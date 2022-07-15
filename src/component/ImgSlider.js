import React from 'react'
import styled from 'styled-components';
import Slider from 'react-slick';
import img1 from "../images/slider-badging.jpg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function ImgSlider() {

    let setting = {
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true
    }

  return (
    <Carousel {...setting} >
        <Wrap>
                <img src={img1}/>
        </Wrap> 
        <Wrap>
                <img src={img1}/>
        </Wrap> 
        <Wrap>
                <img src={img1}/>
        </Wrap> 
        <Wrap>
                <img src={img1}/>
        </Wrap>  
    </Carousel>
  )
}

export default ImgSlider;

const Carousel = styled(Slider)`
    margin-top: 20px;

    ul li button{
        &:before{
            font-size: 10px;
            color: rgb(150,158,171);
        }
    }

    li.slick-active button:before{
        color: white;

    }


    .slick-list{
        overflow: visible;     // to see next image little bit on both sides
    }

    button{
        z-index: 1;
    }

`

const Wrap = styled.div`
    cursor: pointer;
    img{
        width: 100%;
        border: 4px solid transparent;
        /* height: 100%; */
        height: 300px;
        border-radius:6px;
        transition-duration:300ms ;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;

        :hover{
            border: 4px solid white;
        }
    }
`