
import { MouseEventHandler } from "react";
import "./modal.css"

type Props = { 
  isOpen: boolean
  closeModal: MouseEventHandler<HTMLParagraphElement>;
}
function Modal({isOpen, closeModal}: Props){
  const style = {
    display: "none",
  }
  if(isOpen){
    style.display = "flex"
  }
  
  return (
    <>
    <div className="modal-container"
      style = {style}
    >
      <div className="modal">
      <p className="x"
          onClick = {closeModal}>X
        </p>
        <p className="hello">hello Modal, <br /> Click the X to close</p>
      </div>
    </div>
    </>
  )
} 
export default Modal 