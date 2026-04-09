'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { vivaQuestions, labQuestions } from '@/lib/data';
import { BookOpen, Code, ChevronDown, CheckCircle2, RotateCcw } from 'lucide-react';

function Flashcard({ question, answer, index }: { question: string, answer: string, index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative w-full h-48 cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative preserve-3d duration-500"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col justify-center items-center text-center hover:shadow-md transition-shadow">
          <span className="absolute top-4 left-4 text-xs font-semibold text-gray-400">Q{index + 1}</span>
          <h3 className="text-lg font-medium text-gray-800">{question}</h3>
          <div className="absolute bottom-4 flex items-center text-xs text-blue-500 font-medium">
            <RotateCcw className="w-3 h-3 mr-1" /> Click to flip
          </div>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full backface-hidden bg-blue-50 rounded-xl shadow-sm border border-blue-100 p-6 flex flex-col justify-center items-center text-center rotate-y-180 overflow-y-auto">
          <span className="absolute top-4 left-4 text-xs font-semibold text-blue-400">Answer</span>
          <p className="text-base text-gray-700">{answer}</p>
        </div>
      </motion.div>
    </div>
  );
}

function AccordionItem({ item, index }: { item: any, index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl mb-4 overflow-hidden bg-white shadow-sm">
      <button
        className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-start">
          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-semibold text-sm mr-4 mt-0.5">
            {index + 1}
          </span>
          <h3 className="text-lg font-medium text-gray-900 pr-4">{item.question}</h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 text-gray-400"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 ml-12">
              {item.answer && (
                <div className="flex items-start mb-4">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              )}
              {item.code && (
                <div className="mt-4 rounded-lg overflow-hidden border border-gray-200 bg-gray-900">
                  <div className="flex items-center px-4 py-2 bg-gray-800 border-b border-gray-700">
                    <span className="text-xs font-mono text-gray-400 uppercase">{item.language}</span>
                  </div>
                  <pre className="p-4 overflow-x-auto text-sm font-mono text-gray-300">
                    <code>{item.code}</code>
                  </pre>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<'viva' | 'lab'>('viva');

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
              <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-gray-900">About</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {/* Tabs */}
        <div className="flex space-x-1 bg-gray-200/50 p-1 rounded-xl mb-8 max-w-md mx-auto">
          <button
            onClick={() => setActiveTab('viva')}
            className={`flex-1 flex items-center justify-center py-2.5 text-sm font-medium rounded-lg transition-all ${
              activeTab === 'viva' 
                ? 'bg-white text-blue-600 shadow-sm' 
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/50'
            }`}
          >
            <BookOpen className="w-4 h-4 mr-2" />
            Viva Questions
          </button>
          <button
            onClick={() => setActiveTab('lab')}
            className={`flex-1 flex items-center justify-center py-2.5 text-sm font-medium rounded-lg transition-all ${
              activeTab === 'lab' 
                ? 'bg-white text-indigo-600 shadow-sm' 
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/50'
            }`}
          >
            <Code className="w-4 h-4 mr-2" />
            Lab Exam
          </button>
        </div>

        {/* Content */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            {activeTab === 'viva' ? (
              <motion.div
                key="viva"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="mb-6 text-center">
                  <h2 className="text-2xl font-bold text-gray-900">Viva Questions ({vivaQuestions.length})</h2>
                  <p className="text-gray-500 mt-2">Click on any card to reveal the answer.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {vivaQuestions.map((q, index) => (
                    <Flashcard key={q.id} question={q.question} answer={q.answer} index={index} />
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="lab"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="mb-6 text-center">
                  <h2 className="text-2xl font-bold text-gray-900">Lab Exam Questions ({labQuestions.length})</h2>
                  <p className="text-gray-500 mt-2">Expand each question to see the detailed answer or code snippet.</p>
                </div>
                <div className="max-w-3xl mx-auto">
                  {labQuestions.map((q, index) => (
                    <AccordionItem key={q.id} item={q} index={index} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
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
