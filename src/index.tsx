import * as React from 'react'
import * as ReactDOM from 'react-dom'

interface Props { }

const App: React.FC<Props> = () => {
  return (
    <div>Hello react</div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
