import { lazy, Suspense } from 'react'
import { getRoutePath } from './get-route-path'
import { LoadingFallback } from '@/components/loading-fallback'

const HomePage = lazy(() => import('../pages/root-page'))
const AboutPage = lazy(() => import('../pages/about-page'))
const NotFoundPage = lazy(() => import('../pages/not-found'))

export const routes = [
  {
    path: getRoutePath('home'),
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <HomePage />
      </Suspense>
    ),
  },
  {
    path: getRoutePath('about'),
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <AboutPage />
      </Suspense>
    ),
  },
  {
    path: getRoutePath('not_found'),
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <NotFoundPage />
      </Suspense>
    ),
  },
]
