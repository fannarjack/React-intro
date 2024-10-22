import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Name from "./name.tsx"
import Btn from './hamburger.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Name 
    firstName='Fannar'
    secondName='Hrafn'
    familyName='Jack'
    lastName='Hilmarsson'/>
    <Btn answer='Hey, how are you?'/>
    <Btn answer='another button'/>
  </StrictMode>,
)
