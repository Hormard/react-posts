import React from 'react';

export class DevByCard extends React.Component {
    render(){
        const {newsUrl, description, countComments} = this.props

        return (
        <div className='devby-card'>
            <img className="devby-card__img" src={newsUrl} alt="news" />
            <div className='devby-card__main'>
                <h3 className='devby-card__main-description'>{description}</h3>
                <p className='devby-card__main-comments'>{countComments}</p>
            </div>
        </div>
        )}
}