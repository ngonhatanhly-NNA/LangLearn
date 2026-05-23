import { BookOpen, Clock, TrendingUp, Target } from 'lucide-react';
import StatsCard from '../components/Dashboard/StatsCard';
import ProgressCircle from '../components/Dashboard/ProgressCircle';
import RecentWords from '../components/Dashboard/RecentWords';

const Dashboard = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Xin chào, Huy! 👋</h1>
        <p className="text-gray-500 mt-1">Tiếp tục hành trình chinh phục ngôn ngữ của bạn.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Từ đã học"
          value="128"
          icon={BookOpen}
          color="text-indigo-600"
          bgColor="bg-indigo-50"
        />
        <StatsCard
          title="Ôn hôm nay"
          value="12"
          icon={Clock}
          color="text-emerald-600"
          bgColor="bg-emerald-50"
        />
        <StatsCard
          title="Streak ngày"
          value="7 🔥"
          icon={TrendingUp}
          color="text-orange-600"
          bgColor="bg-orange-50"
        />
        <StatsCard
          title="Độ thuộc TB"
          value="68%"
          icon={Target}
          color="text-purple-600"
          bgColor="bg-purple-50"
        />
      </div>

      {/* Progress & Recent */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col items-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tiến độ tổng</h3>
            <ProgressCircle percentage={68} />
            <p className="mt-4 text-sm text-gray-500">128/200 từ đã thuộc</p>
          </div>
        </div>
        <div className="lg:col-span-2">
          <RecentWords />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;