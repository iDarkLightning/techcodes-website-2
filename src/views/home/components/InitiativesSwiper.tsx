import { chakra } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Thumbnail from "./InitiativeThumbnail";

const IMAGE_URL = "https://www.datocms-assets.com/50019/1624285424-codefest.png?auto=format&w=1920";

export const StylableSwiper = chakra(Swiper);

export const InitiativesSwiper: React.FC<{ data: any }> = ({ data }) => (
  <StylableSwiper slidesPerView={2} spaceBetween={10} overflow="visible">
    {data.map((content: any) => (
      <SwiperSlide>
        <Thumbnail
          href={content.slug}
          url={content.thumbnail.url}
          name={content.title}
          date={new Date().toLocaleDateString()}
        />
      </SwiperSlide>
    ))}
  </StylableSwiper>
);
