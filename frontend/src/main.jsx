
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import {ClerkProvider} from '@clerk/react'

const PUBLISHABKE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
if(!PUBLISHABKE_KEY){
  throw new Error('Missing Publishable Key!')
}



createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={PUBLISHABKE_KEY}>
   <BrowserRouter>
     <App />
   </BrowserRouter>
  </ClerkProvider>,
 
)
