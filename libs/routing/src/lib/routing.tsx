import { lazy, LazyExoticComponent, Suspense } from 'react'
import { Loading } from '@components/Loading'

export const lazyRoute = <T extends () => JSX.Element>(
  moduleCallback: () => Promise<{ default: T }>,
) => {
  const RoutePage = lazy(moduleCallback) as LazyExoticComponent<
    () => JSX.Element
  >

  return (
    <Suspense fallback={<Loading fullpage />}>
      <RoutePage />
    </Suspense>
  )
}
