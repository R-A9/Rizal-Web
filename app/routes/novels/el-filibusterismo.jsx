import { Link } from "react-router";
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Navbar from '../../components/Navbar';
import { motion } from "framer-motion";

// Background image
const heroBackground = '/images/elfilibusterismo-bg-full.webp';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function meta() {
  return [
    { title: "El Filibusterismo - Jose Rizal" },
    { name: "description", content: "El Filibusterismo (The Reign of Greed) - The second novel by Dr. Jose Rizal, a sequel to Noli Me Tangere, depicting the last days of Spanish rule in the Philippines" },
  ];
}

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8 } }
}

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function ElFilibusterismo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />

      {/* Hero Section with Vintage Design */}
      <motion.div 
        className="relative text-amber-50 overflow-hidden border-b-8 border-amber-800"
        style={{ height: '42rem' }}
        initial="hidden"
        animate="show"
        variants={fadeIn}
      >
        {/* Background Image with less opacity */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: `url(${heroBackground})`,
            opacity: 0.8
          }}
        />
        
        {/* Vintage Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-800/60 to-amber-800/40 z-0"></div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center z-10">
          <motion.div 
            className="max-w-3xl"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.span 
              variants={item}
              className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-amber-100 uppercase bg-amber-800 rounded-full border border-amber-600"
            >
              Jose Rizal's Revolutionary Work
            </motion.span>
            <motion.h1 
              variants={item}
              className="text-5xl md:text-6xl font-bold mb-4 leading-tight font-serif"
            >
              El Filibusterismo
            </motion.h1>
            <motion.p 
              variants={item}
              className="text-xl md:text-2xl text-amber-100 font-medium mb-6 font-serif italic"
            >
              The Reign of Greed
            </motion.p>
            <motion.p 
              variants={item}
              className="text-lg text-amber-100 max-w-xl font-serif"
            >
              The powerful sequel to Noli Me Tangere, written in 1891, depicting the last days of Spanish colonial rule in the Philippines.
            </motion.p>
            
            <motion.div 
              variants={item}
              className="mt-8 flex space-x-4"
            >
              <Link 
                to="#summary" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-amber-900 bg-amber-100 hover:bg-amber-50 transition duration-150 font-serif"
              >
                Explore the Novel
              </Link>
              <Link 
                to="/novels/noli-me-tangere" 
                className="inline-flex items-center px-6 py-3 border border-amber-200 text-base font-medium rounded-md shadow-sm text-amber-100 hover:bg-amber-800/50 transition duration-150 font-serif"
              >
                Read Noli Me Tangere
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Quick Facts */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
        >
          <motion.div 
            variants={item}
            className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-amber-700 hover:shadow-xl transition-shadow duration-300" 
          >
            <h3 className="text-lg font-bold text-amber-900 mb-2 font-serif">Original Publication</h3>
            <p className="text-amber-800 font-serif">1891 in Ghent, Belgium</p>
          </motion.div>
          <motion.div 
            variants={item}
            className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-amber-700 hover:shadow-xl transition-shadow duration-300" 
          >
            <h3 className="text-lg font-bold text-amber-900 mb-2 font-serif">Original Language</h3>
            <p className="text-amber-800 font-serif">Spanish</p>
          </motion.div>
          <motion.div 
            variants={item}
            className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-amber-700 hover:shadow-xl transition-shadow duration-300" 
          >
            <h3 className="text-lg font-bold text-amber-900 mb-2 font-serif">Literary Genre</h3>
            <p className="text-amber-800 font-serif">Political Fiction, Historical Fiction</p>
          </motion.div>
        </motion.div>

        {/* About the Novel */}
        <motion.div 
          className="bg-white shadow-xl rounded-lg overflow-hidden mb-16 border-2 border-amber-800" 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={slideUp}
        >
          <div className="p-6 sm:p-8 md:p-10 bg-gradient-to-r from-amber-900 to-amber-700 border-b-2 border-amber-800">
            <h2 className="text-3xl font-bold text-amber-50 font-serif">About the Novel</h2>
            <p className="mt-2 text-amber-200 max-w-3xl font-serif">
              El Filibusterismo is the second novel written by Philippine national hero José Rizal, serving as the sequel to Noli Me Tangere.
            </p>
          </div>
          <div className="px-6 sm:px-8 md:px-10 py-8">
            <div className="prose prose-lg max-w-none text-amber-900 font-serif">
              <p>
                <strong className="text-amber-900">El Filibusterismo</strong> (transl. The Filibustering), also known by its English alternative title <strong className="text-amber-900">The Reign of Greed</strong>, 
                is the second novel written by Philippine national hero José Rizal. It is the sequel to Noli Me Tangere and, like the first book, 
                was written in Spanish. It was first published in 1891 in Ghent.
              </p>
              <p className="mt-4">
                The novel's dark theme departs dramatically from the hopeful atmosphere of Noli Me Tangere. The novel, along with its predecessor, 
                was banned in some parts of the Philippines because of their portrayal of corruption and abuse by the colonial government and the 
                Catholic Church.
              </p>
              <p className="mt-4">
                The book narrates the return of the protagonist of Noli Me Tangere, Crisostomo Ibarra, as the wealthy jeweler Simoun. Disillusioned 
                by the abuses of the Spanish colonial government, Ibarra abandons his reformist ideals and instead seeks to foment a violent revolution.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Summary Section */}
        <motion.div 
          id="summary" 
          className="mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900 font-serif">Summary</h2>
            <div className="mt-2 h-1 w-20 bg-amber-600 mx-auto"></div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-amber-800">
            <div className="md:flex">
              <motion.div 
                className="md:flex-shrink-0 md:w-1/3 bg-amber-100 p-8 flex items-center justify-center border-r-2 border-amber-800"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-center">
                  <div className="text-6xl font-serif text-amber-800 mb-2">"</div>
                  <p className="italic text-amber-700 mb-4 font-serif">
                    The book is a passionate exposure of the evils of Spanish rule in the Philippines.
                  </p>
                  <p className="text-sm text-amber-600 font-serif">- Historical Commentary</p>
                </div>
              </motion.div>
              <div className="p-8 md:p-10">
                <div className="prose prose-lg max-w-none text-amber-900 font-serif">
                  <p>
                    Thirteen years after leaving the Philippines, Crisostomo Ibarra returns as Simoun, a rich jeweler sporting a beard and blue-tinted glasses, 
                    and a confidant of the Captain-General. He cynically sides with the upper classes, encouraging them to commit abuses against the masses to 
                    encourage the latter to revolt against the oppressive Spanish colonial regime.
                  </p>
                  <p className="mt-4">
                    His two reasons for instigating a revolution are at first, to rescue Maria Clara from the convent and second, to get rid of ills and evils 
                    of Philippine society. His true identity is discovered by a now grown-up Basilio while visiting the grave of his mother, Sisa, as Simoun 
                    was digging near the grave site for his buried treasures.
                  </p>
                  <p className="mt-4">
                    Simoun's revolution was aborted when he received a letter from Maria Clara who was about to die in the convent. Basilio, who was also 
                    a medical student at this time, was recruited by Simoun to help in the revolution. Basilio initially refused, but changed his mind when 
                    his sweetheart Juli was killed while trying to escape from the custody of the sacristan mayor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Characters Section */}
        <motion.div 
          className="mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900 font-serif">Main Characters</h2>
            <div className="mt-2 h-1 w-20 bg-amber-600 mx-auto"></div>
            <p className="mt-4 max-w-2xl mx-auto text-amber-800 font-serif">
              The novel features a rich cast of characters representing different facets of Philippine society under Spanish rule.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Character 1 */}
            <motion.div 
              className="rounded-lg shadow-lg overflow-hidden border-2 border-amber-800" 
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              transition={{ type: "spring", stiffness: 300 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="h-48 bg-amber-700 flex items-center justify-center relative overflow-hidden">
                <span className="text-amber-100 text-4xl font-serif relative z-10">S</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-2 font-serif">Simoun / Crisostomo Ibarra</h3>
                <p className="text-amber-800 font-serif">
                  The protagonist who returns as the wealthy jeweler Simoun, seeking revenge against the Spanish colonial system through violent revolution.
                </p>
              </div>
            </motion.div>
            
            {/* Character 2 */}
            <motion.div 
              className="rounded-lg shadow-lg overflow-hidden border-2 border-amber-800" 
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              transition={{ type: "spring", stiffness: 300 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "100px" }}
            >
              <div className="h-48 bg-amber-600 flex items-center justify-center relative overflow-hidden">
                <span className="text-amber-100 text-4xl font-serif relative z-10">B</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-2 font-serif">Basilio</h3>
                <p className="text-amber-800 font-serif">
                  The son of Sisa, now a medical student who becomes entangled in Simoun's revolutionary plot after personal tragedy strikes.
                </p>
              </div>
            </motion.div>
            
            {/* Character 3 */}
            <motion.div 
              className="rounded-lg shadow-lg overflow-hidden border-2 border-amber-800" 
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              transition={{ type: "spring", stiffness: 300 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "100px" }}
            >
              <div className="h-48 bg-amber-500 flex items-center justify-center relative overflow-hidden">
                <span className="text-amber-100 text-4xl font-serif relative z-10">F</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-2 font-serif">Father Florentino</h3>
                <p className="text-amber-800 font-serif">
                  A Filipino priest who represents Rizal's vision of an ideal clergy, offering wisdom and moral guidance in the novel's conclusion.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Themes Section */}
        <motion.div 
          className="rounded-2xl p-8 md:p-12 mb-16 border-2 border-amber-800 bg-amber-50" 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={slideUp}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-amber-900 font-serif">Major Themes</h2>
            <div className="mt-2 h-1 w-20 bg-amber-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="p-6 rounded-lg shadow border border-amber-700 hover:shadow-lg transition-shadow duration-300 bg-white" 
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              variants={item}
            >
              <h3 className="text-xl font-semibold text-amber-900 mb-3 font-serif">Colonial Oppression</h3>
              <p className="text-amber-800 font-serif">
                The novel vividly depicts the abuses of Spanish colonial rule, including corruption in government, exploitation of natives, and the complicity of the Church.
              </p>
            </motion.div>
            <motion.div 
              className="p-6 rounded-lg shadow border border-amber-700 hover:shadow-lg transition-shadow duration-300 bg-white" 
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              variants={item}
            >
              <h3 className="text-xl font-semibold text-amber-900 mb-3 font-serif">Revolution vs Reform</h3>
              <p className="text-amber-800 font-serif">
                Rizal explores the moral dilemma between peaceful reform and violent revolution as responses to oppression, a central debate in Philippine history.
              </p>
            </motion.div>
            <motion.div 
              className="p-6 rounded-lg shadow border border-amber-700 hover:shadow-lg transition-shadow duration-300 bg-white" 
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              variants={item}
            >
              <h3 className="text-xl font-semibold text-amber-900 mb-3 font-serif">Social Cancer</h3>
              <p className="text-amber-800 font-serif">
                Continuing from Noli Me Tangere, Rizal diagnoses the ills of Philippine society, showing how corruption permeates all levels of the colonial system.
              </p>
            </motion.div>
            <motion.div 
              className="p-6 rounded-lg shadow border border-amber-700 hover:shadow-lg transition-shadow duration-300 bg-white" 
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              variants={item}
            >
              <h3 className="text-xl font-semibold text-amber-900 mb-3 font-serif">Moral Choices</h3>
              <p className="text-amber-800 font-serif">
                Characters face difficult ethical decisions, highlighting the complex moral landscape under an oppressive regime and the consequences of their choices.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Video Trivia Section */}
        <motion.div 
          className="text-center py-12 rounded-2xl px-4 border-2 border-amber-800 bg-amber-50" 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-4 font-serif">El Filibusterismo Videos</h2>
          <p className="text-lg text-amber-800 mb-8 max-w-2xl mx-auto font-serif">
            Discover fascinating facts about Rizal's revolutionary novel through these insightful videos.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Video 1 */}
            <motion.div 
              className="border-amber-700 p-4 rounded-xl shadow-lg overflow-hidden bg-white"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <iframe 
                  className="w-full h-64 rounded-lg"
                  src="https://www.youtube.com/embed/GLgwe9BsIq4?si=GXby6j9-2KJPVdVt" 
                  title="Historical Context of El Filibusterismo"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
                </iframe>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">EL FILIBUSTERISMO | A Lecture on the Life & Works of José Rizal</h3>
              <p className="text-gray-600">
                Learn about the political climate when Rizal wrote El Filibusterismo and how it influenced the novel's themes.
              </p>
            </motion.div>
            
            {/* Video 2 */}
            <motion.div 
              className="border-amber-700 p-4 rounded-xl shadow-lg overflow-hidden bg-white"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <iframe 
                  className="w-full h-64 rounded-lg"
                  src="https://www.youtube.com/embed/zNNPV9aWwkU?si=DYb2rpWMOQJU9rZP" 
                  title="Character Analysis: Simoun"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
                </iframe>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">BUOD NG EL FILIBUSTERISMO | Buong Pangyayari</h3>
              <p className="text-gray-600">
                Get a full and easy-to-understand summary of El Filibusterismo, the powerful sequel to Noli Me Tangere by Dr. José Rizal. This video walks you through the entire storyline—from Simoun’s mysterious return to the tragic ending—and highlights the key characters, themes, and events.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}