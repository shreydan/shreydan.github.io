import React from 'react'
import styled from 'styled-components'
import headerImage from '../assets/header_image.png'

const Hello = styled.div`
    font-size: 8vh;
    font-weight: 600;
    color: #ececec;
`

const Introduction = styled.div`
    font-size: 4vh;
    margin-top: 2%;
    font-weight: 300;
    color: #e7e7e7;
    word-wrap: normal;
`

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 2%;
    border-bottom: 3px solid #757575;
`

const Image = styled.img`
    height: 18vh;
    width: auto;
    border-radius: 50%;
`

function Header() {
    return (
        <HeaderContainer>
        <div>
            <Hello>Hello 👋️</Hello>
            <Introduction>
                I am Shreyas Daniel, a Python and React developer.
            </Introduction>
        </div>
        <Image src={headerImage} alt="shreyas daniel"></Image>
        </HeaderContainer>
    )
}

export default Header
