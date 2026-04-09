import Link from 'next/link';
import { BookOpen, Mail, ExternalLink } from 'lucide-react';

// Custom LinkedIn icon since lucide-react might not have the exact brand one or we can just use a generic one
function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3 shadow-sm">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900 tracking-tight">IT-Workshop</h1>
            </Link>
            <nav className="flex space-x-4">
              <Link href="/" className="text-sm font-medium text-gray-600 hover:text-gray-900">Home</Link>
              <Link href="/guide" className="text-sm font-medium text-gray-600 hover:text-gray-900">Study Guide</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="flex-grow max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About Me</h2>
          
          <div className="space-y-8 text-lg text-gray-600">
            <p className="flex flex-col sm:flex-row items-center justify-center gap-2">
              <span>Created by</span>
              <a 
                href="https://www.linkedin.com/in/aaronts127pdz/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center bg-blue-50 px-4 py-2 rounded-full transition-colors"
              >
                Aaron Thalakkottor Sooraj
                <LinkedinIcon className="w-4 h-4 ml-2" />
              </a>
            </p>
            
            <p className="flex flex-col sm:flex-row items-center justify-center gap-2">
              <span>A part of</span>
              <a 
                href="https://hexnicai.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center bg-indigo-50 px-4 py-2 rounded-full transition-colors"
              >
                HexnicAI
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </p>

            <div className="pt-8">
              <a 
                href="mailto:aaronsooraj001@gmail.com"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center text-sm mt-auto">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2">
          <p>© 2026 HexnicAI || Part of ATS_PDZ</p>
          <p>© SINCE 2023 | ATS-PDZ</p>
          <p className="text-gray-500 text-xs tracking-wider pt-2">ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
}
