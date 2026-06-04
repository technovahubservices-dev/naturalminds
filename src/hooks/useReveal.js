import { useEffect, useRef } from 'react';

export function useReveal() {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    itemsRef.current.forEach((node) => {
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  const register = (node) => {
    if (node && !itemsRef.current.includes(node)) {
      itemsRef.current.push(node);
    }
  };

  return { register };
}
