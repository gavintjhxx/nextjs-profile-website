import { useEffect } from "react"
import BlogNavbar from "../components/blog/blogNavBar"
import BlogHeader from "../components/blog/blogHeader"
import BlogDivider from "../components/blog/blogDivider"
import BlogSectionText from "../components/blog/blogSectionText"
import BlogSectionHeader from "../components/blog/blogSectionHeader"
import BlogFooter from "../components/blog/blogFooter"
import BlogImage from "../components/blog/blogImage"
import BlogLink from "../components/blog/blogLink"

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

export default function About() {
    useEffect(() => { AOS.init({ duration: 700 }); }, []);
    return (
        <>
            <head>
                <meta name="description" content="Blog - A little bit about Zloth" />
                <meta name="keywords" content="Zloth, Zlotherino" />
                <meta name="author" content="Zloth" />
                <meta name="theme-color" content="#E5E7EB" />
                <title>About Me</title>
            </head>

            <BlogNavbar />

            <div className="container w-full md:max-w-3xl mx-auto pt-20">

                <div className="w-full px-4 md:px-6 text-xl text-blogs-texts leading-normal">

                    <BlogHeader title="About Me" date="7 May 2022" estimatedReadingTime="2 minutes, 46 seconds" />

                    <BlogSectionText text=
                        "Hi👋🏽! I am gavin, a student residing in Singapore and I am currently pursuing Cybersecurity and Software Development as a passion. I guess that makes me a tech nerd… which also means we will start off by talking about my journey in the world of Information Technology."
                    />

                    <BlogDivider />
                    <BlogSectionHeader title="About my developer journey..." />

                    <BlogImage src="portfolio/coding-pic.png" alt="Image of code on a laptop screen"/>
                    <BlogSectionText text=
                        "I started programming at the age of 13 and developed countless Discord Bots using Javascript. After about 2 years, I was officially certified as a Verified Discord Bot Developer (now known as Early Verified Bot Developer). As I had the option to select elective subjects/modules in Upper Secondary (Grade 10-11), I took up computing and eventually learned Python, which was much easier than Javascript, definitely. Along the way, I developed several versions of my personal website (the one you’re currently reading is the 4th edition, 2nd revision) and learnt a lot about web security. Eventually, I got intrigued by the stereotypical thoughts of “hacking” and decided it was something worth checking out."
                    />
                    <BlogSectionText text=
                        "This brings us to the present, where I’m currently pursuing the Diploma in Cybersecurity and Digital Forensics in Tertiary Education. Yes, hacking in real-life is very different from how movies and games portray it. It’s still pretty fun nonetheless, and it’s also an increasingly crucial aspect of our digital lives as time passes."
                    />
                    <BlogImage src="portfolio/hacking.jpg" alt="Image of a hacker in black hoodie facing 3 computer screens with hacking references on it."/>


                    <BlogDivider />
                    <BlogSectionHeader title="My hobbies and passions!" />

                    <BlogSectionText text=
                        "Technology aside, I also enjoy many other activities as hobbies and methods of self care. Starting with the longest lasting hobby, music! I enjoy playing the piano 🎹 as my main instrument, acoustic guitar 🎸 and ukulele. I have also experimented with digital music production using FL Studio, which I am still exploring (or at least, trying to 🤌🏽)."
                    />
                    <BlogImage src="portfolio/music-production-pic.png" alt="Image of a Music Production Software, FL Studio, on a laptop screen."/>
                    
                    {/* <BlogSectionText text=
                        "In the recent years, I have grown interest in the field of (Aesthetic and Minimalistic) Photography and Video Editing. Marianne Biealieu has been a BIG, BIG, and I mean REALLY BIG inspiration to me in video editing, as I really LOVE her videos. Something about the recollection of the small cozy moments in life to look back at, over nostalgic-vibe-themed songs just HITS 👏🏽."
                    /> */}
                    In the recent years, I have grown interest in the field of (Aesthetic and Minimalistic) Photography and Video Editing. <span><BlogLink url="https://www.youtube.com/@marianneBL" name="Marianne Beaulieu" /></span> has been a BIG, BIG, and I mean REALLY BIG inspiration to me in video editing, as I really LOVE her videos. Something about the recollection of the small cozy moments in life to look back at, over nostalgic-vibe-themed songs just HITS 👏🏽.
                    <BlogImage src="portfolio/video-editing.png" alt="Image of process of video editing in adobe premiere pro."/>
                    
                    <BlogSectionText text=
                        "As for photography 📷, Pinterest has definitely been of big influence in paving my journey towards this specific field (Aesthetic and Minimalistic) of photography. This field of photography brings me to places that just fits the vibes I want my life to have, like the beach, or unpopulated hidden cafes. Below are some pictures I took using just my phone’s camera from the beach, don’t expect much!"
                    />
                    <BlogImage src="portfolio/beach-1.jpg" alt="Pinterest-worthy image of a palm tree against the sky."/>
                    <BlogImage src="portfolio/beach-2.jpg" alt="Image of a tree branch laying on the sand on a beach."/>
                    <BlogImage src="portfolio/beach-3.jpg" alt="Another aesthetic image of a pink flower tree against the sky."/>

                    <BlogSectionText text=
                        "Recently, I have also discovered passion for the coffee-making process, as well as latte art, all thanks to the cafe I work at (it’s not just any cafe 👀). I guess this just shows that I like an aesthetic lifestyle. Anyhow, here are some pictures of my favourite cat 🐈 at my cafe, oreo, as well as some highlights of the latte arts that I have done."
                    />
                    <BlogImage src="portfolio/oreo-1.jpg" alt="Image of oreo, a cat, with a collar and angry face grr..."/>
                    <BlogImage src="portfolio/oreo-2.jpg" alt="Image of oreo, a cat, open mouth, ready to devour a treat."/>
                    <BlogImage src="portfolio/oreo-3.jpg" alt="Image of oreo, a cat, sticking his tongue out, as if :p"/>
                    <BlogImage src="portfolio/latte-1.jpg" alt="Image of a filled, slightly rippled heart latte art."/>
                    <BlogImage src="portfolio/latte-2.jpg" alt="Image of a ripple heart latte art."/>
                    <BlogImage src="portfolio/latte-3.jpg" alt="Image of a tulip hot chocolate art."/>

                    <BlogDivider />
                    
                    <BlogSectionText text=
                        "That’s about it, thank you for reading! Do feel free to check out my socials and currently open commissions in the below footer and have a great one!"
                    />

                </div>

            </div>

            <BlogFooter />

        </>
    )
}