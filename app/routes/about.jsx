import { Link } from "react-router";
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export function meta() {
  return [
    { title: "About Jose Rizal" },
    { name: "description", content: "Learn about the life, works, and legacy of Dr. Jose Rizal, the Philippines' national hero" },
  ];
}

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const aboutSections = [
    {
      title: "Biography",
      description: "Discover the life story of Jose Rizal, from his birth in Calamba to his execution in Bagumbayan.",
      link: "/about/biography",
      color: "bg-green-600 hover:bg-green-700"
    },
    {
      title: "Timeline",
      description: "Follow the chronological events that shaped Rizal's life and his impact on Philippine history.",
      link: "/about/timeline",
      color: "bg-purple-600 hover:bg-purple-700"
    },
    {
      title: "Political Thought",
      description: "Explore Rizal's political ideas, reforms, and his vision for the Philippines.",
      link: "/about/political-thought",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      title: "Legacy",
      description: "Learn about Rizal's lasting impact on Philippine society and culture.",
      link: "/about/legacy",
      color: "bg-amber-600 hover:bg-amber-700"
    },
    {
      title: "Quotes",
      description: "Read inspiring quotes and sayings from the great hero himself.",
      link: "/about/quotes",
      color: "bg-red-600 hover:bg-red-700"
    },
    {
      title: "Interview & Opinions",
      description: "Discover what contemporaries and historians have said about Rizal.",
      link: "/about/interview",
      color: "bg-indigo-600 hover:bg-indigo-700"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-[#4a2c11] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">About Dr. Jose Rizal</h1>
            <p className="text-xl text-[#e8d8b5]">
              The Philippines' National Hero - Writer, Doctor, Patriot
            </p>
            <p className="mt-4 text-[#e8d8b5]">
              Explore the life, works, and enduring legacy of Jose Protacio Rizal Mercado y Alonso Realonda
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="mb-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              Dr. Jose Rizal (1861-1896) was a Filipino polymath, nationalist, and the most prominent advocate for 
              reform in the Philippines during the Spanish colonial era. He is considered one of the greatest heroes 
              of the Philippines and has been recommended to be so honored by an officially empaneled National Heroes Committee.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              Through his writings, particularly his novels "Noli Me Tangere" and "El Filibusterismo," Rizal exposed 
              the conditions of the Philippines under Spanish rule and inspired a generation of Filipinos to seek reform 
              and eventually independence.
            </p>
          </div>
        </div>

        {/* About Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aboutSections.map((section, index) => (
            <Link
              key={index}
              to={section.link}
              className="relative group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-md ${section.color} text-white mb-4`}>
                  <ArrowRightIcon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#4a2c11] transition-colors">
                  {section.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {section.description}
                </p>
                <div className="flex items-center text-[#4a2c11] font-medium">
                  Learn More
                  <ArrowRightIcon className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Featured Quote */}
        <div className="mt-16 bg-[#4a2c11] rounded-lg p-8 text-center">
          <blockquote className="text-white">
            <p className="text-xl italic mb-4">
              "He who does not know how to look back at where he came from will never get to his destination."
            </p>
            <footer className="text-[#e8d8b5]">
              — Dr. Jose Rizal
            </footer>
          </blockquote>
        </div>

        {/* Back to Home Link */}
        <div className="mt-12 text-center">
          <Link 
            to="/" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#4a2c11] hover:bg-[#6b4423] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4a2c11] transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
