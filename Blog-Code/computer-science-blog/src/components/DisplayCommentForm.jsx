export default function DisplayCommentForm({formSubmit, inputCommentName, inputCommentComment, inputCommentRating}) { 
    return(
        <form
            onSubmit={formSubmit}
            className="w-4/5 mx-auto rounded-xl p-6 bg-black/40 mb-10 space-y-4 shadow-lg"
        >
            <div className="flex flex-col">
                <label htmlFor="title" className="mb-1 text-white font-semibold">
                    Title
                </label>
                <input
                    ref={inputCommentName}
                    type="text"
                    id="title"
                    name="title"
                    defaultValue=""
                    className="p-2 rounded-md border border-gray-500 bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="body" className="mb-1 text-white font-semibold">
                    Your Opinion
                </label>
                <textarea
                    ref={inputCommentComment}
                    name="body"
                    rows={5}
                    defaultValue=""
                    className="p-2 rounded-md border border-gray-500 bg-black/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="rating" className="mb-1 text-white font-semibold">
                    Rating
                </label>
                <div className="flex justify-between">
                    <input
                        ref={inputCommentRating}
                        type="number"
                        name="rating"
                        defaultValue={0}
                        className="p-2 w-24 rounded-md border border-gray-500 bg-black/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600 transition hover:text-gray-300"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </form>
    )
}