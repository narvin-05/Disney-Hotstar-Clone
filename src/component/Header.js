import React from 'react'
import styled from 'styled-components'
import logo from "../images/logo.webp";
import { AiOutlineHome,AiOutlinePlus,AiFillStar,AiOutlineVideoCamera } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { FiVideo } from "react-icons/fi";
import profile_img from "../images/profile.jpg"




function Header() {
  return (
    <Nav>
        <Logo src={logo} />
        <NavMenu>
            <a>
                <AiOutlineHome style={{height:"30px"}} />
                <span>&nbsp;HOME</span>
            </a>

            <a>
                <BiSearchAlt2 style={{height:"30px"}} />
                <span>&nbsp;SEARCH</span>
            </a>

            <a>
                <AiOutlinePlus style={{height:"30px"}} />
                <span>&nbsp;WATCHLIST</span>
            </a>

            <a>
                <AiFillStar style={{height:"30px"}} />
                <span>&nbsp;ORIGINALS</span>
            </a>

            <a>
                <AiOutlineVideoCamera style={{height:"30px"}} />
                <span>&nbsp;MOVIES</span>
            </a>
            
            <a>
                <FiVideo style={{height:"30px"}} />
                <span>&nbsp;SERIES</span>
            </a>
        </NavMenu>
        <UserImg src={profile_img}/>
    </Nav>
  )
}

export default Header;

const Nav = styled.nav` 
    height: 70px;
    background: #090b13;
    /* background-color: wheat; */
    overflow-x: hidden;
    display: flex;        // used to structure 
    align-items: center;  // to center vertically all the content within it
    padding: 0px 36px ;  
`

const Logo = styled.img`
    width: 120px;
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    a{
        margin-left: 25px;
        display: flex;
        align-items: center;  
        padding: 0px 12px;    // top and bottom        right and left
        cursor: pointer;

        img{
            height: 20px;
        }

        span{
            font-size: 15px;
            letter-spacing: 1.45px;
            position: relative;

            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s ;
                transform-origin: left center;
                transform: scaleX(0);
            }
        }
        &:hover{
            span:after{
                transform: scaleX(1);
                opacity: 1;
            }
        }

    }

`

const UserImg = styled.img`
    width:54px;
    height: 54px;
    border-radius: 50%;
    cursor: pointer;
`