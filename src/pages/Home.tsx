import * as React from 'react'
import styled from 'styled-components'
import { HomepageWavingIcon } from '../components/HomepageWavingIcon'
import { Link } from 'react-router-dom'

interface HomeProps {}

const Home: React.FC<HomeProps> = () => (
  <Main>
    <Hero>
      <Header>
        <HomepageWavingIcon />
        <div>Sup, I'm Larry</div>
      </Header>
      <Subheader>I dabble with all sorts of techniques to create rich user interfaces.</Subheader>
      <WorkNav>
        <NavItem to="/onboarding">Store Onboarding</NavItem>
      </WorkNav>
    </Hero>
  </Main>
)

export { Home }

const Main = styled.main({
  display: 'flex',
  alignItems: 'center',
  height: '100vh',
  overflow: 'hidden',
  justifyContent: 'center',
})

const Hero = styled.header({
  margin: '0 auto',
  maxWidth: '80vw',
})

const Header = styled.h2({
  fontSize: '42px',
  lineHeight: '66px',
  margin: 0,
})

const Subheader = styled.p({
  fontSize: '33px',
  lineHeight: '53px',
  margin: '0 0 27px',
})

const WorkNav = styled.nav({
  fontSize: '26px',
  lineHeight: '42px',
})

const NavItem = styled(Link)({})
