import React from 'react'

import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className="container home">
      <div className="home__content">
        <div className="home__content-text">
          <h1>Grow your Business with <span className="name">KabirKalsi</span></h1>
          <h3 className="home__info">I am a developer, who makes amazing web applications. Want to know more? <br />  <span className="name">Click the link below!!</span></h3>
          {/* <a href="/about">Know More</a> */}
          <Link to="/about" className="nav-link">Know more</Link>
        </div>
        <div className="home__content-image">
          <img src="https://img.freepik.com/free-vector/illustrated-business-person-meditating_52683-60757.jpg?w=2000" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home