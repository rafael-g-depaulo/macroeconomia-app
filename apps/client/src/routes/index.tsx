import React, { ReactNode } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { lazyRoute } from '@libs/routing'

const timeout = (delay: number) =>
  new Promise((resolve, reject) => setTimeout(resolve, delay))
const Home_ = () => timeout(400).then(() => import('./Home'))
const Home = React.lazy(Home_)

export const router = createBrowserRouter([
  {
    id: 'home',
    path: '/',
    element: lazyRoute(() => import('./Home')),
  },
])
