import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles'
import App from './App.jsx'
import { CssBaseline } from '@mui/material'
import {theme} from "./config/site-style/theme.js"
import { BrowserRouter } from 'react-router-dom'
import "./fonts/style.css"
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
       <ThemeProvider theme={theme}>
        <App />
        <CssBaseline/>
      </ThemeProvider> 
        
     
    </BrowserRouter>
  </>
)
