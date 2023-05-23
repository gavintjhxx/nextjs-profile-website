export default function BlogImage(data) {
    return (
        <img className="w-10/12 max-h-[32rem] object-scale-down bg-background rounded-lg my-8 shadow-xl mx-auto" src={data.src} alt={data.alt} data-aos="zoom-in" />
    )
}