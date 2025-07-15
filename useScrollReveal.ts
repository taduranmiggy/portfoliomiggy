import { useEffect, useState, RefObject } from 'react';

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollReveal = (
  ref: RefObject<Element>,
  options: UseScrollRevealOptions = {}
) => {
  const [isVisible, setIsVisible] = useState(false);
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    const element = ref.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [ref, threshold, rootMargin, triggerOnce]);

  return isVisible;
};

// Staggered animations hook
export const useStaggeredReveal = (
  itemCount: number,
  delay: number = 150,
  triggerRef?: RefObject<Element>
) => {
  const [revealedItems, setRevealedItems] = useState<boolean[]>(
    new Array(itemCount).fill(false)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Trigger staggered animations
          for (let i = 0; i < itemCount; i++) {
            setTimeout(() => {
              setRevealedItems(prev => {
                const newRevealed = [...prev];
                newRevealed[i] = true;
                return newRevealed;
              });
            }, i * delay);
          }
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    const element = triggerRef?.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [itemCount, delay, triggerRef]);

  return revealedItems;
};

// Typing animation hook
export const useTypingAnimation = (
  text: string,
  speed: number = 100,
  startDelay: number = 0
) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const startTyping = () => {
      let index = 0;
      const typing = () => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1));
          index++;
          timeoutId = setTimeout(typing, speed);
        } else {
          setIsComplete(true);
        }
      };
      typing();
    };

    timeoutId = setTimeout(startTyping, startDelay);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [text, speed, startDelay]);

  return { displayedText, isComplete };
};

// Parallax scroll hook
export const useParallax = (speed: number = 0.5) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset * speed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return offset;
};

// Mouse position tracking hook
export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return mousePosition;
};

export default useScrollReveal;
