import { getAllArticles } from "./src/services/articleService";

const response = await getAllArticles();
const articlesArray = response.articles || response;

const ARTICLES = articlesArray.map(article => ({
  id: article._id,
  name: article.title,
  type: [article.type],
  author: article.author?.name || article.author,
  content: article.content,
  desc: article.desc,
  date: new Date(article.updatedAt),
  imgLong: article.imageLong,
  imgShort: article.imageShort,
}));

console.log(ARTICLES)

export default ARTICLES;
