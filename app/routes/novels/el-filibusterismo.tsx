import type { MetaArgs } from "../+types/novels";
import { Link } from "react-router-dom";
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function meta({}: MetaArgs) {
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
      {/* Navigation Bar */}
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
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-4">
              <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2">
                Home
              </Link>
              <Link to="/works" className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2">
                Works
              </Link>

              {/* Novels Dropdown */}
              <Menu as="div" className="relative">
                <Menu.Button className="text-blue-600 font-medium px-3 py-2 flex items-center">
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
                <Menu.Button className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2 flex items-center">
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
