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
    flex-direction: ${props => props.mobile ? 'column' : 'row'};
    align-items: ${props => props.mobile ? 'flex-start' : 'center'};
    justify-content: space-between;
    padding-bottom: 2%;
    border-bottom: 3px solid #757575;
    text-align: ${props => props.mobile ? 'left' : 'right'};
`

const Image = styled.img`
    height: 18vh;
    width: auto;
    border-radius: 50%;
    margin-bottom: ${props => props.mobile ? '5%' : 0};
`

function Header({mobile}) {
    return (
        <HeaderContainer mobile={mobile}>
            <Image src={headerImage} mobile={mobile} alt="shreyas daniel"></Image>
            <div>
                <Hello>Hello 👋️</Hello>
                <Introduction>
                    I am Shreyas Daniel, a Python and React developer.
                </Introduction>
            </div>
        </HeaderContainer>
    )
}

export default Header
