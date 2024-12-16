import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from "@/components/ui/provider"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>,
)