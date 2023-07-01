import { AppRouter } from 'app/provider/router'
import { FC, Suspense } from 'react'

export const App: FC = () => {
  return (
    <div className="app">
      <Suspense fallback="">
        <div className="content-page">
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}
