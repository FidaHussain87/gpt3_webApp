import React from 'react'
import './features.css'
import { Feature } from '../../components'
const featuresData = [
  {
    title: 'improving end distrusts instantly',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. cumque! Tempore illo dolorum iste accusantium illum! Voluptates, repellat est.',
  },
  {
    title: 'Become the tended Active',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. cumque! Tempore illo dolorum iste accusantium illum! Voluptates, repellat est.',
  },
  {
    title: 'SMS API 1000 calls free',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. cumque! Tempore illo dolorum iste accusantium illum! Voluptates, repellat est.',
  },
  {
    title: 'Instant Reply with almost negligible delay time',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. cumque! Tempore illo dolorum iste accusantium illum! Voluptates, repellat est.',
  },
]
const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is now, You just need to realize it. Step into Future today
          & make it happen
        </h1>
        <p>Request Early access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Features
