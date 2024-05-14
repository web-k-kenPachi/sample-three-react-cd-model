import { motion } from 'framer-motion';
import Noise from './Noise';
import BgGrid from './BgGrid';

const trackList = [
  { number: 1, title: '御伽街物語' },
  { number: 2, title: "it's a sensitive personality" },
  { number: 3, title: 'ピンキーメイデン' },
  { number: 4, title: 'ハッピー☆シーサイド' },
  { number: 5, title: '君は宇宙' },
];

const InfiniteTrackSlide = () => {
  // const duplicatedSlides = [...trackList, ...trackList];

  return (
    <div className="relative h-60 after:absolute after:inset-0 after:-z-10 after:bg-black after:opacity-75  after:content-['']">
      <Noise className="pointer-events-none  absolute -z-10 h-full w-full opacity-70" />
      <BgGrid className="pointer-events-none absolute z-50 h-full w-full  overflow-hidden mix-blend-screen" />
      <figure className="absolute inset-0 -z-20">
        <img
          src="./assets/images/visual-gif-anim.gif"
          className="object-[center_30%]"
          alt=""
        />
      </figure>
      <div className="absolute top-1/2 w-full -translate-y-1/2 overflow-hidden font-DotGothic text-2xl  font-bold  text-themeYellow-500 md:text-4xl">
        {/* Wrapping div for seamless looping */}
        <motion.div
          className="flex"
          animate={{
            x: ['0%', '-500%'],
            transition: {
              duration: 30,
              repeat: Infinity,
            },
          }}
        >
          {/* slides01 */}
          <div
            className="flex-shrink-0"
            style={{ width: `${500 / (trackList.length + 1)}%` }}
          >
            <div className="flex h-full flex-col items-center justify-center text-2xl md:text-5xl">
              【Track List】
            </div>
          </div>
          {trackList.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ width: `${500 / (trackList.length + 1)}%` }}
            >
              <div className="flex h-full flex-col items-center justify-center">
                0{slide.number}：{slide.title}
              </div>
            </div>
          ))}
          {/* slides02 */}
          <div
            className="flex-shrink-0"
            style={{ width: `${500 / (trackList.length + 1)}%` }}
          >
            <div className="flex h-full flex-col items-center justify-center text-2xl md:text-5xl">
              【Track List】
            </div>
          </div>
          {trackList.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ width: `${500 / (trackList.length + 1)}%` }}
            >
              <div className="flex h-full flex-col items-center justify-center">
                0{slide.number}：{slide.title}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default InfiniteTrackSlide;
