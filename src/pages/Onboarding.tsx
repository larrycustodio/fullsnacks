import React, { FC } from 'react'
import styled from 'styled-components'
import { Branding } from '../Icons'
import { useRouteMatch, Switch, Route, Link, Redirect } from 'react-router-dom'
import { StoreInputForm } from './StoreInputForm'

interface OnboardingProps {}

const Onboarding: FC<OnboardingProps> = () => {
  const match = useRouteMatch()

  return (
    <PageWrapper>
      <Header>
        <Branding.Logo />
      </Header>
      <ProgressWrapper>
        <Link to={`${match?.url}/1`}>To 1</Link>
        <Link to={`${match?.url}/2`}>To 2</Link>
      </ProgressWrapper>
      <ContentWrapper>
        <Switch>
          {/* TODO: add content */}
          <Route path={`${match?.path}/1`}>
            <StoreInputForm />
          </Route>
          <Route path={`${match?.path}/2`}>
            <h3>Now let's see how your customized offers will look like</h3>
          </Route>
          <Route path={`${match?.path}/3`}>
            <h3>Onboarding Done, yay!</h3>
          </Route>
          <Route path="/">
            <Redirect to={`${match?.path}/1`} />
          </Route>
        </Switch>
      </ContentWrapper>
    </PageWrapper>
  )
}

const PageWrapper = styled.main({})

const Header = styled.header({
  boxShadow: `rgba(208, 208, 208, 0.5) 0px 2px 3px 1px`,
  display: 'flex',
  justifyContent: 'center',
  height: 75,
  padding: '22px 40px',
})

const ProgressWrapper = styled.nav({
  textAlign: 'center',
})

const ContentWrapper = styled.section({
  maxWidth: 1100,
  margin: '0 auto',
})

export { Onboarding }
