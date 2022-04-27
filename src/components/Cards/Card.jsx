import React from 'react'

const Card = (props) => {
  return (
    <div className="content__card col-md-4">
    <div className="card__head">
        <img src={props.logo} alt="Online logo" className="card__logo" />
    </div>
    <span className="card__title">{props.title}</span>
    <div className="card__line"></div>
    <span className="card__text">{props.text}</span>
</div>
  )
}

export default Card;
