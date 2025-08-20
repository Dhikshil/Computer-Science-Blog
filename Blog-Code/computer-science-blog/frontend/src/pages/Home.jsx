import { Link } from 'react-router-dom';
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
            <Link to={`/search/${article.id}`} key={article.id} className='flex m-1 p-1 border-b-1 pb-2 border-gray-600 hover:border-gray-100 hover:m-0'>
              <div className='flex flex-col justify-between text-left'>
                <h1>{article.name}</h1>
                <p>{article.desc}</p>
                <div>
                  <p>{article.author} | {article.date}</p>
                </div>
              </div>
              <img src={article.imgLong} className='max-w-2/3' />
            </Link>
          )
        } else if (article.id > ARTICLES.length - 6) {
          sectionArticles.push(article)
        }
      })}
      <div className='flex items-stretch'>
        {sectionArticles.map((article) => {
          return (
              <Link to={`/search/${article.id}`} key={article.id} className='w-1/5 flex flex-col text-left m-2 border-b-1 border-gray-600 hover:border-gray-100'>
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
              </Link>
          )
        })}
      </div>
    </main>
  )
}