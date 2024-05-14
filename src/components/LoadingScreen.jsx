import { useProgress } from '@react-three/drei';
import { useEffect, useState } from 'react';
import { Heart } from './IconSvg';

export const LoadingScreen = (props) => {
  const { started, setStarted } = props;
  const [endClip, setEndClip] = useState(false);
  const { progress, total, loaded, item } = useProgress();

  useEffect(() => {
    // console.log(progress, total, loaded, item);
    // console.log(started);
    // console.log(endClip);
    if (progress === 100) {
      setTimeout(() => {
        setStarted(true);
      }, 500);
      setTimeout(() => {
        setEndClip(true);
      }, 4000);
    }
  }, [progress, total, loaded, item]);

  return (
    <>
      <div
        className={`pointer-events-none fixed left-0 top-0 z-[9999] h-full w-full backdrop-blur transition-all delay-1000 duration-[2s]  ${started ? 'opacity-0' : 'opacity-100'}`}
      ></div>
      <div
        className="pointer-events-none fixed left-0 top-0 z-[10000] flex h-full w-full items-center
      justify-center bg-gray-950 transition-all delay-1000 duration-[1.5s] ease-[cubic-bezier(.16,.87,.79,-0.42)] will-change-[clipPath]"
        style={{
          clipPath: `${started ? 'polygon(0% 0%, 0% 100%, 0 100%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%, 100% 100%, 100% 0%)' : 'polygon(0% 0%, 0% 100%, 0 100%, 0 50%, 100% 50%, 100% 100%, 0 100%, 0 50%, 100% 50%, 100% 0%)'}`,
          display: `${endClip ? 'none' : 'block'}`,
        }}
      >
        <div className="flex h-full w-full flex-col items-center justify-center gap-4">
          <div className="grid max-w-[240px] grid-cols-1 grid-rows-1">
            <div
              className="col-start-1 row-start-1 h-auto w-full transition-all duration-500"
              style={{
                clipPath: `inset(${100 - progress}% 0 0 0)`,
              }}
            >
              <Heart className="fill-themePink-500" />
            </div>
            <div className="col-start-1 row-start-1 h-auto w-full">
              <Heart className="stroke-themePink-500 stroke-[0.25rem]" />
            </div>
          </div>
          <div className="relative font-Anton text-xl text-themePink-500 md:text-2xl">
            <div
              className="absolute left-0 top-0  overflow-hidden truncate text-clip transition-all duration-500"
              style={{
                width: `${progress}%`,
              }}
            >
              Melo-Emo! Touch the Heartstrings
            </div>
            <div className="opacity-40">Melo-Emo! Touch the Heartstrings</div>
          </div>
        </div>
      </div>
    </>
  );
};
