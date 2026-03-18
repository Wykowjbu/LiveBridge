import { useState, useEffect } from 'react';

const useTheme = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Khởi tạo state ban đầu dựa trên class của thẻ html
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    checkTheme();

    // Dùng MutationObserver để theo dõi sự thay đổi class báo hiệu lúc đổi chế độ
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          checkTheme();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
    });

    return () => observer.disconnect();
  }, []);

  return isDark;
};

export default useTheme;
