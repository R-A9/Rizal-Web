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
                              'bg-gray-100 text-blue-600',
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
                              active ? 'bg-gray-100 text-blue-600' : 'text-gray-700',
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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Legacy</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The enduring impact of Dr. Jose Rizal on Philippine history and culture
          </p>
        </div>

        <div className="bg-white shadow overflow-hidden rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="space-y-8">
              {legacyItems.map((item, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">{item.title}</h2>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Related Links */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore More</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link 
                to="/about/political-thought" 
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-2">Political Thought</h3>
                <p className="text-gray-600">Understand the philosophical foundations behind Rizal's lasting impact on the nation.</p>
              </Link>
              <Link 
                to="/about/timeline" 
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-2">Timeline</h3>
                <p className="text-gray-600">Trace the key events that shaped Rizal's legacy throughout history.</p>
              </Link>
              <Link 
                to="/about/quotes" 
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-2">Quotes</h3>
                <p className="text-gray-600">Discover powerful words that continue to inspire generations.</p>
              </Link>
              <Link 
                to="/novels/noli-me-tangere" 
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-2">Noli Me Tangere</h3>
                <p className="text-gray-600">Read the novel that sparked the revolution and cemented Rizal's legacy.</p>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
