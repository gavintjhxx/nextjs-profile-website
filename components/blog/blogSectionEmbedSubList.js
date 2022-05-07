export default function BlogEmbedSubList(data) {
    return (
        <ul>
            <ul>
                <li>{data.content}</li>
            </ul>
        </ul>
    )
}