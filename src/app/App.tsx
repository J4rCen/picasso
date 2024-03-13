import { HashRouter } from 'react-router-dom'
import {store} from './store'
import { Provider } from 'react-redux'
import AppRoutes from "../pages"

function App() {

  return (
    <HashRouter>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </HashRouter>
  )
}

export default App
