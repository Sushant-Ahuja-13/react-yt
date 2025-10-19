import React from 'react'

const Card = (props) => {
  return (
    <div className="card">
        <h1>{props.bf}</h1>
        <img src="/divyaMyLove.jpg" alt="my-love" />
        <p className="para">I love u {props.gf}</p>
        <button id="btn">Love Here</button>
      </div>
  )
}

export default Card
