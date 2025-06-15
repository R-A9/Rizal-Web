import { Link } from "react-router-dom";
import Navbar from '../../components/Navbar';
import { Fragment, useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Carousel from './Carousel'; 

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function meta() {
  return [
    { title: "Biography - Jose Rizal" },
    { name: "description", content: "Learn about the life and legacy of Dr. Jose Rizal, the national hero of the Philippines" },
  ];
}

const Biography = memo(() => {
  useEffect(() => {
    perfUtils.scrollToTop();
  }, []);
  const timeline = [
    // {
    //   year: "1861",
    //   event: "Born on June 19 in Calamba, Laguna, Philippines"
    // },
    // {
    //   year: "1877-1882",
    //   event: "Studied at the University of Santo Tomas in Manila"
    // },
    // {
    //   year: "1882-1885",
    //   event: "Studied medicine at the Universidad Central de Madrid"
    // },
    // {
    //   year: "1887",
    //   event: "Published Noli Me Tangere in Berlin, Germany"
    // },
    // {
    //   year: "1891",
    //   event: "Published El Filibusterismo in Ghent, Belgium"
    // },
    // {
    //   year: "1892",
    //   event: "Founded La Liga Filipina and was subsequently exiled to Dapitan"
    // },
    // {
    //   year: "1896",
    //   event: "Arrested, tried, and executed by firing squad in Manila on December 30"
    // }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
    <Navbar />
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      {/* Hero Carousel */}
      <Carousel />

        {/* Back to About Link */}
        <div className="mt-12 text-center">
          <Link 
            to="/about" 
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            ← Back to About
          </Link>
        </div>
      </main>
    </div>
  );
});

Biography.displayName = 'Biography';

export default Biography;
