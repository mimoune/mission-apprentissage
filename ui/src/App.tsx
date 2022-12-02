import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import AppNavigation from './navigation/AppNavigation'
import store from './store/createStore'
import applicationStyles from './themes/applicationStyles'
import './styles/cssHelper-icon-esd.scss'
import './styles/globals.scss'

const queryClient = new QueryClient()

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={applicationStyles}>
          <AppNavigation />
        </ChakraProvider>
      </QueryClientProvider>
    </Provider>
  )
}

export default App
