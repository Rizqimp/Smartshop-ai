
import { useEffect, useState } from 'react';

// Animation classes for elements as they enter the viewport
export const fadeInUp = "animate-slide-up animate-once opacity-0";
export const fadeInDown = "animate-slide-down animate-once opacity-0";
export const fadeIn = "animate-fade-in animate-once opacity-0";
export const scaleIn = "animate-scale-in animate-once opacity-0";
export const floatingAnimation = "animate-float";
export const pulseAnimation = "animate-pulse-slow";

// Hook to check if element is in viewport for triggering animations
export function useInView(ref: React.RefObject<HTMLElement>, options = {}) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin: '0px',
        threshold: 0.1,
        ...options,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]);

  return isIntersecting;
}

// Hook for elements that should animate once they appear in viewport
export function useAnimateInView(
  ref: React.RefObject<HTMLElement>,
  animationClass: string = "animate-slide-up",
  options = {}
) {
  const [animated, setAnimated] = useState(false);
  const isInView = useInView(ref, options);

  useEffect(() => {
    if (isInView && !animated) {
      const element = ref.current;
      if (element) {
        element.classList.add(animationClass);
        element.classList.remove("opacity-0");
        setAnimated(true);
      }
    }
  }, [isInView, animated, animationClass, ref]);

  return animated;
}
