import React, { FC } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GlobalStyle from './GlobalStyles'
import { Home } from './pages/Home'
import { Onboarding } from './pages/Onboarding'

interface MainProps {}

const Main: FC<MainProps> = () => (
  <>
    <GlobalStyle />
    <Router>
      <Switch>
        <Route path="/onboarding">
          <Onboarding />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </>
)

render(<Main />, document.getElementById('app'))
