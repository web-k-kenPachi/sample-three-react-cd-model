import { motion } from 'framer-motion';

const AnimationTextSplit = ({ children }) => {
  const words = children;
  const word = words.split('');

  const textAnimate = word.map((word, index) => {
    return (
      <motion.span
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.2,
          delay: index * 0.08,
          type: 'spring',
          bounce: 1,
        }}
        key={index}
        viewport={{ once: true }}
        className="inline-block"
      >
        {word}
      </motion.span>
    );
  });

  return <div>{textAnimate}</div>;
};

export default AnimationTextSplit;
