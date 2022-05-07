export default function BlogLink(data) {
    return (
        <a href={data.url} className="text-blogs-links font-medium hover:text-blogs-linksHover">{data.name}</a>
    )
}