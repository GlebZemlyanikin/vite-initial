import React, { createElement } from 'react'
import './App.css'

function App() {
  const year = new Date().getFullYear()

  return createElement(
		React.Fragment, null,
		createElement('h1', null, 'Vite + React'),
		createElement('div', null, year)
  )
}

export default App
