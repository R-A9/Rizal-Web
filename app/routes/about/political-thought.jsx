import { Link } from "react-router-dom";
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { ArrowRightIcon } from "@heroicons/react/24/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function meta() {
  return [
    { title: "Political Thought - Jose Rizal" },
    { name: "description", content: "Explore the political philosophy and ideas of Dr. Jose Rizal, the national hero of the Philippines" },
  ];
}

export default function PoliticalThought() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const politicalIdeas = [
    {
      title: "Reforms and Assimilation",
      description: "Advocated for peaceful reforms and the assimilation of the Philippines as a province of Spain with equal rights and representation."
    },
    {
      title: "Education as Liberation",
      description: "Believed in the power of education to liberate the Filipino people from oppression and ignorance."
    },
    {
      title: "Non-Violent Resistance",
      description: "Promoted peaceful means of reform through writing and civic organizations rather than violent revolution."
    },
    {
      title: "National Identity",
      description: "Sought to awaken Filipino national consciousness and pride through his writings and example."
    },
    {
      title: "Social Justice",
      description: "Exposed the abuses of the Spanish colonial government and the Catholic Church in his novels."
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
          backgroundImage: "url('/images/rizal-political.png')",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
        className="px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-center"
      >
        <main className="w-full max-w-4xl mx-auto bg-white/80 backdrop-blur-md rounded-xl shadow-2xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#4a2c11] mb-4 drop-shadow">Political Thought</h1>
            <p className="text-xl text-[#4a2c11] max-w-2xl mx-auto">
              Exploring the political philosophy and ideas of Dr. Jose Rizal
            </p>
          </div>

          <ol className="list-decimal list-inside space-y-4 text-[#4a2c11] text-lg pl-2 mb-10">
            <li>He believed in peaceful reform instead of violent revolution.</li>
            <li>He demanded equal rights for Filipinos under Spanish law.</li>
            <li>He emphasized education as the path to national progress.</li>
            <li>He pushed for freedom of speech, press, and expression.</li>
            <li>He criticized the friars and wanted separation of church and state.</li>
            <li>He called for Filipino representation in the Spanish Cortes (Parliament).</li>
            <li>He promoted unity and national identity among Filipinos.</li>
            <li>He supported secularization and the removal of abusive religious officials.</li>
            <li>He believed the Philippines should eventually become self-governing.</li>
            <li>He used his novels, essays, and articles as tools for political awareness and reform.</li>
          </ol>

          {/* Related Links */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-[#4a2c11] mb-6">Related Content</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link 
                to="/about/legacy" 
                className="relative p-6 bg-white/90 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-[#4a2c1110] hover:border-[#4a2c11]"
              >
                <h3 className="text-xl font-semibold text-[#4a2c11] mb-2">Legacy</h3>
                <p className="text-[#4a2c11] pb-2">Discover how Rizal's political thoughts shaped Philippine history and continue to influence the nation.</p>
                <ArrowRightIcon className="absolute bottom-4 right-4 w-5 h-5 text-[#4a2c11]" />
              </Link>
              <Link 
                to="/about/timeline" 
                className="relative p-6 bg-white/90 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-[#4a2c1110] hover:border-[#4a2c11]"
              >
                <h3 className="text-xl font-semibold text-[#4a2c11] mb-2">Timeline</h3>
                <p className="text-[#4a2c11] pb-2">See how Rizal's political ideas developed throughout his life and career.</p>
                <ArrowRightIcon className="absolute bottom-4 right-4 w-5 h-5 text-[#4a2c11]" />
              </Link>
              <Link 
                to="/about/quotes" 
                className="relative p-6 bg-white/90 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-[#4a2c1110] hover:border-[#4a2c11]"
              >
                <h3 className="text-xl font-semibold text-[#4a2c11] mb-2">Quotes</h3>
                <p className="text-[#4a2c11] pb-2">Read powerful quotes that reflect Rizal's political philosophy and vision.</p>
                <ArrowRightIcon className="absolute bottom-4 right-4 w-5 h-5 text-[#4a2c11]" />
              </Link>
              <Link 
                to="/novels/el-filibusterismo" 
                className="relative p-6 bg-white/90 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-[#4a2c1110] hover:border-[#4a2c11]"
              >
                <h3 className="text-xl font-semibold text-[#4a2c11] mb-2">El Filibusterismo</h3>
                <p className="text-[#4a2c11] pb-2">Explore Rizal's second novel that delves into political themes and social issues.</p>
                <ArrowRightIcon className="absolute bottom-4 right-4 w-5 h-5 text-[#4a2c11]" />
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
