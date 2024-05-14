import { Canvas } from '@react-three/fiber';
import { View, OrthographicCamera, Preload } from '@react-three/drei';
import * as THREE from 'three';
import Noise from '../components/Noise';
import { motion } from 'framer-motion';

export default function Scene() {
  return (
    <>
      <Noise className="main-visual-clip absolute h-full w-full overflow-hidden opacity-35" />
      <div className="main-visual-clip absolute z-10 h-full  w-full overflow-hidden mix-blend-difference">
        <motion.div
          className="absolute ml-[5rem] mt-[2rem] flex h-full items-start justify-center text-nowrap font-DotGothic text-[30vw] font-bold text-white"
          animate={{
            x: ['0%', '-50%'],
            transition: {
              ease: 'linear',
              duration: 30,
              repeat: Infinity,
            },
          }}
        >
          <div className="w-[50%] flex-shrink-0">
            <div className="flex h-full flex-col items-center justify-center">
              Melo-Emo! Touch the Heartstrings
            </div>
          </div>
          <div className="w-[50%] flex-shrink-0">
            <div className="flex h-full flex-col items-center justify-center">
              Melo-Emo! Touch the Heartstrings
            </div>
          </div>
        </motion.div>
      </div>
      <div className="main-visual-clip absolute z-[-51] h-full w-full overflow-hidden bg-themeYellow-500"></div>
      <Canvas
        className="main-visual-clip overflow-hidden blur-[1px]"
        style={{
          position: 'relative',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          overflow: 'hidden',
          zIndex: '-50',
        }}
        eventSource={document.body}
      >
        <View.Port />
        <OrthographicCamera makeDefault position={[0, 0, 100]} zoom={1} />
        <Preload all />
      </Canvas>
    </>
  );
}
