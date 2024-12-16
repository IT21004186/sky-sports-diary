import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider,CssBaseline, createTheme } from "@mui/material";
import App from './App.jsx'

const theme = createTheme();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Provides baseline CSS styles */}
      <App />
    </ThemeProvider>
  </StrictMode>
);
