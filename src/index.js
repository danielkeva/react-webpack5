import { StrictMode } from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'

import App from 'containers/App'
import 'normalize.css'

render(
  <StrictMode>
    <BrowserRouter>
      <ErrorBoundary fallback={<div>An error occured, please reload the app.</div>}>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
)
