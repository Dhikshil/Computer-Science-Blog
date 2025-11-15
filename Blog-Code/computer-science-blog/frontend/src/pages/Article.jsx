import { useParams } from "react-router-dom"
import { useRef, useState } from "react";

import ARTICLES from "../../ARTICLES.js";

import DisplayComment from "../components/DisplayComments.jsx";
import DisplayCommentForm from "../components/DisplayCommentForm.jsx";

export default function ArticlePage() {
    const params = useParams();

    const [newComment, setNewComment] = useState(true);

    const article = ARTICLES[Number(params.articleId) - 1];

    const inputCommentName = useRef();
    const inputCommentComment = useRef();
    const inputCommentRating = useRef();

    function formSubmit(event) {
        event.preventDefault();

        if (
            inputCommentName.current.value.length < 5 ||
            inputCommentComment.current.value.length < 30 ||
            inputCommentComment.current.value.length > 150 ||
            inputCommentRating.current.value < 0 ||
            inputCommentRating.current.value > 5
        ) {
            return;
        } else {
            const newComment = {
                title: inputCommentName.current.value,
                id: 6,
                comment: inputCommentComment.current.value,
                rating: inputCommentRating.current.value,
                date: '2-3-4',
            };

            article.comments.push(newComment);

            inputCommentName.current.value = "";
            inputCommentComment.current.value = "";
            inputCommentRating.current.value = "";

            setNewComment(true);
        }
    }
    return(
        <h1>ARTICLE</h1>
        /*
        <main className="max-w-4xl mx-auto mt-8 text-left"> 
            <section className="my-8">
                <h1 className="mb-3 text-center font-semibold">{article.name}</h1>
                <div className="max-w-4xl mb-5">
                    <p className="text-[1.15rem] text-gray-200 ">{article.desc}</p>
                    
                </div>
                <img src={article.imgLong} className="min-w-full mb-4 mx-auto" />
                <p>{article.content}</p>
                <p className="text-[0.95rem] mt-3 text-gray-200">{article.author} | {article.date}</p>
            </section>
            
            <p className="font-semibold text-[1.45rem]">COMMENTS</p>
            
            <section className="mt-4">
                <DisplayCommentForm formSubmit={formSubmit} inputCommentName={inputCommentName} inputCommentComment={inputCommentComment} inputCommentRating={inputCommentRating} />
                <DisplayComment article={article} newComment={newComment} setNewComment={setNewComment} />
            </section>
        </main>
        */
    );
};