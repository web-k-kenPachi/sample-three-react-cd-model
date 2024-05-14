import { AmazonMusic } from './IconSvg';
import { AppleMusic } from './IconSvg';
import ButtonLink from './ButtonLink';
import { Heart } from './IconSvg';
import {
  MotionTextFeature,
  MotionTextMeloEmo,
} from './MotionTextInfiniteMaterial';
import { Spotify } from './IconSvg';
import { YoutubeMusic } from './IconSvg';
import { motion } from 'framer-motion';
import { useState } from 'react';

export const SectionScrollAnimation = () => {
  return (
    <>
      <HeroSection />
      <FeatureBeforeSection />
    </>
  );
};

const HeroSection = () => {
  const hiddenMask = `repeating-linear-gradient(-45deg,  rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
  const visibleMask = `repeating-linear-gradient(-45deg,  rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  return (
    <>
      <div className="absolute left-[-6%]  top-1/4 z-50 -translate-y-1/2 px-8 py-4 md:left-[-2%] md:top-[10%] md:px-20 md:py-8">
        <div className="w-fit -rotate-6 bg-black px-2 py-1 text-2xl text-white md:text-displaySm">
          CD頒布＆楽曲配信中！
        </div>
      </div>
      <section className="absolute top-0 h-screen w-screen">
        <div className="relative z-[1] h-screen w-screen">
          <div className="relative h-full w-full">
            <div className="my-4 h-full w-full px-8 py-4 md:px-20 md:py-8">
              <div className="relative h-full w-full">
                <div className="absolute bottom-0  h-auto w-5/6  rounded-tr-[2rem] bg-themePink-500 px-2 py-4 md:w-[calc(100%/8*3.5)] md:px-8 md:py-8">
                  <span className="absolute -top-[10%] block bg-black px-2 py-1 font-Anton  text-sm text-white md:-top-[4%] md:py-2 md:text-[min(2vw,1.6rem)]">
                    kenPachi[.design] 1st Mini Album
                  </span>
                  <div className="mb-4">
                    <h1 className="font-DotGothic text-[min(6vw,2rem)] text-white md:text-[min(2.6vw,5.5rem)]">
                      めろえも！タッチ・ザ・ハートストリングス
                    </h1>
                  </div>
                  <div>
                    <ButtonLink href="#info">Album Info</ButtonLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute left-0 top-0 flex h-full w-8 items-center justify-center md:w-20">
              <div className="flex flex-col gap-8">
                <Heart className="h-auto w-[14px] stroke-white stroke-[1rem]  md:w-[24px]" />
                <Heart className="h-auto w-[14px] stroke-white stroke-[1rem] md:w-[24px]" />
                <Heart className="h-auto w-[14px] stroke-white stroke-[1rem] md:w-[24px]" />
                <Heart className="h-auto w-[14px] fill-white stroke-[1rem] md:w-[24px]" />
                <Heart className="h-auto w-[14px] stroke-white stroke-[1rem] md:w-[24px]" />
              </div>
            </div>
            <div className="absolute right-0 top-0 flex h-full w-8 items-center justify-center md:w-20">
              <span className="font-Anton text-xl text-white [writing-mode:vertical-rl] md:text-4xl">
                Melo-Emo! Touch the Heartstrings
              </span>
            </div>
            <div className="absolute right-[6%] top-[66%] h-auto w-1/2 -translate-y-1/2">
              <motion.figure
                initial={false}
                animate={
                  isLoaded && isInView
                    ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                    : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                }
                transition={{ duration: 0.5, delay: 3.5, ease: 'easeOut' }}
                viewport={{ once: true }}
                onViewportEnter={() => setIsInView(true)}
                className="hidden h-auto w-full md:block"
              >
                <img
                  src="./assets/images/main-illust.png"
                  alt="Hatsune Miku Illust"
                  className="drop-shadow-2xl"
                  onLoad={() => setIsLoaded(true)}
                />
              </motion.figure>
            </div>
            <div className="absolute pointer-events-none top-0 hidden h-full w-full md:block">
              <div className="absolute top-[0.25rem] overflow-hidden md:right-[14%]">
                <motion.div
                  initial={{ clipPath: 'inset(0 0 100% 0)' }}
                  whileInView={{
                    clipPath: 'inset(0 0 0 0)',
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 3.5,
                    ease: 'easeOut',
                  }}
                  viewport={{ once: true }}
                  className="flex flex-col text-xl [writing-mode:vertical-rl] pointer-events-auto md:text-displaySm"
                >
                  <span className="gradient-bg--opacity h-fit  w-fit px-1 py-8 text-white md:inline-block ">
                    心の琴線に触れる、
                  </span>
                  <span className="gradient-bg--opacity mr-8  hidden h-fit w-fit px-1 py-4 text-white md:block">
                    えもいメロディー。
                  </span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const FeatureBeforeSection = () => {
  const featureAnimationList = {
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
      },
    },
  };

  const featureAnimationItem = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100 },
  };

  return (
    <>
      {/* FEATURE Display TEXT */}
      <section className="relative h-screen  w-screen ">
        <MotionTextFeature />
      </section>
      <section className="relative h-screen w-screen">
        {/* FEATURE DETAIL AREA */}
        {/* Meloemo Display TEXT */}
        <MotionTextMeloEmo />
        {/* FEATURE DESC */}
        {/* FEATURE DESC 01 */}
        <div className="flex h-full w-full flex-col-reverse items-center justify-center px-8 py-8  md:flex-row md:px-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={featureAnimationList}
            className="relative z-50 flex h-full w-full flex-col items-center justify-center"
          >
            <motion.div
              variants={featureAnimationItem}
              className="absolute flex w-full flex-col items-center justify-center"
            >
              <Heart className="fill-themeRed-500" />
            </motion.div>
            <motion.h3
              variants={featureAnimationItem}
              className="relative text-xl text-white before:absolute before:-left-[4%] before:-top-[36%] before:font-Anton before:text-[4em] before:opacity-50 before:content-['01'] before:text-stroke-1 before:text-stroke-white before:text-stroke-fill-transparent md:text-4xl"
            >
              初音ミクをボーカルに起用したkenPachi[.design]
              自身初となるミニアルバム！
            </motion.h3>
          </motion.div>

          <div className="h-full w-full"></div>
        </div>
      </section>
      <section className="h-screen w-screen" id="feature-scroll-end">
        {/* FEATURE DESC 02 */}
        <div className="flex h-full w-full flex-col-reverse items-center justify-center px-8 py-8  md:flex-row-reverse md:px-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={featureAnimationList}
            className="relative z-50 flex h-full w-full flex-col items-center justify-center"
          >
            <motion.div
              variants={featureAnimationItem}
              className="absolute z-[-1] flex w-full flex-col items-center justify-center"
            >
              <Heart className="fill-themeRed-500" />
            </motion.div>
            <motion.h3
              variants={featureAnimationItem}
              className=" relative mb-4 text-xl text-white before:absolute before:-left-[4%] before:-top-[36%] before:font-Anton before:text-[4em] before:opacity-50 before:content-['02'] before:text-stroke-1 before:text-stroke-white before:text-stroke-fill-transparent md:text-4xl"
            >
              「M3-2023春」にてCD頒布&各種音楽配信サービスで配信開始！
            </motion.h3>
            {/* MUSIC LINK */}
            <motion.div variants={featureAnimationItem} className="">
              <h4 className="mb-4 text-lg text-white md:text-3xl">
                ＜配信先リンク＞
              </h4>
              <div className="mb-8 flex w-full items-center justify-between gap-8 md:gap-16">
                <a
                  href="https://open.spotify.com/intl-ja/album/4AGvNA0mTGf8Zo6XDIJm7T"
                  target="_blank"
                >
                  <Spotify />
                </a>
                <a
                  href="https://music.apple.com/jp/album/melo-emo-touch-the-heartstrings-feat-hatsune-miku-ep/1683330803"
                  target="_blank"
                >
                  <AppleMusic />
                </a>
                <a
                  href="https://amazon.co.jp/music/player/albums/B0C2Y5BSW9?marketplaceId=A1VC38T7YXB528&musicTerritory=JP&ref=dm_sh_WArdoRj8XOip3x13ArHYPwLQE"
                  target="_blank"
                >
                  <AmazonMusic />
                </a>
                <a
                  href="https://music.youtube.com/playlist?list=OLAK5uy_nOzLvetgMZYXv8oE0oFdb7bLktlmVhfb4&si=Mfa8JZrJuuigeNax"
                  target="_blank"
                >
                  <YoutubeMusic />
                </a>
              </div>
              <div className="flex justify-end">
                <ButtonLink href="https://nodee.net/a/rv09dqc2" blank>
                  Listen Now!
                </ButtonLink>
              </div>
            </motion.div>
          </motion.div>
          <div className="h-full  w-full"></div>
        </div>
      </section>
    </>
  );
};
