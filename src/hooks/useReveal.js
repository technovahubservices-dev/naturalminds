import { useEffect, useRef } from 'react';

export function useReveal() {
  const itemsRef = useRef([]);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    itemsRef.current.forEach((node) => {
      if (node) observerRef.current?.observe(node);
    });

    return () => {
      observerRef.current?.disconnect();
      observerRef.current = null;
    };
  }, []);

  const register = (node) => {
    if (node && !itemsRef.current.includes(node)) {
      itemsRef.current.push(node);
      observerRef.current?.observe(node);
    }
  };

  return { register };
}
