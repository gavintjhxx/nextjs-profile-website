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
import BlogLink from "../components/blog/blogLink"
import ToS from "../components/commissions/tos"

export default function About() {
    return (
        <>
            <head>
                <meta name="description" content="Blog - A little bit about Zloth" />
                <meta name="keywords" content="Zloth, Zlotherino" />
                <meta name="author" content="Zloth" />
                <meta name="theme-color" content="#E5E7EB" />
                <title>Commissions</title>
            </head>

            <BlogNavbar />

            <div className="container w-full md:max-w-3xl mx-auto pt-20">

                <div className="w-full px-4 md:px-6 text-xl text-blogs-texts leading-normal">

                    <BlogHeader title="Commissions" date="7 May 2022" estimatedReadingTime="2 minutes, 46 seconds" />

                    <BlogSectionHeader title="Before we dive into my Commissions..."/>
                    <BlogSectionText text=
                        "There are some useful information you'll need to know first before diving into my commissions. They are the following:"
                    />
                    <BlogSectionEmbed text={
                        ["In this document, any terms used to refer to myself (e.g. i, me, myself, etc.) would refer to Zloth (Zloth#0001)", 
                        "If you have any queries or need a quotation, feel free to clarify by DMing me.", 
                        "Any payments listed will be paid in the USD Currency.", 
                        "Any payments made involving hourly payment will mean that you agree to the trust and integrity I uphold as a freelance developer. The hours spent indicated will be the truth, and nothing but the utmost truth.",
                        "The only payment modes accepted are Cash (if you know me personally in real life) and PayPal (A $1 fee is incurred, and the PayPal link to send the amount to will be DMed to you)",
                        "Payment methods with an asterisk (*) before its contents would mean it is a mandatory fee."].map((item) => (
                            <BlogSectionEmbedList content={item} />
                        ))
                    }/>

                    <BlogDivider />

                    <BlogSectionHeader title="Terms of Service/Usage"/>
                    <BlogSectionText text=
                        "By commissioning me or using my services, you agree to the following Terms of Service/Use."
                    />
                    <ToS />

                    <BlogDivider />

                    <BlogSectionHeader title="My Commissions"/>
                    <BlogSectionText text=
                        "The following are commissions that I accept."
                    />
                    <BlogSectionEmbed text={
                        [
                            { name: "Web Development (Full Stack)", description: "I will develop a Website for you based on my capabilities.", url: "https://zloth.me/commissions-web-development" }, 
                            { name: "Custom Discord Bot", description: "I will develop a Custom Discord Bot for you.", url: "https://zloth.me/commissions/custom-discord-bot"}
                        ].map((item) => (
                            <BlogSectionEmbedList content={
                                <><BlogLink url={item.url} name={item.name}/><br />{item.description}</>
                            } />
                        ))
                    }/>

                </div>

            </div>

            <BlogFooter />

        </>
    )
}