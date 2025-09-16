// Для того чтобы новая страница по навигации окрывалась всегда с самого начала (с самого верха)
// Взято инфу с сайта https://v5.reactrouter.com/web/guides/scroll-restoration

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
