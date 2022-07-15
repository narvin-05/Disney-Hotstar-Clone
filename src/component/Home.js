import React from 'react'
import styled from 'styled-components';
import img from "../images/home-background.png"
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';

function Home() {
  return (
    <Container>
        <ImgSlider/>
        <Viewers/>
    </Container>
  )
}

export default Home;

// 100vh : 100 vertical height : full height
// vw - view width 

const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative; 
    overflow-x: hidden;             // for removing horizontal scrolling

    &:before{
        background: url(${img}) center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: -1;               // to put things up and down of an element
    }
`