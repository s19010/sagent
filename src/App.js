import React from 'react'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { value: '' }
  }

  render () {
    return (
      <div>
        <form onSubmit={e => this.doSubmit(e)}>
          <input
            type='text'
            name='firstname'
            onChange={e => this.doChange(e)}
            value={this.state.value}
          />
          <input type='submit' />
        </form>
      </div>
    )
  }

  doChange (e) {
    this.setState({ value: e.target.value })
  }

  doSubmit (e) {
    e.preventDefault()
    window.alert(this.state.value)
  }
}

export default App
