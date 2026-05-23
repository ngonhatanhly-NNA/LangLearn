const ProgressCircle = ({ percentage = 68, size = 120 }) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size/2}
          cy={size/2}
          r={radius}
          strokeWidth="8"
          stroke="#e5e7eb"
          fill="none"
        />
        <circle
          cx={size/2}
          cy={size/2}
          r={radius}
          strokeWidth="8"
          stroke="url(#gradient)"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-1000"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute mt-2 text-center">
        <span className="text-2xl font-bold text-indigo-600">{percentage}%</span>
        <p className="text-xs text-gray-400">thuộc</p>
      </div>
    </div>
  );
};

export default ProgressCircle;