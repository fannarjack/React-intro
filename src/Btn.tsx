import "./Btn.css"
import { MouseEventHandler, useState } from "react";

type Props = {
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
  if(isGreen){
    btnStyle = hoverStyle;
  }
  if(isActive){
    btnStyle = {...btnStyle, ...activeStyle}
  }
  return(
  <div className="container">
    <button className="btn" 
    style = {btnStyle}
    onMouseEnter ={() => setIsGreen(true)}
    onMouseLeave ={() => setIsGreen(false)}
    onMouseDown={() => setIsActive(true)}
    onMouseUp={() => setIsActive(false)}
    onClick = {click}
    >
      {answer}
    </button>
  </div>
  )
}

export default Btn  