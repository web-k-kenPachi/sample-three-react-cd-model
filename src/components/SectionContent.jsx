import { AmazonMusic } from './IconSvg';
import { AppleMusic } from './IconSvg';
import ButtonLink from './ButtonLink';
import { FeatureSlide } from './FeatureSlide';
import { Heart } from './IconSvg';
import InfiniteTrackSlide from './InfiniteTrackSlide';
import Noise from './Noise';
import { Spotify } from './IconSvg';
import { TextCircleArea } from './TextCircleArea';
import { VideoArea } from './VideoArea';
import { YoutubeMusic } from './IconSvg';
import { motion } from 'framer-motion';
import AnimationTextSplit from './AnimationSplit';

export const SectionContent = () => {
  return (
    <div className="relative z-50">
      <FeatureAfterSection />
      <TextCircleArea />
      <InfoSection />
      <MessageSection />
      <Footer />
    </div>
  );
};

const FeatureAfterSection = () => {
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
    <section>
      {/* FEATURE DETAIL AREA */}
      <div className="relative z-10 bg-themePink-500  text-white">
        {/* FEATURE SEPARATE */}
        <InfiniteTrackSlide />
        {/* FEATURE DESC 03 */}
        <div className="flex h-screen w-screen flex-col justify-center ">
          <div className="h-auto w-full px-8 py-20 md:px-20">
            <div className="h-full w-full">
              <div className="flex h-full w-full items-center justify-start">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={featureAnimationList}
                  className="relative flex h-full w-10/12 flex-col items-start justify-center md:w-[calc(100%/8*6)]"
                >
                  <motion.div
                    variants={featureAnimationItem}
                    className="absolute flex w-full flex-col items-center justify-center md:max-w-[calc(100vw/6*2)]"
                  >
                    <Heart className="fill-themeRed-500" />
                  </motion.div>
                  <motion.h3
                    variants={featureAnimationItem}
                    className="relative text-xl before:absolute before:-left-[4%] before:-top-[36%] before:font-Anton before:text-[4em] before:opacity-50 before:content-['03'] before:text-stroke-1 before:text-stroke-white before:text-stroke-fill-transparent md:text-4xl"
                  >
                    作詞・作曲・編曲者自身がジャケットデザイン・入稿作業・プロモーションも担当！
                  </motion.h3>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="h-auto w-full overflow-hidden">
            <FeatureSlide />
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoSection = () => {
  return (
    <section id="info" className="bg-themeYellow-500 ">
      <div className="flex h-auto min-h-screen w-screen flex-col justify-center px-4 py-24 md:px-20">
        <h2 className="md:text-displayXl mb-16 font-Anton text-5xl text-themeRed-800 md:mb-32">
          <AnimationTextSplit>Information</AnimationTextSplit>
        </h2>
        <div className="flex h-full w-full flex-col items-center justify-center gap-10 md:flex-row md:gap-0">
          <div className="relative grid w-full grid-cols-1 grid-rows-1 ">
            <motion.figure
              initial={{ opacity: 0, x: '-50%' }}
              whileInView={{ opacity: 1, x: '0%' }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 5,
              }}
              className="col-start-1 row-start-1 w-full self-center"
            >
              <img
                src="./assets/images/cd-image.png"
                className="animate-spin-slow drop-shadow-3xl"
                alt=""
              />
            </motion.figure>
            <figure className="col-start-1 row-start-1 -ml-[min(20rem,46%)]  w-2/3 self-center">
              <img
                src="./assets/images/cd-case-half-image.png"
                className="rotate-90 drop-shadow-3xl"
                alt=""
              />
            </figure>
          </div>
          <div className="flex h-full w-full flex-col items-start justify-center">
            <h3 className="mb-8 flex flex-col">
              <span className="mb-2 w-fit bg-themeRed-800 px-4 py-1 font-Anton text-xl  text-white">
                kenPachi[.design] 1st Mini Album
              </span>
              <span className="font-kaisei text-3xl font-bold text-themeRed-800 md:text-4xl">
                めろえも！タッチ・ザ・ ハートストリングス
              </span>
            </h3>
            <h4 className="mb-4 text-3xl font-bold text-themeRed-800">
              収録曲
            </h4>
            <ul className="mb-8 text-2xl font-bold text-themeRed-800">
              <li>01: 御伽街物語</li>
              <li>02: it’s a sensitive personality</li>
              <li>03: ピンキーメイデン</li>
              <li>04: ハッピー☆シーサイド</li>
              <li>05: 君は宇宙</li>
            </ul>
            {/* MUSIC LINK */}
            <div className="">
              <h4 className="mb-6 text-lg font-bold text-themeRed-800 md:text-3xl">
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
                <ButtonLink href="https://nodee.net/a/rv09dqc2" blank red>
                  Listen Now!
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full min-h-screen w-screen bg-themeYellow-500 px-4 py-24 md:px-20">
        <div className="m-auto w-full max-w-[1360px]">
          <h2 className="md:text-displayXl relative  z-[51] ml-[4%] w-full text-right font-Anton text-5xl text-themeRed-800 ">
            <AnimationTextSplit>Promotion</AnimationTextSplit>
          </h2>
        </div>
        <div className="relative z-50 m-auto -mt-6 h-full w-full max-w-[1360px] overflow-hidden rounded-2xl border-2 border-black md:-mt-12 ">
          <div className="gradient-bg-promotion absolute inset-0 -z-[1] h-full w-full"></div>
          <Noise className="absolute inset-0 -z-[1] h-full w-full mix-blend-screen" />
          <figure className="absolute left-[-4%] -z-[1] w-2/12">
            <img src="./assets/svg/moji01.svg" alt="" />
          </figure>
          <figure className="absolute right-[4%] top-0 -z-[1] w-3/12">
            <img src="./assets/svg/moji02.svg" alt="" />
          </figure>
          <figure className="absolute bottom-[1%] left-[-4%] -z-[1] w-6/12">
            <img src="./assets/svg/moji03.svg" alt="" />
          </figure>
          <figure className="absolute bottom-[-4%] right-[-2%] -z-[1] w-5/12">
            <img src="./assets/svg/moji04.svg" alt="" />
          </figure>
          <div className="grid-bg"></div>
          {/* VIDEO */}
          {/* VIDEO AREA */}
          <VideoArea />
        </div>
      </div>
    </section>
  );
};

