import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.a`
    text-decoration: none;
    display: flex;
    width: 30vh;
    aspect-ratio: 1/1;
    border-radius: 10px;
    padding: 1.5%;
    margin: 2%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: ${props => props.bgColor};
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: 0.2s ease-in-out;
    }
`
const CardTitle = styled.div`
    color: white;
    font-weight: 500;
    padding: 1% 0;
    font-size: 4vh;
    flex: 1;
`
const CardDescription = styled.div`
    color: white;
    font-weight: 300;
    padding: 1% 0;
    font-size: 3vh;
`

function Card({link}) {
    const {title, description, bgColor, icon, url} = link
    return (
        <CardContainer bgColor={bgColor} href={url} target='_blank' rel="noopener noreferrer">
            <CardTitle>{icon} {title}</CardTitle>
            <CardDescription>{description}</CardDescription>
        </CardContainer>
    )
}

export default Card
