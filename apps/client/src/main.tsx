import React, { StrictMode } from 'react'
import { RouterProvider } from 'react-router-dom'
import * as ReactDOM from 'react-dom/client'
import { router } from './routes'
import { GlobalStyles } from '@styles'
import { Loading } from '@components/Loading'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <StrictMode>
    <GlobalStyles />
    <React.Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </React.Suspense>
  </StrictMode>,
)
