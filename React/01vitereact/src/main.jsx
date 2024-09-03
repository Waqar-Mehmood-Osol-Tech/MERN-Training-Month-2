import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const anotherUser = ""

const reactElement  = React.createElement(
  'a',
  {href: 'https://google/com', target: '_blank'},
  'Click me to visit the google'
)

createRoot(document.getElementById('root')).render(
     reactElement
)
