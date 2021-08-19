import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import Header from './Header'

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 5% 0;
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
`

const Cards = styled.div`
    margin: 3% 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 3%;
    border-bottom: 3px solid #757575;
`


function Mobile({links}) {
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

export default Mobile
