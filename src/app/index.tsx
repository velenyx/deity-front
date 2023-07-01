import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// import 'shared/config/i18n/i18n'
import { App } from './App'
import './styles/index.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
