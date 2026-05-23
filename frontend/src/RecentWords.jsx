import { Clock, Volume2 } from 'lucide-react';

const mockWords = [
  { id: 1, word: '食べる', reading: 'たべる', meaning: 'ăn', lastReview: '2 giờ trước' },
  { id: 2, word: '飲む', reading: 'のむ', meaning: 'uống', lastReview: 'Hôm qua' },
  { id: 3, word: '猫', reading: 'ねこ', meaning: 'con mèo', lastReview: '2 ngày trước' },
];

const RecentWords = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Từ vừa thêm</h3>
      <div className="space-y-3">
        {mockWords.map((word) => (
          <div key={word.id} className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center">
                <span className="text-indigo-600 font-bold text-sm">あ</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">{word.word}</p>
                <p className="text-sm text-gray-500">{word.reading} - {word.meaning}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button className="p-2 text-gray-400 hover:text-indigo-500 rounded-lg hover:bg-indigo-50">
                <Volume2 className="w-4 h-4" />
              </button>
              <span className="text-xs text-gray-400 flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                {word.lastReview}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentWords;