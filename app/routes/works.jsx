import { Link } from "react-router-dom";
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Navbar from '../components/Navbar';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function meta() {
  return [
    { title: "Jose Rizal's Works" },
    { name: "description", content: "Explore the literary works and writings of Dr. Jose Rizal, the national hero of the Philippines" },
  ];
}

export default function Works() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
           <Navbar />
      
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-medium mb-2">Project 1</h3>
                <p className="text-gray-600">Description of project 1</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-medium mb-2">Project 2</h3>
                <p className="text-gray-600">Description of project 2</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-medium mb-2">Project 3</h3>
                <p className="text-gray-600">Description of project 3</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link to="/" className="text-blue-600 hover:text-blue-800">
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
