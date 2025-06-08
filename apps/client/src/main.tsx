import React, { StrictMode } from 'react'
import { RouterProvider } from 'react-router-dom'
import * as ReactDOM from 'react-dom/client'
import { router } from './routes'
import { GlobalStyles } from '@styles'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <StrictMode>
    <GlobalStyles />
    {/* <React.Suspense fallback={<div>loading...</div>}> */}
    <RouterProvider router={router} />
    {/* </React.Suspense> */}
  </StrictMode>,
)
