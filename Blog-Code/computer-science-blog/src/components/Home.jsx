import { useMemo } from 'react';

import ARTICLES from '../../ARTICLES.js'

export default function HomePage() {

  const reversedArticles = useMemo(() => {
      return [...ARTICLES].reverse();
  }, [ARTICLES]);


  return (
    <>
      {/* {reversed.map((article) => {
        if (article.id === 7){
          return (
            <div key={article.id}>
              <div>
                <p>{article.name}</p>
                <p>{article.desc}</p>
                <div>
                  <p>{article.author} | {article.date}</p>
                </div>
              </div>
              <img src={article.imgLong} />
            </div>
          )
        };
        if (article.id - 7 < 1) {
          return (
            <div key={article.id}> 
              <img src={article.imgShort} />
              <p>{article.name}</p>
                <p>{article.desc}</p>
                <div>
                  <p>{article.author} | {article.date}</p>
                </div>
            </div>
          )
        }
      })} */}
      {reversedArticles.map((article) => {
        if (article.id === ARTICLES.length) {
          return (
            <div key={article.id}>
              <div>
                <p>{article.name}</p>
                <p>{article.desc}</p>
                <div>
                  <p>{article.author} | {article.date}</p>
                </div>
              </div>
              <img src={article.imgLong} />
            </div>
          )
        } else if (article.id > ARTICLES.length - 6) {
          return (
            <div key={article.id}> 
              <img src={article.imgShort} />
              <p>{article.name}</p>
                <p>{article.desc}</p>
                <div>
                  <p>{article.author} | {article.date}</p>
                </div>
            </div>
          )
        }
      })}
    </>
  )
}