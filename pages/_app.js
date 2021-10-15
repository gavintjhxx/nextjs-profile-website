// Global styles
import 'tailwindcss/tailwind.css'
import App from 'next/app';

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

MyApp.getStaticProps = async (appContext) => {
    const appProps = await App.getStaticProps(appContext);
    return { ...appProps };
};