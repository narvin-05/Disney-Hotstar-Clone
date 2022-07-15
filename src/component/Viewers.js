import React from 'react'
import styled from 'styled-components'
import img1 from "../images/viewers-disney.png";


function Viewers() {
  return (
    <Container>
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
        <Wrap>
            <img src={img1}/>
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

    border: 3px solid rgba(249,249,249,0.1);
    border-radius: 10px;

    img{
        width: 100%;
        height: 100px;
        object-fit: cover;


    }
`