
import { MouseEventHandler, useState } from "react";
import {Button, Container} from "./Button.style"

type Props = {
  //Can put whatever i want in the answer
  answer: string; 
  click: MouseEventHandler<HTMLButtonElement>;
}


function Btn({answer, click}: Props) {
  
  const [isGreen, setIsGreen] = useState(false);
  const [isActive, setIsActive] = useState(false)
  const hoverStyle = {
    cursor: "pointer",
    backgroundColor: "#2EE59D",
    color: "white",
    borderColor: "green",
    boxShadow: "0px 15px 20px rgba(46, 229, 157, 0.4)",
    transform: "translateY(-7px)"
  }
  const activeStyle = {
    color: "black",
    transition: "none",
    backgroundColor: "white"
  }
  let btnStyle = {}
  //if hoverStyle is true
  if(isGreen){
    btnStyle = hoverStyle;
  }
  //if activeStyle is true
  if(isActive){
    btnStyle = {...btnStyle, ...activeStyle}
  }
  return(
  <Container>
    <Button  
    style = {btnStyle}
    onMouseEnter ={() => setIsGreen(true)}
    onMouseLeave ={() => setIsGreen(false)}
    onMouseDown={() => setIsActive(true)}
    onMouseUp={() => setIsActive(false)}
    onClick = {click}
    >
      {answer}
    </Button>
  </Container>
  )
}

export default Btn  