import { Link } from "react-router-dom";
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function meta() {
  return [
    { title: "El Filibusterismo - Jose Rizal" },
    { name: "description", content: "El Filibusterismo (The Reign of Greed) - The second novel by Dr. Jose Rizal, a sequel to Noli Me Tangere, depicting the last days of Spanish rule in the Philippines" },
  ];
}

export default function ElFilibusterismo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

      {/* Hero Section */}
      <div className="bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">El Filibusterismo</h1>
            <p className="text-xl text-blue-100">The Reign of Greed</p>
            <p className="mt-4 text-blue-100">Written by Dr. Jose Rizal in 1891</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-2xl font-semibold text-gray-900">About the Novel</h2>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Original Title</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">El Filibusterismo</dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Published</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">1891, Ghent, Belgium</dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Original Language</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Spanish</dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Genre</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Novel, Political fiction, Historical fiction</dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Preceded by</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <Link to="/novels/noli-me-tangere" className="text-blue-600 hover:text-blue-800">
                    Noli Me Tangere
                  </Link>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Summary Section */}
        <div className="mt-12 bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-2xl font-semibold text-gray-900">Summary</h2>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <p className="text-gray-700">
              El Filibusterismo is the sequel to Noli Me Tangere and the second novel written by Philippine national hero Jose Rizal. 
              The novel's dark theme contrasts with Noli Me Tangere's hopeful tone, reflecting the author's growing pessimism about 
              the possibility of reform under Spanish rule.
            </p>
            <p className="mt-4 text-gray-700">
              The story follows the return of Crisostomo Ibarra as the wealthy jeweler Simoun, who seeks to foment a revolution 
              against the Spanish colonial government. The novel explores themes of revolution, colonial oppression, and the moral 
              choices faced by individuals under a corrupt system.
            </p>
          </div>
        </div>

        {/* Characters Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Main Characters</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-blue-800">Simoun / Crisostomo Ibarra</h3>
                <p className="mt-1 text-gray-600">The protagonist, who returns as the wealthy jeweler Simoun, seeking revenge against the Spanish colonial system.</p>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-blue-800">Basilio</h3>
                <p className="mt-1 text-gray-600">A medical student and former sacristan who becomes involved in Simoun's plans.</p>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-blue-800">Father Florentino</h3>
                <p className="mt-1 text-gray-600">A Filipino priest who represents Rizal's vision of an ideal clergy, offering wisdom and moral guidance.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Works Link */}
        <div className="mt-12 text-center">
          <Link 
            to="/works" 
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            ← Back to Works
          </Link>
        </div>
      </main>
    </div>
  );
}
