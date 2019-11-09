import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import ClaimsConcepts from './pages/ClaimsConcepts'

interface MainProps {}

const Main: React.FC<MainProps> = () => (
  <Router>
    <Switch>
      <Route exact path="/claims-concepts">
        <ClaimsConcepts />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
)

ReactDOM.render(<Main />, document.getElementById('app'))
