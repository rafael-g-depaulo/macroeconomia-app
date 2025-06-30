import React, { ReactNode } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { lazyRoute } from '@libs/routing'

export const router = createBrowserRouter([
  {
    id: 'home',
    path: '/',
    element: lazyRoute(() => import('./Home')),
  },
  {
    id: 'researchers',
    path: '/researchers',
    children: [
      {
        path: '/',
        element: lazyRoute(() => import('./Researchers/ListResearchers')),
      },
      {
        path: '/:id',
        element: lazyRoute(() => import('./Researchers/ShowResearcher')),
      },
    ],
  },
])
