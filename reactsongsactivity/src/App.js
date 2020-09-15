import React from 'react'
import Card from './components/Card'


// let songs = [
//   {
//     title: 'Song 1',
//     artist: 'This Band',
//     cover: 'https://exclaim.ca/images/worst01.jpg'
//   },
//   {
//     title: 'Song 2',
//     artist: 'BAnd band',
//     cover: 'https://exclaim.ca/images/worst01.jpg'
//   },
//   {
//     title: 'Song 3',
//     artist: 'Why band',
//     cover: 'https://exclaim.ca/images/worst01.jpg'
//   },
//   {
//     title: 'Song 4',
//     artist: 'Other Band',
//     cover: 'https://exclaim.ca/images/worst01.jpg'
//   },
//   {
//     title: 'Song 5',
//     artist: 'That Band',
//     cover: 'https://exclaim.ca/images/worst01.jpg'
//   },

// ]

const App = () => {
  return (
    <>
      <h1>Hello World!</h1>
      { songs.map(song => <Card song={song} />)}
    </>
  )
}

export default App
// © 2020 GitHub, Inc.