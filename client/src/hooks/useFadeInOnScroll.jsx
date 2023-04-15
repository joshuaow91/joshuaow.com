import { useEffect, useState } from 'react';

function useFadeInOnScroll(ref) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(ref.current);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Adjust the threshold to control when the animation starts
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isVisible;
}

export default useFadeInOnScroll;
