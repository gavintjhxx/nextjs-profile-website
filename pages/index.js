import Head from 'next/head'
import ProfileWidget from '../components/profileWidget';
import SocialsWidget from '../components/socialsWidget';
import { socials } from '../lib/socials';

export async function getStaticProps() {
  let props = { props: { data: { socials } } };
  return {
    props
  }
}

export default function Home({ props }) {
  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>Blogs</title>
        <meta name="description" content="Zloth's Profile Webpage" />
        <meta name="keywords" content="Zloth, Zlotherino, On Break, Zwoth" />
        <meta name="author" content="Zloth" />
        <meta name="theme-color" content="#E5E7EB" />
      </Head>
      <ProfileWidget />
      {props.data.socials.map(item => (
        <SocialsWidget
          title={item.title}
          key={item.key}
          description={item.description}
          url={item.url}
          imagePath={item.imagePath}
        />
      ))}
    </div>
  )
}
