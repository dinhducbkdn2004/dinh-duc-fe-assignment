import { useRef, type RefObject, useCallback } from 'react';

type UseScrollIntoViewOptions = ScrollIntoViewOptions;

interface UseScrollIntoViewReturn<T extends HTMLElement> {
  ref: RefObject<T | null>;
  scrollIntoView: (options?: UseScrollIntoViewOptions) => void;
}

export const useScrollIntoView = <
  T extends HTMLElement = HTMLDivElement,
>(): UseScrollIntoViewReturn<T> => {
  const ref = useRef<T>(null);

  const scrollIntoView = useCallback((options?: UseScrollIntoViewOptions) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        ...options,
      });
    }
  }, []);

  return {
    ref,
    scrollIntoView,
  };
};
