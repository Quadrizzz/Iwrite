import React, { useState} from 'react'
import Styled from 'styled-components'
import Login from './Login'
import Register from './Register'
import {motion} from 'framer-motion'

const BoxContainer = Styled.div`
    width : 350px;
    min-height: 700px;
    display: flex;
    flex-direction: column;
    border-radius: 19px;
    background-color : #fff;
    box-shadow : 0 0 2px rgba(15, 15, 15, 0.28);
    position: relative;
    overflow: hidden;
    background : white;
`;

const TopContainer = Styled.div`
    width : 100%;
    height: 250px;
    display : flex;
    flex-direction : column;
    justify-content : flex-end;
    padding : 0 1.8em;
    padding-bottom : 5em;
`;

const Backdrop = Styled(motion.div)`
    width : 160%;
    height: 550px;
    position: absolute;
    display : flex;
    transform : rotate(60deg);
    top: -290px;
    left: -70px;
    flex-direction: column;
    border-radius: 50%;
    background : #263ec7;
`;

const HeaderContainer = Styled.div`
    width : 100%;
    display : flex;
    flex-direction : column;
    z-index: 10;
`;

const HeaderText = Styled.h2`
    font-size : 30px;
    font-weight : 600;
    line-height : 1.2;
    color : white;
    margin: 0;
`;

const SmallText = Styled.h5`
    font-size : 16px;
    font-weight: 500;
    color : white;
    margin: 0;
    margin-top : 10px;
`

const SmallTextLink = Styled.h5`
    font-size : 16px;
    font-weight: 500;
    color : rgb(153, 152, 152);
    margin: 0;
    margin-top : 13px;
    text-align: center;
    margin-bottom : 13px;

`


const InnerContainer = Styled.div`
    width : 100%;
    display: flex;
    flex-direction: column;
    padding: 0 1.8em;
    margin-top: 50px
`;

const HyperLink = Styled.h5`
    font-weight : 700;
    color : #263ec7;
    font-size : 16px;
    margin: 0;
    margin-top: 10px;
    margin-bottom : 13px;
    cursor : pointer;
    text-decoration : none;
`;


const backdropVariant = {
    expanded : {
        width : "250%",
        height: "1050px",
        borderRadius : "20%",
        transform : "rotate(60deg)"
    },
    collapsed : {
        width : "160%",
        height : "550px",
        borderRadius : "50%",
        transform : "rotate(60deg)"
    }
}

const expandedTransition = {
    type: "spring",
    duration : 2.8,
    stiffness : 30
}


export function AccountBox({props, set_id, setLoading}){
    const [isExpanded , setExpanded] = useState(false);
    const [active ,  setActive] = useState("signin")

    const setToSignUp = ()=>{
        playAnimation()
        setTimeout(()=>{
            setActive("signup")
        }, 500)
    }

    const setToSignIn = ()=>{
        playAnimation()
        setTimeout(()=>{
            setActive("signin")
        }, 500)
    }

    const playAnimation = ()=>{
        setExpanded(true);
        setTimeout(()=>{
            setExpanded(false)
        }, expandedTransition.duration * 1000 - 1200)
    }


    return (
        <BoxContainer>
            <TopContainer>
                <Backdrop initial = {false} 
                animate = {isExpanded ? "expanded" : "collapsed"} 
                variants = {backdropVariant}
                transition = {expandedTransition}
                />
                <HeaderContainer>
                    <HeaderText>Welcome</HeaderText>
                    <HeaderText>{active === "signin" ? "Back" : "To my library"}</HeaderText>
                    <SmallText>{active === "signin" ? "Please sign in to continue" : "Please register to continue"}
                    </SmallText>
                </HeaderContainer>
            </TopContainer>
            <InnerContainer>
                {active === "signin" ? <Login set_id = {set_id} setLoading = {setLoading}/> : <Register set_id = {set_id} setLoading = {setLoading}/>}
            </InnerContainer>
            <SmallTextLink>{active === "signin" ? "Don't have an account ?" : "Already have an account ?"}
                <HyperLink  onClick = {active === 'signin' ? setToSignUp : setToSignIn}>
                    {active === "signin" ? " Sign Up" : " Sign in"}
                </HyperLink>
            </SmallTextLink>
        </BoxContainer>
    )
    
}