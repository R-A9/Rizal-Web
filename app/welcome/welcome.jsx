import { Link } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';
import { useEffect, useMemo, useCallback } from 'react';
import Navbar from '../components/Navbar';
import { classNames, imageUtils, perfUtils } from '../utils';

export function Welcome() {
  // Memoized scroll handler
  const handleScrollToTop = useCallback(() => {
    perfUtils.scrollToTop();
  }, []);

  useEffect(() => {
    handleScrollToTop();
    
    // Preload critical images immediately
    imageUtils.preloadImages(imageUtils.criticalImages, true);
    
    // Lazy load other images after a delay
    const timer = setTimeout(() => {
      const nonCriticalImages = imageUtils.allImages.filter(
        img => !imageUtils.criticalImages.includes(img)
      );
      imageUtils.preloadImages(nonCriticalImages, false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [handleScrollToTop]);

  // Memoized image sources for better performance
  const imageSources = useMemo(() => ({
    heroBackground: '/images/rizal-bg.png',
    fullBackground: '/images/rizal-bg-full.png',
    rizalSolo: '/images/rizal solo.png',
    book: '/images/bok.png',
    fight: '/images/fight.png',
    quizBackground: '/images/quizbackground.png',
    rizalQuestion: '/images/rizalquestion.png'
  }), []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <main className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url('${imageSources.heroBackground}')` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Empty div to maintain layout */}
            <div className="hidden md:block"></div>

            {/* Right side - Content */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 font-['Rosarivo'] italic">DR. JOSE RIZAL</h1>
              <p className="text-xl text-amber-600">José Protacio Rizal Mercado y Alonzo Realonda</p>
              <p className="text-lg text-gray-700 max-w-lg">
                A Filipino nationalist, writer and polymath active at the end of the Spanish colonial period of the Philippines. He is considered one of the greatest heroes of the Philippines and is widely considered the greatest genius of the Malay race.
              </p>
              <div className="pt-4">
                <Link 
                  to="/about" 
                  className="inline-flex items-center px-8 py-3 border-2 border-blue-800 text-base font-medium rounded-md text-white bg-blue-800 hover:bg-amber-700 md:py-4 md:text-lg md:px-10 transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/30"
                >
                  EXPLORE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>      {/* RA 1425 Section */}
      <section id="bgpic" className="relative min-h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage: `url('${imageSources.fullBackground}')`}}>
        {/* Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Left side - RA 1425 */}
            <div className="w-full lg:w-1/2 text-white [text-shadow:_0_2px_8px_rgb(0_0_0_/_80%)] p-6 bg-black/30 backdrop-blur-sm rounded-xl">
              <h2 className="text-2xl font-bold text-amber-300 mb-4 [text-shadow:_0_2px_4px_rgb(0_0_0_/_90%)]">
                <TypeAnimation
                  sequence={['Republic Act No. 1425']}
                  wrapper="span"
                  cursor={false}
                  speed={50}
                  style={{ display: 'inline-block' }}
                />
              </h2>
              <div className="mb-4 min-h-[100px] text-base leading-relaxed [text-shadow:_0_2px_4px_rgb(0_0_0_/_80%)]">
                <TypeAnimation
                  sequence={[
                    'An act to include in the curricula of all public and private schools, colleges and universities courses on the life, works and writings of Jose Rizal, particularly his novels Noli Me Tangere and El Filibusterismo, authorizing the printing and distribution thereof, and for other purposes.',
                    1000
                  ]}
                  wrapper="p"
                  speed={50}
                  style={{ whiteSpace: 'pre-line', display: 'block' }}
                />
              </div>
              <p className="text-sm text-amber-200 [text-shadow:_0_1px_3px_rgb(0_0_0_/_90%)]">
                <TypeAnimation
                  sequence={['Approved on June 12, 1956']}
                  wrapper="span"
                  cursor={false}
                  speed={50}
                  style={{ display: 'inline-block' }}
                />
              </p>
            </div>

            {/* Right side - CHED */}
            <div className="w-full lg:w-1/2 [text-shadow:_0_2px_8px_rgb(0_0_0_/_80%)] p-6 bg-black/30 backdrop-blur-sm rounded-xl">
              <div className="flex items-center mb-4">
                <h3 className="text-xl font-bold text-white [text-shadow:_0_2px_4px_rgb(0_0_0_/_90%)]">
                  <TypeAnimation
                    sequence={['Commission on Higher Education']}
                    wrapper="span"
                    cursor={false}
                    speed={50}
                    style={{ display: 'inline-block' }}
                  />
                </h3>
              </div>
              <div className="min-h-[100px] text-base leading-relaxed [text-shadow:_0_2px_4px_rgb(0_0_0_/_80%)]">
                <TypeAnimation
                  sequence={[
                    'This website is sponsored by the Commission on Higher Education (CHED) to help students understand the life, works, and writings of Dr. Jose Rizal, the national hero of the Philippines, and his significant contributions to Philippine history and national identity.',
                    1000
                  ]}
                  wrapper="p"
                  speed={50}
                  style={{ whiteSpace: 'pre-line', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Collage with Background */}
      <section className="relative min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={imageSources.rizalQuestion}
            alt="Jose Rizal Background"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        
        {/* Content Overlay */}
        <div className="relative z-10 h-full flex flex-col md:flex-row">
          {/* Left Container - Rizal */}
          <div className="w-full md:w-1/3 h-screen flex items-center justify-center p-4">
            <div className="transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md hover:z-10">
              <img 
                src={imageSources.rizalSolo}
                alt="Jose Rizal Portrait"
                className="max-w-[80%] max-h-[80vh] object-contain transition-all duration-300"
                loading="lazy"
              />
            </div>
          </div>

          {/* Middle Container - Book */}
          <div className="w-full md:w-1/3 h-screen flex items-center justify-center p-4">
            <div className="relative -left-8 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md hover:z-10">
              <img 
                src={imageSources.book}
                alt="Book"
                className="max-w-full max-h-[90vh] object-contain transition-all duration-300"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Container - Fight */}
          <div className="w-full md:w-1/3 h-screen flex items-center justify-center p-4">
            <div className="transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md hover:z-10">
              <img 
                src={imageSources.fight}
                alt="Fight"
                className="max-w-full max-h-[90vh] object-contain transition-all duration-300"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Genially Interactive Content */}
      <div className="w-full py-16 px-4 relative" style={{
        backgroundImage: `url(${imageSources.quizBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="absolute inset-0 bg-black/30 -z-10"></div>
        <div className="max-w-5xl mx-auto relative">
          <h2 className="text-3xl font-bold text-center mb-8 text-black font-serif drop-shadow-md">Do You Know Rizal?</h2>
          <div className="w-full bg-white/90 p-4 rounded-lg shadow-xl">
            <div className="relative pb-[56.25%] pt-0 h-0">
              <iframe 
                title="Do you know Rizal?"
                className="absolute top-0 left-0 w-full h-full border-0"
                src="https://view.genial.ly/658196a63efd51001456a7b0"
                allowFullScreen
                scrolling="yes"
                allowScriptAccess="always"
                allowNetworking="all"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
