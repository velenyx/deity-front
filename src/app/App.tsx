import { AppRouter } from 'app/provider/router'
import { FC, Suspense } from 'react'
import './styles/index.scss'

export const App: FC = () => {
  return (
    <div className="app light">
      <Suspense fallback="">
        <div className="content-page">
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}