const MessageSection = () => {
  return (
    <section>
      <div className="relative h-full w-full">
        <figure className="absolute inset-0">
          <img src="./assets/images/bg-message01.jpg" alt="" />
        </figure>
        <div className="flex h-auto min-h-screen w-screen items-center justify-end px-4 py-12 md:px-20">
          <div className="w-full md:w-4/6">
            <h2 className="md:text-displayXl relative z-10  -ml-2 font-Anton text-5xl text-white mix-blend-difference md:-ml-8">
              <AnimationTextSplit>MESSAGE</AnimationTextSplit>
            </h2>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 1,
              }}
              className="relative -mt-10 rounded-lg bg-white px-4 py-24 font-NotoSans text-sm leading-6 md:px-10 md:text-base md:leading-8"
            >
              <p className="mb-6 text-base font-bold">
                このミニアルバムについてと「M3-2023春」での頒布を終えて
              </p>
              <p className="mb-4">
                kenPachi[.design]
                feat.初音ミク「めろえも！タッチ・ザ・ハートストリングス」は聴いていただいた方の「“心の琴線”に触れる」ような「えもいメロディー」を感じられるような楽曲を目指し制作しました。
                <br />
                このミニアルバムCDはkenPachi[.design]
                自身初となる楽曲のCD化作品で、「M3-2023春」にて頒布されました。
                <br />
                作詞作曲編曲・ジャケットデザイン・入稿データ作成・各種プロモーションを担当しました。
              </p>
              <p className="mb-4">
                制作当時はM3当日に間に合うかどうかのギリギリなスケジュールで入稿しており、かなり切羽詰まった状態で創作に励んでいたように記憶しております。
                今になって落ち着いて聴くとやはりサウンドの粗さが目立っているように感じますね。
                <br />
                音楽的な要素はもとより音質面で特に課題を感じている次第です。
                <br />
                （一部の楽曲は自分でミックスし直して新たに発表を予定してます）
              </p>
              <p className="mb-4">
                とはいうものの、初のCD化作品ということもあり私にとっては大事な作品の一つです。
                未熟さを抱えることの中にも、純粋さや成長の可能性を見出せるような作品として感じていただけましたら幸いです。
                そしてM3当日、お手に取っていただいた皆様には、深く感謝申し上げます。
                ありがとうございました。
                <br />
                また、配信で聴いていただいている方もありがとうございます。
              </p>
              <p className="mb-4">
                将来的にオンラインでのCD頒布も予定しているほか、
                各種音楽配信サービスでも視聴できますので今後ともよろしくおねがいいたします！
              </p>
              <p className="text-right">kenPachi[.design]</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="h-auto w-screen bg-themePink-500 px-4 py-16 md:px-20">
      <div className="m-auto max-w-[980px]">
        <div className="mb-8 flex w-full flex-col items-center justify-between gap-4  md:flex-row ">
          <div className="w-full md:w-3/12">
            <figure className="relative overflow-hidden rounded-full pb-[100%]">
              <img
                className="absolute inset-0"
                src="./assets/images/profile.png"
                alt="kenPachi[.design]"
              />
            </figure>
          </div>
          <div className="w-full md:w-9/12">
            <p className="mb-2 text-white">
              <span className="font-bold">kenPachi[.design]</span>
              <br />
              音楽、WEBサイト・アプリケーション、デザイン、動画などを制作するクリエイター。
              2023年にバーチャル・シンガー：初音ミクの楽曲を収録したCD・配信作品を発表。
              アニメソング、歌謡曲、映画音楽、テーマパーク音楽、吹奏楽、ジャズなどから影響を受けている。
              主に使用できる楽器はギターとコントラバス。
              デザインワークではAdobe製品を愛用。
            </p>
            <div>
              <ul className="flex gap-4 text-themeYellow-500">
                <li>
                  <a href="https://twitter.com/kenPachi_design" target="_blank">
                    [Twitter]
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@kenpachi.design"
                    target="_blank"
                  >
                    [Youtube]
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.nicovideo.jp/user/576807"
                    target="_blank"
                  >
                    [ニコニコ動画]
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mb-10 font-NotoSans text-[0.725rem] text-white">
          <p className="mb-3">
            「初音ミク」はクリプトン・フューチャー・メディア株式会社の著作物です。
            <br />
            本WEBページの当該キャラクターの使用については次のリンク先のとおり、ピアプロリンク申請のもと非営利かつ有償の販促目的のため使用させていただいております。
          </p>
          <a
            href="https://piapro.jp/product/?id=nmr8y4z3"
            target="_blank"
            className="inline-block max-w-[84px]"
          >
            <div className="inline-block w-full">
              <img src="./assets/images/piaproqr.png" alt="" />
            </div>
          </a>
        </div>
        <div className="text-center ">
          <figure className="inline-block max-w-[180px]">
            <img src="./assets/images/logo.png" alt="" />
          </figure>
          <p className="font-NotoSans text-[0.725rem] text-themeYellow-500">
            Character illust:めーすけ
            <br />
            ©︎kenPachi[.design]
          </p>
        </div>
      </div>
    </footer>
  );
};
