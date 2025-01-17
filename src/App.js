import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import NotFound from './components/NotFound'
import Home from './components/Home'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
