import { useState } from 'react';
import { Search, Sparkles, Image, Volume2, Save, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

const AddWordForm = () => {
  const [word, setWord] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleSearch = async () => {
    if (!word.trim()) return;
    setLoading(true);
    // Giả lập gọi API (sau này thay bằng API thật)
    setTimeout(() => {
      setResult({
        word: '食べる',
        reading: 'たべる',
        meaning: 'ăn',
        example: '毎朝パンを食べます。',
        exampleTranslation: 'Mỗi sáng tôi ăn bánh mì.',
        imageUrl: null, // Ảnh minh họa nếu có
        pronunciationUrl: null,
      });
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Thêm từ mới</h1>
        <p className="text-gray-500 mt-1">Nhập từ bạn muốn học, AI sẽ làm phần còn lại.</p>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={word}
              onChange={(e) => setWord(e.target.value)}
              placeholder="Nhập từ vựng... (ví dụ: 食べる, beautiful, 苹果)"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-gray-900"
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
          </div>
          <button
            onClick={handleSearch}
            disabled={loading}
            className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all disabled:opacity-70 flex items-center gap-2"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Sparkles className="w-5 h-5" />
            )}
            {loading ? 'Đang tra...' : 'Tra cứu AI'}
          </button>
        </div>
      </div>

      {/* Kết quả trả về từ AI */}
      {result && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
        >
          {/* Phần thông tin chính */}
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Cột trái: từ & ảnh */}
              <div className="md:w-1/3">
                <div className="aspect-square bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl flex items-center justify-center mb-4 border border-indigo-100">
                  {result.imageUrl ? (
                    <img src={result.imageUrl} alt={result.word} className="rounded-2xl object-cover w-full h-full" />
                  ) : (
                    <span className="text-6xl font-bold text-indigo-400">?</span>
                  )}
                </div>
                <button className="w-full mt-2 text-sm text-indigo-600 hover:bg-indigo-50 py-2 rounded-lg flex items-center justify-center gap-1">
                  <Image className="w-4 h-4" /> Tạo ảnh minh họa
                </button>
              </div>

              {/* Cột phải: thông tin chi tiết */}
              <div className="md:w-2/3 space-y-4">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">{result.word}</h2>
                  <p className="text-lg text-indigo-600 font-medium">{result.reading}</p>
                  <p className="text-gray-700 mt-2">{result.meaning}</p>
                </div>

                {/* Phát âm */}
                <button className="flex items-center gap-2 text-indigo-600 hover:bg-indigo-50 px-4 py-2 rounded-lg transition-colors">
                  <Volume2 className="w-5 h-5" />
                  <span>Nghe phát âm</span>
                </button>

                {/* Câu ví dụ */}
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <p className="text-sm text-gray-500 mb-1">📖 Câu ví dụ (AI tạo)</p>
                  <p className="text-gray-900 font-medium">{result.example}</p>
                  <p className="text-gray-500 text-sm mt-1">{result.exampleTranslation}</p>
                </div>

                {/* Nút lưu */}
                <button className="w-full md:w-auto px-6 py-3 bg-emerald-500 text-white font-medium rounded-xl hover:bg-emerald-600 hover:shadow-lg transition-all flex items-center justify-center gap-2">
                  <Save className="w-5 h-5" />
                  Lưu vào bộ sưu tập
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default AddWordForm;