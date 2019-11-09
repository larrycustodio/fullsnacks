import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GlobalStyle from './GlobalStyles'
import Home from './pages/Home'
import ClaimsConcepts from './pages/ClaimsConcepts'

interface MainProps {}

const Main: React.FC<MainProps> = () => (
  <>
    <GlobalStyle />
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
  </>
)

ReactDOM.render(<Main />, document.getElementById('app'))
