export default function BlogFooter() {
    return (
        <footer class="bg-blogs-navBackgrounds border-t border-gray-400 shadow">
            <div class="container max-w-4xl mx-auto flex py-8">

                <div class="w-full mx-auto flex flex-wrap">
                    <div class="flex w-full md:w-1/5 ">
                        <div class="px-8">
                            <img src="/static/pfp.png" className="inline-block w-30 h-30 rounded-full self-center" />
                        </div>
                    </div>
                    <div class="flex w-full md:w-1/3 ">
                        <div class="px-8">
                            <h3 class="font-bold text-blogs-titles">Zloth</h3>
                            <p class="py-4 text-blogs-texts text-sm">
                                A developer undergoing education.<br />
                                Verified Bot Developer and<br />
                                Learning Web Development using MERN Stack.
                            </p>
                        </div>
                    </div>

                    <div class="flex w-full md:w-1/3">
                        <div class="px-8">
                            <h3 class="font-bold text-blogs-titles">Social</h3>
                            <ul class="list-reset items-center text-sm pt-3">
                                <li>
                                    <a class="inline-block text-blogs-texts no-underline py-1 text-blogs-links hover:text-blogs-linksHover hover:text-underline" href="#">Discord</a>
                                </li>
                                <li>
                                    <a class="inline-block text-blogs-texts no-underline py-1 text-blogs-links hover:text-blogs-linksHover hover:text-underline" href="#">GitHub</a>
                                </li>
                                <li>
                                    <a class="inline-block text-blogs-texts no-underline py-1 text-blogs-links hover:text-blogs-linksHover hover:text-underline" href="#">Spotify</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>



            </div>
        </footer>
    )
}