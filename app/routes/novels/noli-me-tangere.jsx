import { Link } from "react-router";
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Navbar from '../../components/Navbar';
import { motion } from "framer-motion";

// Background image
const heroBackground = '/images/nolimetangere-bg-full.jpg';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function meta() {
  return [
    { title: "Noli Me Tangere - Jose Rizal" },
    { name: "description", content: "Noli Me Tangere (Touch Me Not) - The groundbreaking novel by Dr. Jose Rizal that exposed the abuses of Spanish colonial rule in the Philippines" },
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

export default function NoliMeTangere() {
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
              Jose Rizal's Masterpiece
            </motion.span>
            <motion.h1 
              variants={item}
              className="text-5xl md:text-6xl font-bold mb-4 leading-tight font-serif"
            >
              Noli Me Tangere
            </motion.h1>
            <motion.p 
              variants={item}
              className="text-xl md:text-2xl text-amber-100 font-medium mb-6 font-serif italic"
            >
              Touch Me Not
            </motion.p>
            <motion.p 
              variants={item}
              className="text-lg text-amber-100 max-w-xl font-serif"
            >
              The groundbreaking 1887 novel that exposed the abuses of Spanish colonial rule in the Philippines and ignited nationalist sentiment.
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
                to="/novels/el-filibusterismo" 
                className="inline-flex items-center px-6 py-3 border border-amber-200 text-base font-medium rounded-md shadow-sm text-amber-100 hover:bg-amber-800/50 transition duration-150 font-serif"
              >
                Read El Filibusterismo
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
            <p className="text-amber-800 font-serif">1887 in Berlin, Germany</p>
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
            <p className="text-amber-800 font-serif">Political Fiction, Social Commentary</p>
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
              Noli Me Tangere is the first novel written by Philippine national hero José Rizal, exposing the injustices of Spanish colonial rule.
            </p>
          </div>
          <div className="px-6 sm:px-8 md:px-10 py-8">
            <div className="prose prose-lg max-w-none text-amber-900 font-serif">
              <p>
                <strong className="text-amber-900">Noli Me Tangere</strong> (Latin for "Touch Me Not") is an 1887 novel by José Rizal during the colonization of the Philippines by Spain. 
                The novel's title originates from the Biblical phrase "Touch me not" (John 20:17) which Rizal took as a reference to the cancer of society 
                that was not to be touched.
              </p>
              <p className="mt-4">
                Written in Spanish, the book was instrumental in creating a unified Filipino identity and consciousness, and was one of the catalysts 
                of the Philippine Revolution. The novel criticized the Catholic Church's abuses during Spanish colonization of the islands.
              </p>
              <p className="mt-4">
                The story follows the protagonist Crisostomo Ibarra as he returns to the Philippines after years abroad and attempts to reform 
                his country through education. Through Ibarra's experiences and those of other characters, Rizal paints a vivid picture of the 
                corruption and abuses under Spanish rule.
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
                    The novel that awakened Filipino nationalism and exposed the social cancer of colonial society.
                  </p>
                  <p className="text-sm text-amber-600 font-serif">- Historical Commentary</p>
                </div>
              </motion.div>
              <div className="p-8 md:p-10">
                <div className="prose prose-lg max-w-none text-amber-900 font-serif">
                  <p>
                    The novel begins with the return of Crisostomo Ibarra, a young Filipino who had been studying in Europe for seven years, to his hometown 
                    of San Diego. Ibarra is full of idealism and hopes to build a school to educate his countrymen. However, he soon discovers that his father, 
                    Don Rafael Ibarra, has died in prison under mysterious circumstances.
                  </p>
                  <p className="mt-4">
                    As Ibarra attempts to establish his school, he encounters resistance from the corrupt Spanish friars, particularly Father Damaso, who had 
                    a hand in Don Rafael's death. Ibarra also rekindles his romance with Maria Clara, his childhood sweetheart and the beautiful daughter of 
                    Captain Tiago.
                  </p>
                  <p className="mt-4">
                    The novel reaches its climax when Ibarra is excommunicated and implicated in a fake insurrection. He escapes prison with the help of Elias, 
                    a mysterious rebel, but Maria Clara is forced to enter a convent after learning a shocking secret about her parentage. The novel ends 
                    ambiguously, setting the stage for its sequel, El Filibusterismo.
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
              The novel features a rich cast of characters representing different facets of colonial Philippine society.
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
                <span className="text-amber-100 text-4xl font-serif relative z-10">C</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-2 font-serif">Crisostomo Ibarra</h3>
                <p className="text-amber-800 font-serif">
                  The idealistic protagonist who returns from Europe to reform his country through education, only to confront the harsh realities of colonial oppression.
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
                <span className="text-amber-100 text-4xl font-serif relative z-10">M</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-2 font-serif">Maria Clara</h3>
                <p className="text-amber-800 font-serif">
                  Ibarra's love interest, the beautiful and pious daughter of Captain Tiago, who represents the idealized Filipino woman of the time.
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
                <h3 className="text-xl font-bold text-amber-900 mb-2 font-serif">Father Damaso</h3>
                <p className="text-amber-800 font-serif">
                  The arrogant and corrupt Spanish friar who represents the abuses of the Catholic Church during Spanish colonial rule.
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
              <h3 className="text-xl font-semibold text-amber-900 mb-3 font-serif">Social Cancer</h3>
              <p className="text-amber-800 font-serif">
                Rizal diagnoses the ills of Philippine society under Spanish rule, particularly the corruption and abuses of the clergy and colonial government.
              </p>
            </motion.div>
            <motion.div 
              className="p-6 rounded-lg shadow border border-amber-700 hover:shadow-lg transition-shadow duration-300 bg-white" 
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              variants={item}
            >
              <h3 className="text-xl font-semibold text-amber-900 mb-3 font-serif">Colonial Abuse</h3>
              <p className="text-amber-800 font-serif">
                The novel exposes the various forms of oppression under Spanish rule, including racial discrimination, unjust taxation, and forced labor.
              </p>
            </motion.div>
            <motion.div 
              className="p-6 rounded-lg shadow border border-amber-700 hover:shadow-lg transition-shadow duration-300 bg-white" 
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              variants={item}
            >
              <h3 className="text-xl font-semibold text-amber-900 mb-3 font-serif">Education as Liberation</h3>
              <p className="text-amber-800 font-serif">
                Rizal presents education as the key to national progress and personal liberation from ignorance and oppression.
              </p>
            </motion.div>
            <motion.div 
              className="p-6 rounded-lg shadow border border-amber-700 hover:shadow-lg transition-shadow duration-300 bg-white" 
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              variants={item}
            >
              <h3 className="text-xl font-semibold text-amber-900 mb-3 font-serif">Love and Sacrifice</h3>
              <p className="text-amber-800 font-serif">
                The novel explores different forms of love - romantic, familial, and patriotic - and the sacrifices they demand.
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
          <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-4 font-serif">Noli Me Tangere Videos</h2>
          <p className="text-lg text-amber-800 mb-8 max-w-2xl mx-auto font-serif">
            Discover fascinating facts about Rizal's groundbreaking novel through these insightful videos.
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
                  src="https://www.youtube.com/embed/QFBTD3SITbE?si=mjGuk1M3SJys_nKm" 
                  title="Historical Context of Noli Me Tangere"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
                </iframe>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">NOLI ME TANGERE | A Lecture on the Life & Works of José Rizal</h3>
              <p className="text-gray-600">
                Learn about the historical context when Rizal wrote Noli Me Tangere and how it influenced Philippine nationalism.
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
                  src="https://www.youtube.com/embed/2KrXCD9ryl4?si=p9zMLokt9PaYWDRc" 
                  title="Character Analysis: Crisostomo Ibarra"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
                </iframe>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">NOLI ME TANGERE | Characters & Complete Summary</h3>
              <p className="text-gray-600">
               Dive into this engaging overview of José Rizal’s Noli Me Tangere, where we break down every key character and plot point in a clear, easy-to-follow style.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}