import React from 'react'

import request from 'superagent'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      items: []
    }
  }

  componentWillMount () {
    request
      .get('../public/fruits.json')
      .accept('application/json')
      .end((err, res) => {
        this.loadedJSON(err, res)
      })
  }

  loadedJSON (err, res) {
    if (err) {
      console.log('JSON読み込みエラー')
      return
    }

    this.setState({
      items: res
    })
  }

  render () {
    if (!this.state.items) {
      return <div className='App'>現在読み込み中</div>
    }

    const options = this.state.items.map(e => {
      return (
        <option value={e.price} key={e.name}>
          {e.name}
        </option>
      )
    })

    return (
      <div className='App'>
        果物：<select>{options}</select>
      </div>
    )
  }
}

export default App
