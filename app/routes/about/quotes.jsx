import { Link } from "react-router-dom";
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function meta() {
  return [
    { title: "Quotes - Jose Rizal" },
    { name: "description", content: "Famous quotes and sayings by Dr. Jose Rizal" },
  ];
}

export default function Quotes() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quotes = [
    {
    text: "He who does not know how to look back at where he came from will never get to his destination.",
    source: "Noli Me Tangere"
    }, 
    {
      text: "The youth is the hope of our future.",
      source: "To the Filipino Youth"
    },
    {
      text: "One only dies once, and if one does not die well, a good opportunity is lost and will not present itself again.",
      source: "Letter to Mariano Ponce"
    },
    {
      text: "I want to show to those who deprive people the right to love of country, that when we know how to sacrifice ourselves for our duties and convictions, death does not matter if one dies for those one loves – for his country and for others dear to him.",
      source: "Letter to Blumentritt"
    },
    {
      text: "The glory of saving a country is not for him who has contributed to its ruin.",
      source: "El Filibusterismo"
    },

    {
      text: "The youth is the hope of the nation.",
      source: "Jose Rizal"
    },
    {
      text: "Freedom is not given; it is fought for.",
      source: "Jose Rizal"
    },
    {
      text: "The pen is mightier than the sword.",
      source: "Jose Rizal"
    },
    {
      text: "There can be no tyrants if no one allows themselves to be oppressed.",
      source: "Jose Rizal"
    },
    {
      text: "A life not dedicated to a noble purpose is a wasted life.",
      source: "Jose Rizal"
    },

    {
      text: "Ang kabataan ang pag-asa ng bayan.",
      source: "Jose Rizal"
    },
    {
      text: "Ang kalayaan ay hindi ipinagkakaloob, ito ay ipinaglalaban.",
      source: "Jose Rizal"
    },
    {
      text: "Ang panulat ay mas makapangyarihan kaysa tabak.",
      source: "Jose Rizal"
    },
    {
      text: "Walang mang-aalipin kung walang nagpapalupig.",
      source: "Jose Rizal"
    },
    {
      text: "Ang buhay na hindi inialay sa isang dakilang layunin ay walang saysay.",
      source: "Jose Rizal"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
            <header className="bg-[#e8d8b5] shadow-lg sticky top-0 z-50 border-b-2 border-[#6b4423]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <img src="/images/profile.jpg" alt="Jose Rizal" className="w-12 h-12 rounded-full border-2 border-[#5a3a1a] shadow-inner object-cover" />
                  <span className="text-xl font-semibold text-[#4a2c11] font-serif italic tracking-wider">José Rizal</span>
                </div>
                
                <nav className="hidden md:flex space-x-20">
                  <Link 
                    to="/" 
                    className="text-[#4a2c11] hover:text-[#6b4423] font-medium px-3 py-2 font-serif italic hover:underline decoration-[#6b4423] decoration-2 transition-all duration-200"
                  >
                    Home
                  </Link>
                  <Link 
                    to="/works" 
                    className="text-[#4a2c11] hover:text-[#6b4423] font-medium px-3 py-2 font-serif italic hover:underline decoration-[#6b4423] decoration-2 transition-all duration-200"
                  >
                    Works
                  </Link>
      
                  {/* Novels Dropdown */}
                  <Menu as="div" className="relative">
                    <Menu.Button className="text-[#4a2c11] hover:text-[#6b4423] font-medium px-3 py-2 flex items-center font-serif italic group transition-all duration-200">
                      Novels
                      <ChevronDownIcon className="ml-1 h-5 w-5 text-[#6b4423] group-hover:text-[#5a3a1a] transition-transform duration-200" aria-hidden="true" />
                    </Menu.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-150"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute z-10 mt-1 w-56 origin-top-right rounded-md bg-[#e8d8b5] shadow-lg ring-1 ring-[#6b4423] ring-opacity-50 focus:outline-none border border-[#d4b98a]">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/novels/noli-me-tangere"
                                className={classNames(
                                  active ? 'bg-[#d4b98a] text-[#4a2c11]' : 'text-[#4a2c11]',
                                  'block px-4 py-2 text-sm font-serif italic'
                                )}
                              >
                                Noli Me Tangere
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/novels/el-filibusterismo"
                                className={classNames(
                                  active ? 'bg-[#d4b98a] text-[#4a2c11]' : 'text-[#4a2c11]',
                                  'block px-4 py-2 text-sm font-serif italic'
                                )}
                              >
                                El Filibusterismo
                              </Link>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
      
                  {/* About Dropdown */}
                  <Menu as="div" className="relative">
                    <Menu.Button className="text-[#4a2c11] hover:text-[#6b4423] font-medium px-3 py-2 flex items-center font-serif italic group transition-all duration-200">
                      About
                      <ChevronDownIcon className="ml-1 h-5 w-5 text-[#6b4423] group-hover:text-[#5a3a1a] transition-transform duration-200" aria-hidden="true" />
                    </Menu.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-150"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute z-10 mt-1 w-64 origin-top-right rounded-md bg-[#e8d8b5] shadow-lg ring-1 ring-[#6b4423] ring-opacity-50 focus:outline-none border border-[#d4b98a] overflow-y-auto max-h-[80vh]">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/about/biography"
                                className={classNames(
                                  active ? 'bg-[#d4b98a] text-[#4a2c11]' : 'text-[#4a2c11]',
                                  'block px-4 py-2 text-sm font-serif italic hover:bg-[#d4b98a] transition-colors duration-200'
                                )}
                              >
                                Biography
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/about/timeline"
                                className={classNames(
                                  active ? 'bg-[#d4b98a] text-[#4a2c11]' : 'text-[#4a2c11]',
                                  'block px-4 py-2 text-sm font-serif italic hover:bg-[#d4b98a] transition-colors duration-200'
                                )}
                              >
                                Timeline
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/about/political-thought"
                                className={classNames(
                                  active ? 'bg-[#d4b98a] text-[#4a2c11]' : 'text-[#4a2c11]',
                                  'block px-4 py-2 text-sm font-serif italic hover:bg-[#d4b98a] transition-colors duration-200'
                                )}
                              >
                                Political Thought
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/about/legacy"
                                className={classNames(
                                  active ? 'bg-[#d4b98a] text-[#4a2c11]' : 'text-[#4a2c11]',
                                  'block px-4 py-2 text-sm font-serif italic hover:bg-[#d4b98a] transition-colors duration-200'
                                )}
                              >
                                Legacy
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/about/quotes"
                                className={classNames(
                                  active ? 'bg-[#d4b98a] text-[#4a2c11]' : 'text-[#4a2c11]',
                                  'block px-4 py-2 text-sm font-serif italic hover:bg-[#d4b98a] transition-colors duration-200'
                                )}
                              >
                                Quotes
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/about/interview"
                                className={classNames(
                                  active ? 'bg-[#d4b98a] text-[#4a2c11]' : 'text-[#4a2c11]',
                                  'block px-4 py-2 text-sm font-serif italic hover:bg-[#d4b98a] transition-colors duration-200'
                                )}
                              >
                                Interview & Opinions
                              </Link>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </nav>
              </div>
            </header>
            
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
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#4a2c11] mb-4 drop-shadow">Famous Quotes</h1>
          <p className="text-xl text-[#4a2c11] max-w-2xl mx-auto">
            Timeless words of wisdom from Dr. Jose Rizal
          </p>
        </div>

        <div className="space-y-8">
          {quotes.map((quote, index) => (
            <div key={index} className="bg-white/50 p-6 rounded-lg shadow-md">
              <blockquote className="text-xl italic text-[#4a2c11] mb-4">
                "{quote.text}"
              </blockquote>
              <p className="text-right text-gray-500">— {quote.source}</p>
            </div>
          ))}
          
          {/* Related Links */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-[#4a2c11] mb-6">Continue Exploring</h2>
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
                to="/about/legacy" 
                className="relative p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-[#4a2c11] mb-2">Legacy</h3>
                <p className="text-[#4a2c11] pb-2">See how Rizal's words continue to shape the Philippines today.</p>
                <ArrowRightIcon className="absolute bottom-4 right-4 w-5 h-5 text-[#4a2c11]" />
              </Link>
              <Link 
                to="/about/interview" 
                className="relative p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-[#4a2c11] mb-2">Interview & Opinions</h3>
                <p className="text-[#4a2c11] pb-2">Read more about Rizal's views in his own words and others' perspectives.</p>
                <ArrowRightIcon className="absolute bottom-4 right-4 w-5 h-5 text-[#4a2c11]" />
              </Link>
              <Link 
                to="/works" 
                className="relative p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-[#4a2c11] mb-2">All Works</h3>
                <p className="text-[#4a2c11]  pb-2">Explore the complete collection of Rizal's literary works and writings.</p>
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
