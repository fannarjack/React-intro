import styled from "styled-components"

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Roboto";
`
/*----- mynd,title og overview -----*/

const MovieInfo = styled.div`
  border-bottom: 0.5px solid gray;
  margin: 30px 10px 30px 10px;
`

const Title = styled.h1`
  margin-top: 20px;
  font-size: 36px;
  display: flex;
  justify-content: center;
`

const MovieImg = styled.img`
  display: block;
  margin: 50px auto 10px auto;
`
const Overview = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 18px;
  margin: 50px 30px 50px 30px
`

export {MovieContainer, MovieInfo, Title, MovieImg, Overview}