import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { UserProfileContextProvider } from './context/UserProfileContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserProfileContextProvider>
      <App />
    </UserProfileContextProvider>
  </StrictMode>,
)
