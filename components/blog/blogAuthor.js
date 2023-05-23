export default function BlogAuthor(data) {
    return (
        <div className="flex w-full items-center font-sans px-4 py-12 mt">
            <img className="w-20 h-20 rounded-full mr-4" src="/static/pfp.png" alt="Avatar of Author" />
            <div className="flex-1 px-2">
                <p className="font-bold text-base md:text-xl leading-none mb-2">{data.author}</p>
                <p className="text-gray-600 text-xs md:text-base">{data.summary}</p>
            </div>
        </div>
    )
}