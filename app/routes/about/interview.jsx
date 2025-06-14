import { Link } from "react-router-dom";
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid';
import { ArrowRightIcon } from "@heroicons/react/24/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function meta() {
  return [
    { title: "Interview and Opinions - Jose Rizal" },
    { name: "description", content: "Interviews and opinions about Dr. Jose Rizal from various perspectives" },
  ];
}

export default function Interview() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const interviews = [
    {
      title: "Prof. Xiao Chua's Insights",
      content: "Rizal fought with reason rather than weapons. He envisioned a well-educated and united Filipino nation, and if alive today, he would likely use digital platforms to advocate for reform.",
      source: "https://www.youtube.com/watch?app=desktop&v=7PCA7akfKGg"
    },
    {
      title: "Ambeth R. Ocampo's Discoveries",
      content: "Ocampo debunked the myth that Rizal wrote 'Sa Aking Mga Kabata'. He also discovered the unfinished novel 'Makamisa', which showcases Rizal's satirical humor. Rizal valued service and practical reforms over political titles.",
      source: "https://www.gmanetwork.com/news/lifestyle/artandculture/792168/8-lessons-you-can-learn-from-and-about-jose-rizal-according-to-historian-ambeth-ocampo/story/"
    },
    {
      title: "Dr. Resil Mojares on Rizal's Philosophy",
      content: "Rizal criticized the complacency of Filipinos and the prevalence of colonial mentality. He championed humanism, cultural pride, and the importance of education.",
      source: "https://www.goodreads.com/book/show/34941618-interrogations-in-philippine-cultural-history"
    },    
    {
      title: "Prof. Jose Victor Torres' Perspective",
      content: "Rizal's exposure to liberal ideologies in Spain deeply influenced his political views. He believed that transformation in the Philippines could be achieved through shaping national identity and spreading ideas.",
      source: ""
    },
    {
      title: "John Ray Ramos on Rizal's Legacy",
      content: "Rizal's symbolic power grew significantly after his death. He became a moral figure whose legacy inspired the revolutionary Katipunan.",
      source: ""
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
          backgroundImage: "url('/images/rizal-interviews.png')",
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
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#4a2c11] mb-4 drop-shadow">Interview and Opinions</h1>
          <p className="text-xl text-[#4a2c11] max-w-2xl mx-auto">
            Insights and perspectives on Dr. Jose Rizal's views and beliefs
          </p>
        </div>

        <div className="space-y-8">
          {interviews.map((item, index) => (
            <div key={index} className="bg-white/50 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-[#4a2c11] mb-3">{item.title}</h2>
              <p className="text-[#4a2c11] mb-3">{item.content}</p>
              {item.source ? (
                <p className="text-right text-sm">
                  <a 
                    href={item.source} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1 text-[#4a2c11]"
                  >
                    Source
                    <ArrowTopRightOnSquareIcon className="w-4 h-4 text-[#4a2c11]" aria-hidden="true" />
                  </a>
                </p>
              ) : (
                <p className="text-right text-sm text-gray-400 italic">No source available</p>
              )}
            </div>
          ))}
          
          {/* Related Links */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-[#4a2c11] mb-6">Dive Deeper</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link 
                to="/about/political-thought" 
                className="relative p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-[#4a2c11] mb-2">Political Thought</h3>
                <p className="text-[#4a2c11] pb-2">Explore the philosophical underpinnings of Rizal's views and opinions.</p>
                <ArrowRightIcon className="absolute bottom-4 right-4 w-5 h-5 text-[#4a2c11]" />
              </Link>
              <Link 
                to="/about/legacy" 
                className="relative p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-[#4a2c11] mb-2">Legacy</h3>
                <p className="text-[#4a2c11]  pb-2">Discover how Rizal's ideas continue to influence modern Philippine society.</p>
                <ArrowRightIcon className="absolute bottom-4 right-4 w-5 h-5 text-[#4a2c11]" />
              </Link>
              <Link 
                to="/about/quotes" 
                className="relative p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-[#4a2c11] mb-2">Notable Quotes</h3>
                <p className="text-[#4a2c11] pb-2">Read powerful statements that capture Rizal's thoughts and beliefs.</p>
                <ArrowRightIcon className="absolute bottom-4 right-4 w-5 h-5 text-[#4a2c11]" />
              </Link>
              <Link 
                to="/novels/el-filibusterismo" 
                className="relative p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-[#4a2c11] mb-2">El Filibusterismo</h3>
                <p className="text-[#4a2c11] pb-2">Explore Rizal's second novel that further develops his political and social commentary.</p>
                <br></br>
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
