import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Btn from './hamburger.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Btn />
  </StrictMode>,
)
