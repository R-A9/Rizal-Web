import { Link } from "react-router";
import { TypeAnimation } from 'react-type-animation';
import { useEffect, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import { classNames, imageUtils, perfUtils } from '../utils';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const scaleUp = {
  hidden: { scale: 0.95, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export function Welcome() {
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
    <div className="min-h-screen flex flex-col bg-amber-50">
      <Navbar />

      {/* Hero Section */}
      <motion.main 
        initial="hidden"
        animate="show"
        className="min-h-screen bg-cover bg-center relative overflow-hidden"
        style={{ backgroundImage: `url('${imageSources.heroBackground}')` }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-black/30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Empty div with decorative element */}
            <div className="hidden md:block relative">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="absolute -left-20 top-1/2 transform -translate-y-1/2 w-32 h-32 border-4 border-amber-600/30 rounded-full"
              ></motion.div>
            </div>

            {/* Right side - Content */}
            <motion.div 
              variants={fadeIn}
              className="space-y-6 text-white drop-shadow-lg"
            >
              <h1 className="text-5xl md:text-7xl font-bold font-['Rosarivo'] italic">
                <TypeAnimation
                  sequence={['DR. JOSE RIZAL']}
                  wrapper="span"
                  cursor={false}
                  speed={50}
                  style={{ display: 'inline-block' }}
                />
              </h1>
              <motion.p 
                variants={fadeIn}
                transition={{ delay: 0.2 }}
                className="text-xl text-amber-300"
              >
                José Protacio Rizal Mercado y Alonzo Realonda
              </motion.p>
              <motion.p 
                variants={fadeIn}
                transition={{ delay: 0.4 }}
                className="text-lg max-w-lg leading-relaxed"
              >
                A Filipino nationalist, writer and polymath active at the end of the Spanish colonial period of the Philippines. He is considered one of the greatest heroes of the Philippines and is widely considered the greatest genius of the Malay race.
              </motion.p>
              <motion.div 
                variants={fadeIn}
                transition={{ delay: 0.6 }}
                className="pt-4"
              >
                <Link 
                  to="/about" 
                  className="inline-flex items-center px-6 py-3 border-2 border-none
             text-base font-medium rounded-md text-[#4a2c11] bg-[#d4b98a] 
             hover:bg-[#4a2c11] hover:border-amber-600 hover:text-white
             transition-all duration-300 ease-in-out 
             hover:scale-105 hover:shadow-xl hover:shadow-[#d4b98a] 
             hover:-translate-y-1"
                >
                  EXPLORE
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.main>

      {/* RA 1425 Section */}
      <motion.section 
        id="bgpic" 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{backgroundImage: `url('${imageSources.fullBackground}')`}}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Content */}
        <motion.div 
          variants={scaleUp}
          className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-12"
        >
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Left side - RA 1425 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="w-full lg:w-1/2 text-white p-6 bg-black/40 backdrop-blur-md rounded-xl border border-amber-600/30 shadow-xl"
            >
              <h2 className="text-2xl font-bold text-amber-300 mb-4">
                <TypeAnimation
                  sequence={['Republic Act No. 1425']}
                  wrapper="span"
                  cursor={false}
                  speed={50}
                  style={{ display: 'inline-block' }}
                />
              </h2>
              <div className="mb-4 min-h-[100px] text-base leading-relaxed">
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
              <p className="text-sm text-amber-200">
                <TypeAnimation
                  sequence={['Approved on June 12, 1956']}
                  wrapper="span"
                  cursor={false}
                  speed={50}
                  style={{ display: 'inline-block' }}
                />
              </p>
            </motion.div>

            {/* Right side - CHED */}
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ delay: 0.1 }}
              className="w-full lg:w-1/2 p-6 bg-black/40 backdrop-blur-md rounded-xl border border-amber-600/30 shadow-xl"
            >
              <div className="flex items-center mb-4">
                <h3 className="text-xl font-bold text-white">
                  <TypeAnimation
                    sequence={['Commission on Higher Education']}
                    wrapper="span"
                    cursor={false}
                    speed={50}
                    style={{ display: 'inline-block' }}
                  />
                </h3>
              </div>
              <div className="min-h-[100px] text-base leading-relaxed">
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
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

     {/* Image Collage with Hover-to-Text Effect */}
<motion.section 
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="relative min-h-screen overflow-hidden"
>
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <img 
      src={imageSources.rizalQuestion}
      alt="Jose Rizal Background"
      className="w-full h-full object-cover"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-black/30"></div>
  </div>

  {/* Title Section - "Did You Know?" */}
<motion.div 
  variants={fadeIn}
  className="relative z-10 pt-20 text-center"
>
  <h2 className="text-4xl md:text-5xl font-bold text-amber-50 font-serif mb-4">
    Did You Know?
  </h2>
  <div className="w-24 h-1 bg-amber-400 mx-auto mb-12"></div>
</motion.div>

{/* Content Overlay */}
<motion.div 
  variants={fadeIn}
  className="relative z-10 h-full flex flex-col md:flex-row"
>
  {/* Left Container - Rizal */}
  <motion.div 
    className="w-full md:w-1/3 h-[70vh] flex items-center justify-center p-4"
    whileHover="hover"
    whileTap="hover" // Added for mobile touch
    initial="rest"
  >
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Image */}
      <motion.img 
        src={imageSources.rizalSolo}
        alt="Jose Rizal Portrait"
        className="absolute max-w-[80%] max-h-[80%] object-contain cursor-pointer"
        loading="lazy"
        variants={{
          rest: { opacity: 1, scale: 1 },
          hover: { opacity: 0, scale: 0.95 }
        }}
        transition={{ duration: 0.3 }}
      />
      {/* Text Content */}
      <motion.div
        className="absolute bg-amber-100/90 p-8 rounded-lg max-w-[80%] border-2 border-amber-800 shadow-lg cursor-pointer"
        variants={{
          rest: { opacity: 0, y: 20 },
          hover: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-2xl font-bold text-amber-900 mb-2 font-serif">José Rizal</h3>
        <p className="text-amber-800">
          Jose Rizal is a Multilingual, Rizal was a hyperpolyglot, speaking and writing in 22 languages, including Spanish, French, German, Greek, and Latin. 
        </p>
      </motion.div>
    </div>
  </motion.div>

  {/* Middle Container - Book */}
  <motion.div 
    className="w-full md:w-1/3 h-[70vh] flex items-center justify-center p-4"
    whileHover="hover"
    whileTap="hover" // Added for mobile touch
    initial="rest"
  >
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Image */}
      <motion.img 
        src={imageSources.book}
        alt="Noli Me Tangere Book"
        className="absolute max-w-[80%] max-h-[80%] object-contain cursor-pointer"
        loading="lazy"
        variants={{
          rest: { opacity: 1, scale: 1 },
          hover: { opacity: 0, scale: 0.95 }
        }}
        transition={{ duration: 0.3 }}
      />
      {/* Text Content */}
      <motion.div
        className="absolute bg-amber-100/90 p-8 rounded-lg max-w-[80%] border-2 border-amber-800 shadow-lg cursor-pointer"
        variants={{
          rest: { opacity: 0, y: 20 },
          hover: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-2xl font-bold text-amber-900 mb-2 font-serif">Unifinished Novel</h3>
        <p className="text-amber-800">
          Rizal had Noli Me tangere and El filibusterismo, but rizal had a third, unfinished novel.
        </p>
      </motion.div>
    </div>
  </motion.div>

  {/* Right Container - Fight */}
  <motion.div 
    className="w-full md:w-1/3 h-[70vh] flex items-center justify-center p-4"
    whileHover="hover"
    whileTap="hover" // Added for mobile touch
    initial="rest"
  >
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Image */}
      <motion.img 
        src={imageSources.fight}
        alt="Philippine Revolution"
        className="absolute max-w-[80%] max-h-[80%] object-contain cursor-pointer"
        loading="lazy"
        variants={{
          rest: { opacity: 1, scale: 1 },
          hover: { opacity: 0, scale: 0.95 }
        }}
        transition={{ duration: 0.3 }}
      />
      {/* Text Content */}
      <motion.div
        className="absolute bg-amber-100/90 p-8 rounded-lg max-w-[80%] border-2 border-amber-800 shadow-lg cursor-pointer"
        variants={{
          rest: { opacity: 0, y: 20 },
          hover: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-2xl font-bold text-amber-900 mb-2 font-serif">Luna And Rizal</h3>
        <p className="text-amber-800">
          General Luna and Jose Rizal almost killed each other because of the same woman. Rizal challenged Luna to a duel but it was also interrupted because they were separated.
        </p>
      </motion.div>
    </div>
  </motion.div>
</motion.div>
</motion.section>

      {/* Genially Interactive Content */}
      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="w-full py-16 px-4 relative overflow-hidden"
        style={{
          backgroundImage: `url(${imageSources.quizBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/40 -z-10"></div>
        <motion.div 
          variants={scaleUp}
          className="max-w-5xl mx-auto relative"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white font-serif drop-shadow-lg">
            Do You Know Rizal?
          </h2>
          <div className="w-full bg-white/90 p-4 rounded-lg shadow-2xl backdrop-blur-sm">
            <div className="relative pb-[56.25%] pt-0 h-0">
              <iframe 
                title="Do you know Rizal?"
                className="absolute top-0 left-0 w-full h-full border-0 rounded-md"
                src="https://view.genial.ly/658196a63efd51001456a7b0"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}