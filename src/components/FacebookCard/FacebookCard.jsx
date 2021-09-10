import React from 'react';
import { FacebookCircle } from "./FacebookCircle"

export class FacebookCard extends React.Component {
    render(){
        const {firstName, secondName, date, post, avatarUrl, education} = this.props

        return (
        <div className='facebook-card'>
            <img src={avatarUrl} alt="user avatar" className="facebook-card__avatar" />
            <div className="facebook-card__info">
                <div className='facebook-card__info-header'>
                    <h5 className="facebook-card__info-title">{firstName} {secondName}</h5>
                    <FacebookCircle/>
                    <h5 className="gray-font">{education}</h5>
                </div>
                <p className="facebook-card__post">{post}</p>
                <div className='facebook-card__footer'>
                    <p className="facebook-card__footer-rating">Like</p>
                    <FacebookCircle/>
                    <p className="facebook-card__footer-rating">Reply</p>
                    <FacebookCircle/>
                    <p className="gray-font">{date}</p>
                </div> 
            </div>
        </div>
        )}
}

