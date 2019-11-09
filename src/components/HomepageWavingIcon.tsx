import * as React from 'react'
import { animated, useSpring } from 'react-spring'
import styled from 'styled-components'

const HomepageWavingIcon: React.FC = () => {
  const props = useSpring({
    from: { transform: 'rotate(15deg)', transformOrigin: '50% 50%' },
    to: async next => {
      while (1) {
        await next({
          transform: 'rotate(-15deg)',
          transformOrigin: '50% 50%',
        })
        await next({
          transform: 'rotate(15deg)',
          transformOrigin: '50% 50%',
        })
      }
    },
    config: { mass: 1, tension: 100, friction: 1 },
  })
  return (
    <Wrapper>
      <AnimateWrapper role="icon" style={props}>
        👋
      </AnimateWrapper>
    </Wrapper>
  )
}

export default HomepageWavingIcon

const Wrapper = styled.div({})

const AnimateWrapper = styled(animated.div)({
  width: 66,
  height: 66,
})
