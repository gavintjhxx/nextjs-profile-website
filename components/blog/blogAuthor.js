export default function BlogAuthor(data) {
    return (
        <div class="flex w-full items-center font-sans px-4 py-12 mt">
            <img class="w-20 h-20 rounded-full mr-4" src="/static/pfp.png" alt="Avatar of Author" />
            <div class="flex-1 px-2">
                <p class="text-base font-bold text-base md:text-xl leading-none mb-2">{data.author}</p>
                <p class="text-gray-600 text-xs md:text-base">{data.summary}</p>
            </div>
        </div>
    )
}