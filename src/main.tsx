import ReactDOM from 'react-dom/client'
import {App} from 'app/App'
import { StoreProvider } from 'app/providers/store'
import { ThemeProvider } from 'app/providers/theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StoreProvider>
      <ThemeProvider>
        <App/>
      </ThemeProvider>
    </StoreProvider>
)
