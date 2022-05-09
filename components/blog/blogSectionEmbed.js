export default function BlogSectionEmbed(data) {
    return (
        <blockquote className="border-l-4 border-blogs-borders mb-6 mt-2 pl-8 md:pl-12 hover:border-blogs-links duration-300">
            {data.text}
        </blockquote>
    )
}