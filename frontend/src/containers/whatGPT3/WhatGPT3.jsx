import React from 'react'
import './whatGPT3.css'
import { Feature } from '../../components'

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="whatgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT3"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ducimus quo architecto dicta! Possimus voluptatum, alias eaque quo veritatis deleniti esse doloribus, eos delectus soluta, architecto blanditiis dignissimos quasi modi?
"
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The Possibilities are beyond your Imagination
        </h1>
        <p>Explore the Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ducimus quo architecto dicta! Possimus voluptatum, alias eaque quo veritatis deleniti esse doloribus, eos delectus soluta, architecto blanditiis dignissimos quasi modi?
"
        />
        <Feature
          title="Knowledgebase"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ducimus quo architecto dicta! Possimus voluptatum, alias eaque quo veritatis deleniti esse doloribus, eos delectus soluta, architecto blanditiis dignissimos quasi modi?
"
        />
        <Feature
          title="Education"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ducimus quo architecto dicta! Possimus voluptatum, alias eaque quo veritatis deleniti esse doloribus, eos delectus soluta, architecto blanditiis dignissimos quasi modi?
"
        />
      </div>
    </div>
  )
}
export default WhatGPT3
