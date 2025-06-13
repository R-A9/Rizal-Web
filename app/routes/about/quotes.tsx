import type { MetaArgs } from "../+types/about";
import { Link } from "react-router-dom";
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function meta({}: MetaArgs) {
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
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar - Same as other pages */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                  JR
                </div>
                <span className="text-xl font-semibold">Jose Rizal</span>
              </Link>
            </div>
            
            <nav className="hidden md:flex space-x-4">
              <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2">
                Home
              </Link>
              <Link to="/works" className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2">
                Works
              </Link>

              {/* Novels Dropdown */}
              <Menu as="div" className="relative">
                <Menu.Button className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2 flex items-center">
                  Novels
                  <ChevronDownIcon className="ml-1 h-5 w-5" aria-hidden="true" />
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/novels/noli-me-tangere"
                            className={classNames(
                              active ? 'bg-gray-100 text-blue-600' : 'text-gray-700',
                              'block px-4 py-2 text-sm font-medium'
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
                              active ? 'bg-gray-100 text-blue-600' : 'text-gray-700',
                              'block px-4 py-2 text-sm font-medium'
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
                <Menu.Button className="text-blue-600 font-medium px-3 py-2 flex items-center">
                  About
                  <ChevronDownIcon className="ml-1 h-5 w-5" aria-hidden="true" />
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/about/biography"
                            className={classNames(
                              active ? 'bg-gray-100 text-blue-600' : 'text-gray-700',
                              'block px-4 py-2 text-sm font-medium'
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
                              active ? 'bg-gray-100 text-blue-600' : 'text-gray-700',
                              'block px-4 py-2 text-sm font-medium'
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
                              active ? 'bg-gray-100 text-blue-600' : 'text-gray-700',
                              'block px-4 py-2 text-sm font-medium'
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
                              active ? 'bg-gray-100 text-blue-600' : 'text-gray-700',
                              'block px-4 py-2 text-sm font-medium'
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
                              'bg-gray-100 text-blue-600',
                              'block px-4 py-2 text-sm font-medium'
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
                              active ? 'bg-gray-100 text-blue-600' : 'text-gray-700',
                              'block px-4 py-2 text-sm font-medium'
                            )}
                          >
                            Interview and Opinions
                          </Link>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Famous Quotes</h1>
          <p className="text-xl text-gray-600">
            Timeless words of wisdom from Dr. Jose Rizal
          </p>
        </div>

        <div className="space-y-8">
          {quotes.map((quote, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <blockquote className="text-xl italic text-gray-700 mb-4">
                "{quote.text}"
              </blockquote>
              <p className="text-right text-gray-500">— {quote.source}</p>
            </div>
          ))}
          
          {/* Related Links */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Continue Exploring</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link 
                to="/about/political-thought" 
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-2">Political Thought</h3>
                <p className="text-gray-600">Dive deeper into the ideas behind Rizal's most famous quotes and writings.</p>
              </Link>
              <Link 
                to="/about/legacy" 
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-2">Legacy</h3>
                <p className="text-gray-600">See how Rizal's words continue to shape the Philippines today.</p>
              </Link>
              <Link 
                to="/about/interview" 
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-2">Interview & Opinions</h3>
                <p className="text-gray-600">Read more about Rizal's views in his own words and others' perspectives.</p>
              </Link>
              <Link 
                to="/works" 
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-2">All Works</h3>
                <p className="text-gray-600">Explore the complete collection of Rizal's literary works and writings.</p>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
