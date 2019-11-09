import * as React from 'react'
import styled from 'styled-components'

interface HomeProps {}

const Home: React.FC<HomeProps> = () => (
  <Hero>
    <EmojiWrapper>👋</EmojiWrapper>
    <Header>Sup, I'm Larry.</Header>
    <Subheader>I dabble with all sorts of techniques to create rich user interfaces.</Subheader>
  </Hero>
)

export default Home

const Hero = styled.main({
  margin: '0 auto',
  maxWidth: '80vw',
})

const Header = styled.h2({
  fontSize: 37.9,
})

const Subheader = styled.p({
  fontSize: 21.33,
})

const EmojiWrapper = styled.div({
  fontSize: 36,
})
