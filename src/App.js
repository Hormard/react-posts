import './App.css';
import React from 'react';

import { FacebookCard } from "./components/FacebookCard";
import { OnlinerCard } from './components/OnlinerCard';
import { RabotaCard } from './components/RabotaCard'
import { DevByCard } from './components/DevByCard'

const facebookData = [
  {firstName: 'Tony', 
  secondName: 'Montana', 
  date: '5 seconds ago',
  post: 'Say hello to my little friend !!!',
  avatarUrl: 'https://sun9-80.userapi.com/s/v1/if1/Kb0l9sPorrXeMHaOYGpaO0TCjABGJko4NYKCnOi4qOne_2iVNV-EJ7BujjuDzmm4U0enwA.jpg?size=200x0&quality=96&crop=0,0,428,604&ava=1', 
  education: "UCLA"
}]

  const onlinerData = [{theme: 'КОШЕЛЕК',
  countComments: '239',
  description: 'Что происходит с почтой, грузами, и доставкой валюты',
  backgroundUrl: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/269C/production/_118648890_tass_46012508.jpg'
}]

  const rabotaData = [{job: 'Junior React.js Engineer (Internship/React.js Lab)',
    company: 'ООО АйтиРекс Групп ✓', 
    city: 'Минск',
    benefits: 'Медицинское обслуживание. Онлайн-ивенты. Реферальная программа',
    aboutCompany: '10+ лет успешной работы на глобальном рынке ИТ-услуг. Какие знания и навыки нужны для старта: Базовые знания HTML...',
    date: '7 сентября'
  }]

  const devbyData = [{newsUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6BxtDJrGd4H3nCGdnlUGapOzGlZaHPC3R8w&usqp=CAU',
  description: 'Атланта и Чикаго обогнали Кремниевую долину по числу айтишных вакансий',
  countComments: '3 комментария'
}]

function App() {
  return (
    <div className="App">
      <h1>Задание 1</h1>
        {facebookData.map((item) => {
          const {firstName, secondName, date, post, avatarUrl, education} = item
          return (
            <FacebookCard firstName = {firstName}
              secondName = {secondName}
              date = {date}
              post = {post}
              avatarUrl = {avatarUrl}
              education = {education}
            /> 
          ) 
        })}
      <h1>Задание 2</h1>
        {onlinerData.map((item) => {
          const {theme, countComments, description, backgroundUrl} = item
          return (
            <OnlinerCard theme = {theme}
              countComments = {countComments}
              description = {description}
              backgroundUrl = {backgroundUrl}
            />
          )
        })}
      <h1>Задание 3</h1>
        {rabotaData.map((item) => {
          const {job, company, city, benefits, aboutCompany, date} = item
          return (
            <RabotaCard job = {job}
              company = {company}
              city = {city} 
              benefits= {benefits}
              aboutCompany = {aboutCompany}
              date = {date}
            /> 
          )
        })}
      <h1>Задание 4</h1>    
      {devbyData.map((item) => {
        const {newsUrl, description, countComments} = item
        return (
          <DevByCard newsUrl = {newsUrl} 
            description = {description}
            countComments = {countComments}
          />  
        )
      })}
    </div>
  );
}

export default App;