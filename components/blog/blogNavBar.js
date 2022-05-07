export default function BlogNavbar(data) {
    return (
        <nav id="header" className="fixed w-full z-10 top-0 bg-background">
            <div id="progress" className="h-1 z-20 top-0"></div>

            <div className="w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3">

                <div className="pl-4">
                    <p className="text-blogs-titles text-base no-underline hover:no-underline font-extrabold text-xl">
                        Zlotherino's Blog
                    </p>
                </div>

                <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 md:bg-transparent z-20" id="nav-content">
                    <ul className="list-reset lg:flex justify-end flex-1 items-center">
                        <li className="mr-3">
                            <a className="inline-block text-blogs-links no-underline hover:text-blogs-linksHover py-2 px-4" href="https://discord.com/invite/SN9K3eNCzJ">Discord</a>
                        </li>
                        <li className="mr-3">
                            <a className="inline-block text-blogs-links no-underline hover:text-blogs-linksHover py-2 px-4" href="https://github.com/gavintjhxx">GitHub</a>
                        </li>
                        <li className="mr-3">
                            <a className="inline-block text-blogs-links no-underline hover:text-blogs-linksHover py-2 px-4" href="https://zloth.me/commissions">Commissions</a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}