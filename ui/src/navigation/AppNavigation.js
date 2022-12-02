import { BrowserRouter, Route, Switch } from 'react-router-dom'
import routesPath from '../values/routesPath'
import PageNotFound from '../pages/404'
import Home from '../pages/Home'
import CookiesAlert from '../components/CookiesAlert'

const AppNavigation = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path={`${routesPath.Home.list}`} exact component={Home} />
          <Route path={`*`} component={PageNotFound} />
        </Switch>
      </BrowserRouter>
      <CookiesAlert />
    </div>
  )
}

export default AppNavigation
