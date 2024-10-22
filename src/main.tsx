import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Btn from './hamburger.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Btn answer='Hey, how are you?'/>
    <Btn answer='another button'/>
  </StrictMode>,
)
