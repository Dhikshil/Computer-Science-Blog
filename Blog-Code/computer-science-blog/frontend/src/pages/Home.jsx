import { Link } from 'react-router-dom';

import ARTICLES from '../../ARTICLES.js'

export default function HomePage() {

  const orderedArticles = ARTICLES.sort((a, b) => b.date - a.date)

  const sectionArticles = [];

  console.log(orderedArticles)

  return (
    <main className="max-w-4xl mx-auto text-center mt-16">
      <Link to={`/search/${orderedArticles[0].id}`} key={orderedArticles[0].id} className='flex m-1 p-1 border-b-1 pb-2 border-gray-600 hover:border-gray-100'>
        <div className='flex flex-col justify-between text-left'>
          <h1>{orderedArticles[0].name}</h1>
          <p>{orderedArticles[0].desc}</p>
          <div>
            <p>{orderedArticles[0].author} | {orderedArticles[0].date.toISOString().split("T")[0]}</p>
          </div>
        </div>
        <img src={orderedArticles[0].imgLong} className='max-w-2/3' />
      </Link>

      {orderedArticles.forEach((article, index) => {
        if (index === 0) {
        } else if (index < 6) {
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
                    <p className='text-[0.7rem]'>{article.author} | {article.date.toISOString().split("T")[0]}</p>
                  </div>
                </div>
              </Link>
          )
        })}
      </div>
    </main>
  )
}