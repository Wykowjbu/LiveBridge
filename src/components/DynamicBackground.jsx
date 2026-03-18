import React, { Suspense, lazy } from 'react';
import useTheme from '../hooks/useTheme';

// Dùng Lazy load để tối ưu dung lượng
const ColorBends = lazy(() => import('./ColorBends/ColorBends'));

const DynamicBackground = () => {
  const isDark = useTheme();

  return (
    <div className="fixed inset-0 z-0">
      {/* Fallback khi canvas đang tải */}
      <Suspense fallback={<div className="absolute inset-0 bg-[#f4f5f8] dark:bg-slate-900 transition-colors duration-700" />}>
        {isDark ? (
          // Nền tối (Dark Mode): Trống trải theo yêu cầu (chỉ dùng màu CSS kết hợp Gradient của LandingPage tĩnh)
          <div className="absolute inset-0 w-full h-full transition-colors duration-1000" />
        ) : (
          // Nền sáng (Light Mode): Color Bends
          <div className="absolute inset-0 w-full h-full opacity-0 animate-[fadeIn_1s_ease-in-out_forwards]">
            <ColorBends 
              gradientColors={[ '#FFBE7B', '#FFA3A3', '#9BBAFF', '#B59BFF', '#FFA1D2', '#FFCE70' ]}
              speed={1.2}
              density={1.5}
              strength={0.8}
            />
          </div>
        )}
      </Suspense>
    </div>
  );
};

export default DynamicBackground;
