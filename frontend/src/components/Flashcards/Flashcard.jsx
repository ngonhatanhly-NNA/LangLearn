import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, Check, X } from 'lucide-react';

const mockCards = [
  { id: 1, front: '食べる', back: 'ăn', reading: 'たべる', example: '毎日パンを食べます。' },
  { id: 2, front: '飲む', back: 'uống', reading: 'のむ', example: '水を飲みます。' },
  { id: 3, front: '猫', back: 'con mèo', reading: 'ねこ', example: '猫が好きです。' },
];

const Flashcard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [direction, setDirection] = useState(0); // -1: left, 1: right

  const currentCard = mockCards[currentIndex];

  const handleRate = (quality) => {
    // sau này gửi lên backend
    setDirection(quality > 3 ? 1 : -1);
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % mockCards.length);
      setDirection(0);
    }, 300);
  };

  return (
    <div className="max-w-lg mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">Ôn tập thông minh</h1>
        <p className="text-gray-500 mt-1">Thẻ {currentIndex + 1}/{mockCards.length}</p>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / mockCards.length) * 100}%` }}
        ></div>
      </div>

      {/* Flashcard */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentCard.id + (isFlipped ? '-back' : '-front')}
          initial={{ opacity: 0, x: direction * 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -100 }}
          transition={{ duration: 0.3 }}
          className="perspective-1000"
        >
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className={`relative w-full h-64 md:h-72 cursor-pointer transition-transform duration-500 transform-style-3d ${
              isFlipped ? 'rotate-y-180' : ''
            }`}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Mặt trước */}
            <div
              className="absolute inset-0 backface-hidden bg-white rounded-3xl shadow-lg border border-gray-100 p-8 flex flex-col items-center justify-center"
            >
              <span className="text-5xl font-bold text-gray-900 mb-4">{currentCard.front}</span>
              <button className="flex items-center gap-1 text-indigo-500 hover:bg-indigo-50 px-4 py-2 rounded-lg">
                <Volume2 className="w-5 h-5" />
                <span>{currentCard.reading}</span>
              </button>
              <p className="text-sm text-gray-400 mt-4">Nhấn để lật</p>
            </div>

            {/* Mặt sau */}
            <div
              className="absolute inset-0 backface-hidden bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl shadow-lg border border-indigo-100 p-8 flex flex-col items-center justify-center rotate-y-180"
              style={{ backfaceVisibility: 'hidden' }}
            >
              <span className="text-3xl font-bold text-indigo-700 mb-2">{currentCard.back}</span>
              <p className="text-gray-600 text-sm italic mb-4">{currentCard.example}</p>
              <div className="flex gap-2 mt-4">
                <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-600 shadow-sm">
                  {currentCard.reading}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Nút đánh giá */}
      <div className="flex justify-center gap-3">
        <button
          onClick={() => handleRate(0)}
          className="flex items-center gap-1 px-5 py-3 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-colors font-medium"
        >
          <X className="w-4 h-4" /> Quên
        </button>
        <button
          onClick={() => handleRate(3)}
          className="flex items-center gap-1 px-5 py-3 bg-yellow-50 text-yellow-600 rounded-xl hover:bg-yellow-100 transition-colors font-medium"
        >
          Khó
        </button>
        <button
          onClick={() => handleRate(5)}
          className="flex items-center gap-1 px-5 py-3 bg-emerald-50 text-emerald-600 rounded-xl hover:bg-emerald-100 transition-colors font-medium"
        >
          <Check className="w-4 h-4" /> Dễ
        </button>
      </div>
    </div>
  );
};

export default Flashcard;