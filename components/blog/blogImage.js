export default function BlogImage(data) {
    return (
        <img class="w-10/12 max-h-[32rem] object-scale-down bg-background rounded-lg m-8 shadow-xl" src={data.src} alt={data.alt} />
    )
}