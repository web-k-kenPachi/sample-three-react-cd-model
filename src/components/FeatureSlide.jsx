import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

// import required modules
import { FreeMode } from 'swiper/modules';

const works = [
  {
    description: '作詞・作曲・編曲ワーク',
    imgSrc: 'work01.jpg',
  },
  {
    description: '配信・CDジャケットデザイン',
    imgSrc: 'work02.jpg',
  },
  {
    description: 'CD制作・入稿',
    imgSrc: 'work03.jpg',
  },
  {
    description: 'フライヤー・ポスター制作',
    imgSrc: 'work04.jpg',
  },
  {
    description: 'プロモーション動画制作',
    imgSrc: 'work05.jpg',
  },
  {
    description: 'WEBページ制作',
    imgSrc: 'work06.jpg',
  },
];

export const FeatureSlide = () => {
  return (
    <Swiper
      modules={[FreeMode]}
      spaceBetween={'4%'}
      slidesPerView={1.5}
      freeMode={true}
      slidesOffsetAfter={160}
      slidesOffsetBefore={80}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
      className="mySwiper"
      grabCursor={true}
      breakpoints={{
        768: {
          slidesPerView: 3.5,
        },
      }}
    >
      {works.map(({ description, imgSrc }) => {
        return (
          <SwiperSlide key={imgSrc}>
            <div className="">
              <figure className="mb-4 shadow-lg">
                <img src={`./assets/images/${imgSrc}`} alt={description} />
              </figure>
              <h3>{description}</h3>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
