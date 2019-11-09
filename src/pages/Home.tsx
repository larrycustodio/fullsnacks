import * as React from 'react'
import styled from 'styled-components'
import HomepageWavingIcon from '../components/HomepageWavingIcon'

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
        <p>
          <span role="img">🚧</span>&nbsp; <span role="img">👨‍💻</span>
        </p>
      </WorkNav>
    </Hero>
  </Main>
)

export default Home

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

const WorkNav = styled.div({
  fontSize: '26px',
  lineHeight: '42px',
})
