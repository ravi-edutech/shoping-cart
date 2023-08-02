import styled from "styled-components";

export const StickyHeader = styled.header`
min-height: 80px;
border-bottom: 3px dotted #eee;
box-shadow: none;
background-color: #fff;
position: absolute;
top: 0px;
left: 0px;
right: 0px;
z-index: 100;
height: 100px;
-webkit-transition: all .5s ease 0s;
-moz-transition: all .5s ease 0s;
-o-transition: all .5s ease 0s;
transition: all .5s ease 0s;
// display: block;
`

export const Navbar = styled.nav`
min-height: 80px;
background: transparent;

`


export const CapitalizedH4 = styled.h4`
text-transform: capitalize;
`


export const CapitalizedH2 = styled.h2`
text-transform: capitalize;
`

export const LinkSpan = styled.span`
cursor:pointer;
display: block;
font-weight: 600;
font-size: 15px;
color: #2a2a2a;
text-transform: capitalize;
transition: all 0.3s ease 0s;
height: 40px;
line-height: 40px;
border: transparent;
letter-spacing: 1px;
`