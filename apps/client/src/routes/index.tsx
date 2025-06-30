import React, { ReactNode } from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import { lazyRoute } from '@libs/routing'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={lazyRoute(() => import('./Home'))} />

      <Route path="/researchers">
        <Route
          index
          element={lazyRoute(() => import('./Researchers/ListResearchers'))}
        />
        <Route
          path=":id"
          element={lazyRoute(() => import('./Researchers/ShowResearcher'))}
        />
      </Route>

      <Route
        path="/about-us"
        element={lazyRoute(() => import('./AboutUs/ShowAboutUs'))}
      />

      <Route
        path="/events"
        element={lazyRoute(() => import('./Events/ListEvents'))}
      />

      <Route
        path="/papers"
        element={lazyRoute(() => import('./Papers/ListPapers'))}
      />

      <Route
        path="/videos"
        element={lazyRoute(() => import('./Videos/ListVideos'))}
      />

      <Route path="/books">
        <Route index element={lazyRoute(() => import('./Books/ListBooks'))} />
        <Route
          path=":id"
          element={lazyRoute(() => import('./Books/ShowBook'))}
        />
      </Route>
    </Route>,
  ),
)
