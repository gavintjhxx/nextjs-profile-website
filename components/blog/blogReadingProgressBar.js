import { useEffect, useState } from 'react';

export default function BlogReadingProgressBar() {

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const fullHeight = document.documentElement.scrollHeight;
            const footerElement = document.querySelector('footer');
            const footerOffset = footerElement.offsetTop;
            const scrollPosition = window.scrollY;
            const maxScroll = fullHeight - windowHeight;
            const currentProgress = (scrollPosition / maxScroll) * 100;
            setProgress(currentProgress);
            if (scrollPosition + windowHeight >= footerOffset) {
                setProgress(100);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="fixed bottom-0 left-0 w-full h-1 z-50">
            <div
                className="h-full bg-navbars-texts"
                style={{ width: `${progress}%` }}
            />
        </div>
    )

}