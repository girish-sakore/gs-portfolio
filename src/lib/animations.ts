import { useSpring, animated } from '@react-spring/web';

export const useFadeIn = () => useSpring({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

export const useSlideUp = () => useSpring({
  from: { opacity: 0, transform: 'translateY(20px)' },
  to: { opacity: 1, transform: 'translateY(0px)' },
});

export const useScaleIn = () => useSpring({
  from: { opacity: 0, transform: 'scale(0.9)' },
  to: { opacity: 1, transform: 'scale(1)' },
});

export { animated };