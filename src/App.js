import React from 'react'
// フォームコンポーネント
const getJSON = async uri => {
  const result = await window.fetch(uri).then(res => res.json())
  return result
}

export class SimpleForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = { value: {} }
  }

  componentDidMount () {
    getJSON('https://pokeapi.co/api/v2/pokemon/ditto/').then(
      json => this.state.value
    )
  }

  render () {
    console.log()
    return <div>test</div>
  }
}

export default App
