export default function BlogFooter() {
    return (
        <footer className="mt-8 bg-blogs-navBackgrounds border-t border-gray-400 shadow">
            <div className="container max-w-4xl mx-auto flex py-8">

                <div className="w-full mx-auto flex flex-wrap">
                    <div className="flex w-full md:w-1/5 ">
                        <div className="px-8">
                            <img src="/static/pfp.png" className="inline-block w-30 h-30 rounded-full self-center" />
                        </div>
                    </div>
                    <div className="flex w-full md:w-1/3 ">
                        <div className="px-8">
                            <h3 className="font-bold text-blogs-titles">Zloth</h3>
                            <p className="py-4 text-blogs-texts text-sm">
                                A Cybersecurity student,<br />
                                Verified Discord Bot Developer and<br />
                                Freelance Developer.
                            </p>
                        </div>
                    </div>

                    <div className="flex w-full md:w-1/3">
                        <div className="px-8">
                            <h3 className="font-bold text-blogs-titles">Socials</h3>
                            <ul className="list-reset items-center text-sm pt-3">
                                <li>
                                    <a className="inline-block no-underline py-1 text-blogs-links hover:text-blogs-linksHover hover:text-underline" href="https://discord.com/invite/SN9K3eNCzJ">Discord</a>
                                </li>
                                <li>
                                    <a className="inline-block no-underline py-1 text-blogs-links hover:text-blogs-linksHover hover:text-underline" href="https://github.com/gavintjhxx">GitHub</a>
                                </li>
                                <li>
                                    <a className="inline-block no-underline py-1 text-blogs-links hover:text-blogs-linksHover hover:text-underline" href="https://gavintjh.me/commissions">Commissions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>



            </div>
        </footer>
    )
}