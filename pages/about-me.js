import { useEffect } from "react"
import BlogNavbar from "../components/blog/blogNavBar"
import BlogHeader from "../components/blog/blogHeader"
import BlogAuthor from "../components/blog/blogAuthor"
import BlogDivider from "../components/blog/blogDivider"
import BlogSectionText from "../components/blog/blogSectionText"
import BlogSectionHeader from "../components/blog/blogSectionHeader"
import BlogSectionEmbed from "../components/blog/blogSectionEmbed"
import BlogFooter from "../components/blog/blogFooter"
import BlogSectionEmbedList from "../components/blog/blogSectionEmbedList"
import BlogImage from "../components/blog/blogImage"

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
                        "Hello 👋. I am Gavin, also known as Zloth, a 16 year old residing in Singapore and currently pursuing Cybersecurity as a passion, and Software Development as a hobby."
                    />
                    <BlogImage src="portfolio/coding-pic.png" alt="Coding Image"/>
                    <BlogSectionText text=
                        "I have many interests but I'll list the top few. I love programming, composing songs, playing instruments, photography and video editing!"
                    />
                    <BlogImage src="portfolio/video-editing.png" alt="Coding Image"/>

                    <BlogSectionText text=
                        "My top 3 values are Responsibility, Resilience and Empathy."
                    />
                    <BlogImage src="portfolio/values.png" alt="Coding Image"/>

                    <BlogDivider />

                    <BlogSectionHeader title="About my developer journey..." />
                    <BlogSectionText text=
                        "I started programming at the age of 12. Over the past 4 years, I have attempted several projects to hone my skills as a self-taught developer, namely:"
                    />
                    <BlogSectionEmbed text={
                        ["Discord Bots", 
                        "Web Applications", 
                        "Game Developments", 
                        "NPM Packages"].map((item) => (
                            <BlogSectionEmbedList content={item} />
                        ))
                    }/>
                    <BlogSectionText text=
                        "I have experience with:"
                    />
                    <BlogSectionEmbed text={
                        ["Javascript", 
                        "Typescript", 
                        "Go", 
                        "Node.js", 
                        "Full Stack Web Development (MERN Stack)", 
                        "NextJS (This site is built using NextJS!)", 
                        "FrontEnd Frameworks (This site's Frontend is built using tailwindcss!)"].map((item) => (
                            <BlogSectionEmbedList content={item} />
                        ))
                    }/>
                    <BlogSectionText text=
                        "Recently, I have also been working on commissions to boost my portfolio and present projects done by me for my clients. Do stay tuned for them!"
                    />

                    <BlogDivider />

                    <BlogSectionHeader title="About my passion..." />
                    <BlogSectionText text=
                        "As mentioned earlier, my passion is Cyber Security."
                    />
                    <BlogImage src="portfolio/cybersecurity.jpg" alt="Coding Image"/>
                    <BlogSectionText text=
                        "In my past 4 years of programming various projects, I realized that most projects lacked security in a way or another; NPM packages I developed had depencies that came from unknown sources, and no effort was put into ensuring the security of Websites that I made."
                    />

                    <BlogSectionText text=
                        "Growing up, I also have watched korean dramas like any other teenager would, except I would only watch those related to IT. The way shows and movies depicted hacking, although unrealistic, along with the lack of security in my projects, spiked my interest in Cyber Security and inspired me to take my first steps into it."
                    />
                    <BlogImage src="portfolio/hacking.jpg" alt="Coding Image"/>

                    <BlogSectionText text=
                        "Right now, I am undergoing a full-fledged 4-volume Cyber Security course on Udemy that covers topics ranging from basic theoretical knowledge on Cyber Security, to virtual machines, to penetration testing and much more! I also own a Cyber Certificate from SingTel's Cybersecurity Course."
                    />

                    <BlogSectionText text=
                        "Moving forward, I hope to become a Penetration Tester. Eventually, with enough experience, I also hope to be able to be promoted to a Chief Information Security Officer (CISO)."
                    />

                    <BlogDivider />

                    <BlogSectionHeader title="About my leadership journey..." />
                    <BlogSectionText text=
                        "On April of 2020, I kickstarted my 2-year service in the Student Council of the school I study in."
                    />
                    <BlogImage src="portfolio/formal-17th-council.png" alt="17th Student Council Group Photo"/>
                    <BlogSectionText text=
                        "In the Council, I served as the Vice President of the 17th Executive Committee in the latter year, leading a crew of nearly 40 councillors. Of course, with great power comes great responsibility!"
                    />
                    <BlogImage src="portfolio/17th-EXCOs.png" alt="17th Executive Committee Group Photo"/>
                    <BlogSectionText text=
                        "Over the 2 years of my leadership journey here, I have learnt countless lessons and made unforgettable memories I will cherish forever. Besides the cliche ones, here are some of the lessons I have learned:"
                    />
                    <BlogSectionEmbed text={
                        ["Public Speaking",
                        "Project Management Skills",
                        "Communication Skills",
                        "Adaptibility",
                        "Importance of Teamwork",
                        "Most importantly, the ability to inspire and grow new aspiring leaders"].map((item) => (
                            <BlogSectionEmbedList content={item} />
                        ))
                    }/>

                    <BlogDivider />

                    <BlogSectionHeader title="That's about it!" />
                    <BlogSectionText text=
                        "Thank you for reading! Do feel free to check out my socials and currently open commissions in the footer. Have a good one."
                    />

                </div>

            </div>

            <BlogFooter />

        </>
    )
}