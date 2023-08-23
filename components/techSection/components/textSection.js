import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import ReadMore from './readMore'

const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: fit-content;
    width: 100%;
   height: 200px;
   margin-top: 20px;
   @media screen and (max-width:1100px) {
        height: 100%;
    }
    @media screen and (max-width:600px) {
        margin-top:0;
    }
`

const StyledArticle = styled.article`
    width: 70%;
    max-width: 1000px;
    @media screen and (max-width:1100px) {
        width: 95%;
    }

`
const BoxText = styled.div`
    font-size: 1.2rem;
    width: 70%;
    line-height: 1.6rem;
    color:rgb(138, 147, 155);
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: 400;
    text-align: center;
    margin: auto;
    margin-top: 20px;


    @media screen and (max-width:700px) {
        font-size: 1.1rem;
        width: 100%;
    }
`

const SlideTitle = styled.h2`
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 1;
    text-transform: uppercase;
    //color: #ffffff;
    text-align: center;
    width: fit-content;
    margin: auto;
    padding-bottom: 2px;

    @media screen and (max-width:700px) {
        font-size: 1.5rem;
    }

`

function TextSection({ textObject }) {

    return (
        <ColumnContainer>
            <StyledArticle>
                {
                    textObject.title != '' ?

                        <a href={textObject.link}><SlideTitle>{textObject.title}</SlideTitle></a>
                        :
                        <SlideTitle>{textObject.title}</SlideTitle>
                }
                <BoxText>
                    <ReadMore>
                        {textObject.text}
                    </ReadMore>
                </BoxText>
            </StyledArticle >

        </ColumnContainer>

    )
}

export default TextSection