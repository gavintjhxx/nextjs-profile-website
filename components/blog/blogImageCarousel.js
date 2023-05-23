import { useEffect, useState } from 'react';
import BlogImage from './blogImage';

export default function BlogImageCarousel(data) {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [delayedTransition, setDelayedTransition] = useState(false);
    const images = data.images;

    const goToPreviousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        setDelayedTransition(true);
        setTimeout(() => {
          setDelayedTransition(false);
        }, 2000);
      };
    
      const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setDelayedTransition(true);
        setTimeout(() => {
          setDelayedTransition(false);
        }, 2000);
      };
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, delayedTransition ? 5000 : 3000);
    
        return () => clearInterval(interval);
      }, [delayedTransition]);

    return (
        // <img className="w-10/12 max-h-[32rem] object-scale-down bg-background rounded-lg m-8 shadow-xl" src={data.src} alt={data.alt} data-aos="zoom-in" />
        <div>
            <div className="relative">
                <button
                    onClick={goToPreviousImage}
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 rounded-full focus:outline-none"
                    >
                    &lt;
                </button>
                <div className="w-full max-h-[32rem] overflow-hidden rounded-lg">
                  {/* <BlogImage src={images[currentImageIndex]} alt="Carousel Image"/> */}
                  <img
                    src={images[currentImageIndex]}
                    alt="Carousel Image"
                    className={`object-center w-10/12 max-h-[32rem] transition-opacity object-fit bg-background rounded-lg my-8 mx-auto shadow-xl ${
                        delayedTransition ? 'transition-opacity duration-2000' : 'transition-opacity duration-300'
                    }`}
                  />
                </div>
                <button
                    onClick={goToNextImage}
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 rounded-full focus:outline-none"
                >
                &gt;
                </button>
            </div>
        </div>
    )

}