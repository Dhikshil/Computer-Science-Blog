import ARTICLES from './ARTICLES.js'

export default function searchArticles(query) {
  query = query.toLowerCase();

  return ARTICLES.filter(article =>
    article.name.toLowerCase().trim().includes(query)
  );
};

