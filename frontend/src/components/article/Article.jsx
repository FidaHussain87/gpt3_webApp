import React from 'react'
import './acticle.css'
const Article = ({ imgUrl, date, title }) => {
  return (
    <div className="gpt3__blog-container__acticle">
      <div className="gpt3__blog-container__article-image">
        <img src={imgUrl} alt="Blog" />
      </div>
      <div className="gpt3__blog-container__article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article
