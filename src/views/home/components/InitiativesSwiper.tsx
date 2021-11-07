import { Box, Text, Image, chakra } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const IMAGE_URL = "https://www.datocms-assets.com/50019/1624285424-codefest.png?auto=format&w=1920";

interface SlideProps {
  url: string;
  name: string;
  date: string;
}

export const StylableSwiper = chakra(Swiper);

export const Slide: React.FC<SlideProps> = ({ url, name, date }) => (
  <Box>
    <Image src={url} w="34vw" h="20vw" border="0.2vw solid yellow" />
    <Text fontWeight="medium" fontSize={{ base: "2vw", md: "1.2vw" }}>
      {name}
    </Text>
    <Text fontWeight="medium" fontSize="0.8vw" display={{ base: "none", md: "flex" }}>
      {date}
    </Text>
  </Box>
);

export const InitiativesSwiper: React.FC = () => (
  <StylableSwiper slidesPerView={2.5} spaceBetween={10} overflow="visible">
    {[1, 2, 3, 4, 5].map(() => (
      <SwiperSlide>
        <Slide url={IMAGE_URL} name="CodeFest" date={new Date().toLocaleDateString()} />
      </SwiperSlide>
    ))}
  </StylableSwiper>
);
