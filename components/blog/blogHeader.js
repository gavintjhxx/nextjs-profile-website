export default function BlogHeader(data) {
    return (
        <div className="font-sans mb-4">
            <p className="text-base md:text-sm text-blogs-links font-bold">&lt; <a href="/" class="text-base md:text-sm font-bold no-underline hover:underline hover:text-blogs-linksHover">BACK TO HOME</a></p>
            <h1 className="font-bold font-sans break-normal text-blogs-titles pt-2 pb-2 text-3xl md:text-4xl">{data.title}</h1>
            <p className="text-sm md:text-base font-normal text-blogs-texts">Published {data.date}</p>
            <p className="text-sm md:text-base font-normal text-blogs-texts">Approximately {data.estimatedReadingTime}</p>
        </div>
    )
}