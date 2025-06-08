import { ComponentType, lazy, LazyExoticComponent, ReactNode, Suspense } from 'react';
import Loading from './Loading';

export const lazyRoute = <T extends () => JSX.Element>(moduleCallback: () => Promise<{default: T}>) => {
  const RoutePage = lazy(moduleCallback) as LazyExoticComponent<() => JSX.Element>

  return <Suspense fallback={<Loading />}><RoutePage /></Suspense>
}

export { Loading } from "./Loading"