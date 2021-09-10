import React from 'react';

export class RabotaCard extends React.Component {
    render(){
        const {job, company, city, benefits, aboutCompany, date} = this.props

        return (
        <div className='rabota-card'>
            <h3 className="rabota-card__title">{job}</h3>
            <div className="rabota-card__header">
                <p className="rabota-card__header-company">{company}</p>
                <p className="rabota-card__header-city">{city}</p>
            </div>
            <div className="rabota-card__about">
                <p className="rabota-card__about-benefits">{benefits}</p>
                <p className="rabota-card__about-description">{aboutCompany}</p>
            </div>
            <div className='rabota-card__footer'>
                <button className="rabota-card__footer-button">Откликнуться</button>
                <p className="rabota-card__footer-date">{date}</p>
            </div>
        </div>
        )}
}