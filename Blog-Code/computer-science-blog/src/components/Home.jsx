import { useMemo } from 'react';

import ARTICLES from '../../ARTICLES.js'

export default function HomePage() {

  const reversedArticles = useMemo(() => {
      return [...ARTICLES].reverse();
  }, [ARTICLES]);

  const sectionArticles = [];


  return (
    <main className="max-w-4xl mx-auto text-center mt-16">
      {reversedArticles.map((article) => {
        if (article.id === ARTICLES.length) {
          return (
            <div key={article.id} className='flex m-4'>
              <div className='flex flex-col justify-between text-left'>
                <h1>{article.name}</h1>
                <p>{article.desc}</p>
                <div>
                  <p>{article.author} | {article.date}</p>
                </div>
              </div>
              <img src={article.imgLong} className='max-w-2/3' />
            </div>
          )
        } else if (article.id > ARTICLES.length - 6) {
          sectionArticles.push(article)
          {console.log(sectionArticles)}
        }
      })}
      <div className='flex items-stretch'>
        {sectionArticles.map((article) => {
          return (
            <div key={article.id} className='w-1/5 flex flex-col text-left m-2'>
              <img src={article.imgShort} className='h-24 object-cover' />
              <div className='flex flex-col flex-1 justify-between'>
                <div>
                  <h2 className='mb-1'>{article.name}</h2>
                  <p className='text-[0.65rem] mb-3'>{article.desc}</p>
                </div>
                <div className='mt-auto'>
                  <p className='text-[0.7rem]'>{article.author} | {article.date}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </main>
  )
}