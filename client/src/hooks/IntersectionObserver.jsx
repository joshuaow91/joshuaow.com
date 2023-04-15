import { useEffect, useRef } from 'react';

const useIntersectionObserver = (onEnter, onExit, options) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onEnter(entry.target);
          } else {
            onExit(entry.target);
          }
        });
      },
      options
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [onEnter, onExit, options, ref]);

  return ref;
};

export default useIntersectionObserver;
