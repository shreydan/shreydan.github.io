import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import Header from './Header'

const Container = styled.div`
    display: grid; 
    grid-template-columns: 1fr 3.5fr 1fr; 
    grid-template-rows: 1fr; 
    gap: 0px 0px; 
    grid-template-areas: 
    ". content ."; 
`
const Content = styled.div`
    grid-area: content;
    display: flex;
    flex-direction: column;
    margin: 5% 0;
`

const Cards = styled.div`
    margin: 3% 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 3%;
    border-bottom: 3px solid #757575;
`


function Desktop({links}) {
    return (
        <Container>
            <Content>
                <Header />
                <Cards>
                    {
                        links.map((link, key) => (
                            <Card link={link} key={key} />
                        ))
                    }
                </Cards>
            </Content>
        </Container>
    )
}

export default Desktop
