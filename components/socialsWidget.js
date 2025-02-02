export default function SocialsWidget(item) {
    return (
        <>
            <div className="max-w-2xl px-10 py-6 my-4 mx-auto bg-blogWidget rounded-lg shadow-lg hover:bg-blogs-navBackgrounds duration-500" key={item.key}>
                <a href={item.url}><img src={item.imagePath} className="w-14 h-14 mr-5 align-middle inline-block" /></a>
                <div className="mt-2 inline-block align-middle">
                    <a href={item.url} className="text-2xl font-bold text-blogWidgetTitle hover:underline">
                        {item.title}
                    </a>
                    <p className="mt-1 text-texts">
                        {item.description}
                    </p>
                </div>
            </div>
        </>
    )
}