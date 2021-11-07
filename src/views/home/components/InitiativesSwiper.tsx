import { chakra } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Thumbnail from "./InitiativeThumbnail";

const IMAGE_URL = "https://www.datocms-assets.com/50019/1624285424-codefest.png?auto=format&w=1920";

export const StylableSwiper = chakra(Swiper);

export const InitiativesSwiper: React.FC = () => (
  <StylableSwiper slidesPerView={2.5} spaceBetween={10} overflow="visible">
    {[1, 2, 3, 4, 5].map(() => (
      <SwiperSlide>
        <Thumbnail url={IMAGE_URL} name="CodeFest" date={new Date().toLocaleDateString()} />
      </SwiperSlide>
    ))}
  </StylableSwiper>
);
