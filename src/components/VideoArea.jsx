import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { motion } from 'framer-motion';

import 'react-modal-video/scss/modal-video.scss';
import { Play } from './IconSvg';

const animationDisplay = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } },
  hidden: { opacity: 0, y: 50 },
};

export const VideoArea = () => {
  return (
    <>
      <div className="m-auto flex h-full w-full max-w-[1100px] flex-col items-stretch justify-center gap-[min(8rem,30vw)] px-8 py-40 md:py-60">
        <ComponentVideo01 />
        <ComponentVideo02 />
      </div>
    </>
  );
};

const ComponentVideo01 = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="ljyB57S37ho"
        onClose={() => setOpen(false)}
      />
      <motion.button
        variants={animationDisplay}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="h-auto w-full place-self-end shadow-lg md:w-8/12"
        onClick={() => setOpen(true)}
      >
        <div className="relative">
          <img src="./assets/images/promo-video01.jpg" alt="" />
          <div className="absolute -left-[6%] top-[-10%] w-fit bg-themePink-500 px-2 py-2 text-xl font-bold text-white md:-left-[30%] md:bottom-[16%] md:top-[unset] md:px-4 md:text-4xl ">
            クロスフェードムービー
          </div>
          <div className="absolute left-1/2 top-1/2 z-50 h-auto w-1/6 -translate-x-1/2 -translate-y-1/2 text-themePink-500">
            <Play />
          </div>
        </div>
      </motion.button>
    </>
  );
};

const ComponentVideo02 = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="zY40Di-O-xU"
        onClose={() => setOpen(false)}
      />
      <motion.button
        variants={animationDisplay}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="h-auto w-full shadow-lg  md:w-8/12"
        onClick={() => setOpen(true)}
      >
        <div className="relative">
          <img src="./assets/images/promo-video02.jpg" alt="" />
          <div className="absolute -right-[8%] top-[-8%] w-fit bg-themePink-500 px-2 py-2 text-xl font-bold text-white md:-right-[20%] md:top-[8%] md:px-4 md:text-4xl">
            M3用動画CM
          </div>
          <div className="absolute left-1/2 top-1/2 z-50 h-auto w-1/6 -translate-x-1/2 -translate-y-1/2 text-themePink-500">
            <Play />
          </div>
        </div>
      </motion.button>
    </>
  );
};
