import SwiperCore, { Navigation, Pagination } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import { CarouselItem } from "../CarouselItem";

SwiperCore.use([Navigation, Pagination]);

export const ContinentSlide: React.FC = () => {
  return (
    <Swiper navigation pagination>
      <SwiperSlide>
        <CarouselItem
          title="Europa"
          subtitle="O continente mais antigo."
          image="/continents/europe_slide.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem
          title="Asia"
          subtitle="O continente mais educado."
          image="/continents/asia_slide.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem
          title="América do Norte"
          subtitle="O continente mais avançado."
          image="/continents/north_america_slide.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem
          title="América do Sul"
          subtitle="O continente mais bonito."
          image="/continents/south_america_slide.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem
          title="África"
          subtitle="A cultura mais bonita."
          image="/continents/africa_slide.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem
          title="Oceania"
          subtitle="O continente mais longe."
          image="/continents/oceania_slide.jpg"
        />
      </SwiperSlide>
    </Swiper>
  );
};
