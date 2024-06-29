
import React from 'react'
import './App.css'
import RubyCanvas from './components/RubyCanvas'

const App = () => {

  return (
    <>
      <div className="headline-container">
        <div id="text-behind">RUBY<br />ON RAILS<br />COURSE</div>
        <div id="text-behind-blur">RUBY<br />ON RAILS<br />COURSE</div>
        <div id="text-front">RUBY<br />ON RAILS<br />COURSE</div>
      </div>

      <div className="canvas-container" style={{width: "100vw", height: "100vh"}}>
        <RubyCanvas />
      </div>


      <div className="overlay">
        <header>
          <h1 style={{fontSize: '50px', marginTop: '10px', fontFamily: 'monospace', textAlign: 'center', color: 'white'}}>&copy; Huỳnh Vĩnh Tiến</h1>
        </header>
        <footer>
          <ul>
            <li><a href="https://zalo.me/0931103224" target="_blank"><img src="https://img.icons8.com/?size=100&id=0m71tmRjlxEe&format=png&color=000000" alt="ig-icon" /></a></li>
            <li><a href="https://github.com/hvtienprotv84" target="_blank"><img src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000" alt="ig-icon" /></a></li>
            <li><a href="https://www.facebook.com/vinhtien.huynh.77" target="_blank"><img src="https://img.icons8.com/?size=100&id=CexFs1lac6J7&format=png&color=000000" alt="ig-icon" /></a></li>
          </ul>
        </footer>
      </div>
    </>
  )
}

export default App
