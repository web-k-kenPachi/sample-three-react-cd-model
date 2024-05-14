import { useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from 'framer-motion';

const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const MotionTextInfiniteSkew = ({ ...props }) => {
  const { children } = props;
  const baseVelocity = 5;

  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const skewVelocity = useSpring(scrollVelocity, {
    stiffness: 100,
    damping: 30,
  });

  const skewVelocityFactor = useTransform(
    skewVelocity,
    [-1000, 1000],
    [-30, 30],
  );

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * スクロール時の方向を制御
     *
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <motion.div style={{ x }} className="flex items-center">
      <motion.span style={{ skew: skewVelocityFactor }} className="px-20">
        {children}
      </motion.span>
      <motion.span style={{ skew: skewVelocityFactor }} className="px-20">
        {children}
      </motion.span>
      <motion.span style={{ skew: skewVelocityFactor }} className="px-20">
        {children}
      </motion.span>
      <motion.span style={{ skew: skewVelocityFactor }} className="px-20">
        {children}
      </motion.span>
    </motion.div>
  );
};

export const MotionTextFeature = () => {
  return (
    <div className="absolute top-1/2 z-10 -translate-y-1/2 text-nowrap font-Anton  text-[26vw] tracking-wide text-white">
      <MotionTextInfiniteSkew>Feature</MotionTextInfiniteSkew>
    </div>
  );
};

export const MotionTextMeloEmo = () => {
  return (
    <div className="absolute top-[50vh] -z-[1] flex -rotate-12  text-nowrap  font-Anton text-[12rem] leading-none text-transparent text-stroke-1 text-stroke-white md:top-[50vh] md:text-[16rem]">
      <MotionTextInfiniteSkew>Melo-Emo!</MotionTextInfiniteSkew>
    </div>
  );
};
