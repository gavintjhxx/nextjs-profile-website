export default function BlogSectionEmbed(data) {
    return (
        <blockquote class="border-l-4 border-blogs-borders mb-6 mt-2 pl-8 md:pl-12">
            {data.text}
        </blockquote>
    )
}