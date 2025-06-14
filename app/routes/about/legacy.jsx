import { Link } from "react-router-dom";
import { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { ArrowRightIcon } from "@heroicons/react/24/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function meta() {
  return [
    { title: "Legacy - Jose Rizal" },
    { name: "description", content: "Explore the enduring legacy and impact of Dr. Jose Rizal on Philippine history and culture" },
  ];
}

export default function Legacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const legacyItems = [
    {
    title: "Political Ideals",
    description: "Advocated integration into Spain as a province for equal rights. Called for representation in Spanish Cortes, end of friar control, secular education. Believed in reform through education, not violence."
    },
    {
      title: "Propaganda Movement",
      description: "Group of Filipino reformists based in Europe. Wrote for La Solidaridad, promoting equality and justice. Rizal used the pen names Laong Laan and Dimasalang."
    },
    {
      title: "La Liga Filipina (1892)",
      description: "Founded upon his return to the Philippines. Aimed to promote unity, economic support, and peaceful reform. Disbanded after his arrest; inspired the radical Katipunan."
    },
    {
      title: "Martyrdom and National Hero Status",
      description: "Though not legally declared, Rizal is honored as the national hero by collective recognition. His writings and execution sparked the revolution. Immortalized through monuments, schools, and commemorations."
    },
    {
      title: "National Hero Status",
      description: "Officially declared the national hero of the Philippines through Executive Order No. 75 in 1993."
    },
    {
      title: "Rizal Day",
      description: "December 30, the anniversary of his execution, is celebrated as a national holiday in the Philippines."
    },
    {
      title: "Rizal Monument",
      description: "The Rizal Monument in Rizal Park (Luneta) serves as a symbol of Filipino nationhood and independence."
    },
    {
      title: "Rizal Law",
      description: "Republic Act 1425 mandates the teaching of Rizal's life, works, and writings in all schools."
    },
    {
      title: "Cultural Impact",
      description: "Rizal's novels and writings continue to inspire Filipino nationalism and identity."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
           <Navbar />

      {/* Main Content */}
        <div 
        style={{
          backgroundImage: "url('/images/rizal-legacy.png')",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
        className="px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-center"
      >
      <main className="w-full max-w-4xl mx-auto bg-white/50 backdrop-blur-md rounded-xl shadow-2xl p-8 md:p-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#4a2c11] mb-4 drop-shadow">Legacy</h1>
          <p className="text-xl text-[#4a2c11] max-w-2xl mx-auto">
            The enduring impact of Dr. Jose Rizal on Philippine history and culture
          </p>
        </div>

        <div className="overflow-hidden rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="space-y-8">
              {legacyItems.map((item, index) => (
                <div key={index}>
                  <h2 className="text-2xl font-semibold text-[#4a2c11]  mb-2">{item.title}</h2>
                  <p className="text-[#4a2c11] ">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Related Links */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-[#4a2c11]  mb-6">Explore More</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link 
                to="/about/political-thought" 
                className="relative p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-[#4a2c11] mb-2">Political Thought</h3>
                <p className="text-[#4a2c11] pb-2">Understand the philosophical foundations behind Rizal's lasting impact on the nation.</p>
                <ArrowRightIcon className="absolute bottom-4 right-4 w-5 h-5 text-[#4a2c11]" />
              </Link>
              <Link 
                to="/about/timeline" 
                className="relative p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-[#4a2c11] mb-2">Timeline</h3>
                <p className="text-[#4a2c11] pb-2">Trace the key events that shaped Rizal's legacy throughout history.</p>
                <ArrowRightIcon className="absolute bottom-4 right-4 w-5 h-5 text-[#4a2c11]" />
              </Link>
              <Link 
                to="/about/quotes" 
                className="relative p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-[#4a2c11] mb-2">Quotes</h3>
                <p className="text-[#4a2c11] pb-2">Discover powerful words that continue to inspire generations.</p>
                <ArrowRightIcon className="absolute bottom-4 right-4 w-5 h-5 text-[#4a2c11]" />
              </Link>
              <Link 
                to="/novels/noli-me-tangere" 
                className="relative p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-[#4a2c11] mb-2">Noli Me Tangere</h3>
                <p className="text-[#4a2c11] pb-2">Read the novel that sparked the revolution and cemented Rizal's legacy.</p>
                <ArrowRightIcon className="absolute bottom-4 right-4 w-5 h-5 text-[#4a2c11]" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      </div>
    </div>
  );
}
