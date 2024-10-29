import styled from "styled-components"

const Button = styled.button`
 display: flex;
 border: none;
 border-radius: 45px;
 padding: 24px;
 background-color: white;
 color: black;
 font-family: "Times New Roman";
 font-size: 24px;
 box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
 transition: all 0.3s ease 0s;
`

const Container = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50vh;
  margin-bottom: 50px;
`

export {Button, Container}