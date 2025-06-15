import { Link } from "react-router";
import { useEffect, memo, useMemo } from 'react';
import Navbar from '../../components/Navbar';
import { classNames, perfUtils } from '../../utils';

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

  // Memoize timeline data to prevent recreation on re-renders
  const timeline = useMemo(() => [
    {
      year: "1861",
      event: "Born on June 19 in Calamba, Laguna, Philippines"
    },
    {
      year: "1877-1882", 
      event: "Studied at the University of Santo Tomas in Manila"
    },
    {
      year: "1882-1885",
      event: "Studied medicine at the Universidad Central de Madrid"
    },
    {
      year: "1887",
      event: "Published his first novel, Noli Me Tangere, in Berlin"
    },
    {
      year: "1891", 
      event: "Published his second novel, El Filibusterismo, in Ghent"
    },
    {
      year: "1892",
      event: "Founded La Liga Filipina and was arrested and exiled to Dapitan"
    },
    {
      year: "1896",
      event: "Executed by firing squad on December 30 in Manila"
    }
  ], []);

  return (
    <div className="min-h-screen bg-gray-50">
            <Navbar />

      {/* Hero Section */}
      <div className="bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Biography of Jose Rizal</h1>
            <p className="text-xl text-green-100">The Life of the Philippine National Hero</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-2xl font-semibold text-gray-900">Early Life and Education</h2>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <div className="px-4 py-5 sm:px-6">
              <p className="text-gray-700 mb-4">
                José Protasio Rizal Mercado y Alonso Realonda, widely known as José Rizal, was born on June 19, 1861, in Calamba, Philippines. 
                He was the seventh of eleven children born to Francisco Rizal Mercado and Teodora Alonso Realonda.
              </p>
              <p className="text-gray-700 mb-4">
                Rizal displayed remarkable intelligence at an early age. He learned the alphabet from his mother at the age of three and could read and write at the age of five. 
                He obtained his early education in Calamba and Biñan, Laguna, before moving to Manila to study at the Ateneo Municipal de Manila and later at the University of Santo Tomas.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-2xl font-semibold text-gray-900">Studies Abroad</h2>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <div className="px-4 py-5 sm:px-6">
              <p className="text-gray-700 mb-4">
                In 1882, Rizal left the Philippines to continue his studies in Europe. He enrolled at the Universidad Central de Madrid in Spain, 
                where he earned a degree in medicine. He also studied at the University of Paris and the University of Heidelberg in Germany.
              </p>
              <p className="text-gray-700">
                During his time in Europe, Rizal became a prolific writer and a key member of the Propaganda Movement, which sought to represent the Philippines in the Spanish Cortes and implement reforms in the colony.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-2xl font-semibold text-gray-900">Literary Works</h2>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <div className="px-4 py-5 sm:px-6">
              <p className="text-gray-700 mb-4">
                Rizal's most famous works, "Noli Me Tangere" (1887) and "El Filibusterismo" (1891), exposed the abuses of the Spanish colonial government and the Catholic Church in the Philippines. 
                These novels played a crucial role in inspiring the Philippine Revolution against Spanish rule.
              </p>
              <p className="text-gray-700">
                His writings advocated for political reforms, equality, and human rights, making him a symbol of the fight against oppression and colonialism.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-2xl font-semibold text-gray-900">Exile and Execution</h2>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <div className="px-4 py-5 sm:px-6">
              <p className="text-gray-700 mb-4">
                In 1892, Rizal returned to the Philippines and founded La Liga Filipina, a civic organization that sought to unite Filipinos and promote reforms. 
                However, the Spanish authorities saw this as a threat and exiled him to Dapitan in Mindanao.
              </p>
              <p className="text-gray-700 mb-4">
                In 1896, Rizal was arrested and charged with sedition, rebellion, and conspiracy. 
                After a brief trial, he was found guilty and sentenced to death. On December 30, 1896, at the age of 35, 
                José Rizal was executed by firing squad in Bagumbayan (now Rizal Park) in Manila.
              </p>
              <p className="text-gray-700">
                His martyrdom and writings inspired the Philippine Revolution, which eventually led to the country's independence from Spanish rule. 
                Today, Rizal is celebrated as the national hero of the Philippines, and his legacy continues to inspire Filipinos around the world.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Key Events in Rizal's Life</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <ul className="divide-y divide-gray-200">
              {timeline.map((event, index) => (
                <li key={index} className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="text-green-800 font-medium">{event.year}</span>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">{event.event}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

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
