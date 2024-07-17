import React, { Component } from 'react'
import Header from './components/Header'
import './App.css'
import Panel from './components/Panel'
import Result from './components/Result'

class App extends Component
{
  constructor(props)
  {
    super(props)
    this.state = {
      data: ''
    }
  }

  searchSongs = () =>
  {
    const songName = document.getElementsByClassName('input')[0].value
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '69499c265dmsh27a7c81ef97f02fp1bdb8cjsn69ec9020e85e',
        'x-rapidapi-host': 'spotify23.p.rapidapi.com'
      }
    }
    if (songName !== '')
    {
      const url = 'https://spotify23.p.rapidapi.com/search/?q=' + songName + '&type=multi&offset=0&limit=10&numberOfTopResults=5'
      fetch(url, options)
        .then(response => response.json())
        .then(data => this.setState({data: data}, () => console.log(this.state.data)))
        .catch(error => console.error(error))
    }
  }

  render()
  {
    return (
      <div className='app'>
        <Header searchSongs={this.searchSongs}/>
        <div style={{display: "flex", height:'80%'}}>
          <Panel/>
          <Result Data={this.state.data}/>
        </div>
      </div>
    )
  }
}

export default App;