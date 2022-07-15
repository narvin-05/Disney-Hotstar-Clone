import React from 'react'
import styled from 'styled-components'
import img1 from "../images/viewers-disney.png";
import img2 from "../images/viewers-pixar.png";
import img3 from "../images/viewers-marvel.png";
import img4 from "../images/viewers-starwars.png";
import img5 from "../images/viewers-national.png";


function Viewers() {
  return (
    <Container>
        <Wrap>
            <img src={img1}/>
        </Wrap>
        <Wrap>
            <img src={img2}/>
        </Wrap>
        <Wrap>
            <img src={img3}/>
        </Wrap>
        <Wrap>
            <img src={img4}/>
        </Wrap>
        <Wrap>
            <img src={img5}/>
        </Wrap>
    </Container>
  )
}

export default Viewers

const Container = styled.div`
    margin-top: 30px;
    display: grid;
    grid-gap: 25px;
    padding:30px 0 26px ;
    grid-template-columns:repeat(5,minmax(0,1fr));
`

const Wrap = styled.div`
    cursor: pointer;
    border: 3px solid rgba(249,249,249,0.1);
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;

    img{
        width: 100%;
        height: 100px;
        object-fit: cover;
    }
    &:hover{
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 73%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: white;

    }
`

// wrap:hover   = &:hover 