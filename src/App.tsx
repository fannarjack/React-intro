import "./modal.css"
import Name from "./name.tsx"
import Btn from './Btn.tsx'
import Modal from "./modal.tsx"
import { useState } from "react"

function App(){
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <>
      <Name 
      firstName='Fannar'
      secondName='Hrafn'
      familyName='Jack'
      lastName='Hilmarsson'/>
      <Btn answer='Hey, how are you?' click={() => {setModalOpen(true)}}
      />
      <Btn answer='another button' click={() => {}}/>
      <Modal isOpen = {modalOpen}
      closeModal = {() => {setModalOpen(false)}} />
    </>
  )
} 
export default App 