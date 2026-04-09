import Link from 'next/link';
import { BookOpen, Github, ArrowRight } from 'lucide-react';

export default function LandingPage() {
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
              <Link href="/guide" className="text-sm font-medium text-gray-600 hover:text-gray-900">Study Guide</Link>
              <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-gray-900">About</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 text-center w-full max-w-5xl mx-auto">
        <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
          <BookOpen className="w-8 h-8" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
          Welcome to IT-Workshop
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mb-10">
          A comprehensive study guide application for Computer Science Viva and Lab Exam questions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Link 
            href="/guide" 
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md"
          >
            Start Studying
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
          <a 
            href="https://github.com/ATS-001/IT-Workshop" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 transition-colors shadow-sm hover:shadow-md"
          >
            <Github className="w-5 h-5 mr-2" />
            View on GitHub
          </a>
        </div>

        <div className="space-y-2 text-sm sm:text-base text-gray-500 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm w-full max-w-md">
          <p className="font-medium text-gray-800">Developed by Student of Vidya Academy of Science and Technology</p>
          <p>Created by <span className="font-semibold text-gray-900">Aaron Thalakkottor Sooraj</span></p>
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
