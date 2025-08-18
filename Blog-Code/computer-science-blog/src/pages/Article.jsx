import { useParams } from "react-router-dom"

import ARTICLES from "../../ARTICLES.js";

export default function ArticlePage() {
    const params = useParams();

    const article = ARTICLES[Number(params.articleId) - 1];

    return(
        <>
            <h1>{article.name}</h1>
            <p>{article.desc}</p>
            <img src={article.imgLong} />
            <p>{article.content}</p>
            <p>{article.author} | {article.date}</p>
        </>
    )
}