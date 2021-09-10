import React from 'react';

export class OnlinerCard extends React.Component {
    render(){
        const {theme, countComments, description, backgroundUrl} = this.props

        return (
        <div style={{background: `url(${backgroundUrl}) no-repeat center / cover`}} className='onliner-card'>
            <div className="onliner-card__header">
                <div className='onliner-card__theme'>
                    <h3 className='onliner-card__theme-info'>{theme}</h3>
                </div>
                <div className='onliner-card__comments'>
                    <h3 className='onliner-card__comments-info'>{countComments}</h3>
                </div>
            </div>
            <div className='onliner-card__main'>
                <h3 className='onliner-card__main-description'>{description}</h3>
            </div>
        </div>
        )}
}