import ARTICLES from './ARTICLES.js'

possibleArticles = [];

function searchArticles(name) {
    ARTICLES.map((article) => {
        if (article.name.toLowerCase().includes(name)) {
            possibleArticles.push(article.id)
        }
    });
    return (possibleArticles);
};

export default searchArticles;