import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Миттєво переміщує скрол на самий верх вікна
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;