import { Link } from "react-router";
import { useEffect } from 'react';
import Navbar from '../../components/Navbar';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function meta() {
  return [
    { title: "Noli Me Tangere - Jose Rizal" },
    { name: "description", content: "Noli Me Tangere (Touch Me Not) - A novel by Dr. Jose Rizal that exposed the abuses of the Spanish colonial government and the Catholic Church in the Philippines" },
  ];
}

export default function NoliMeTangere() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
            <Navbar />

      {/* Hero Section */}
      <div className="bg-amber-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Noli Me Tangere</h1>
            <p className="text-xl text-amber-100">Touch Me Not</p>
            <p className="mt-4 text-amber-100">Written by Dr. Jose Rizal in 1887</p>
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
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Noli Me Tangere</dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Published</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">1887, Berlin, Germany</dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Original Language</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Spanish</dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Genre</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Novel, Satire, Political fiction</dd>
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
              Noli Me Tangere is a novel written by Jose Rizal, one of the national heroes of the Philippines. 
              The novel is a scathing indictment of the Catholic Church and Spanish colonial rule in the Philippines. 
              It tells the story of Crisostomo Ibarra, a young Filipino who returns to the Philippines after studying in Europe 
              and finds himself at odds with the corrupt Spanish friars and government officials who rule his hometown.
            </p>
            <p className="mt-4 text-gray-700">
              The novel explores themes of oppression, abuse of power, and the struggle for justice and reform. 
              Through its vivid characters and dramatic plot, Noli Me Tangere exposes the social cancer plaguing 
              Philippine society during the Spanish colonial period.
            </p>
          </div>
        </div>

        {/* Characters Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Main Characters</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-amber-800">Crisostomo Ibarra</h3>
                <p className="mt-1 text-gray-600">The protagonist, a young Filipino who studied in Europe and returns to the Philippines to find his father dead and his country in the hands of corrupt officials.</p>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-amber-800">Maria Clara</h3>
                <p className="mt-1 text-gray-600">Ibarra's love interest, the beautiful daughter of Captain Tiago and the goddaughter of Father Dámaso.</p>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-amber-800">Father Dámaso</h3>
                <p className="mt-1 text-gray-600">A corrupt and cruel Spanish friar who wields significant power in San Diego.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Works Link */}
        <div className="mt-12 text-center">
          <Link 
            to="/works" 
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
          >
            ← Back to Works
          </Link>
        </div>
      </main>
    </div>
  );
}
