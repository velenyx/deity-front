import { FC, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

export const AppRouter: FC = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route path={path} element={<div className="page-wrapper">{element}</div>} key={path} />
        ))}
      </Routes>
    </Suspense>
  )
}
