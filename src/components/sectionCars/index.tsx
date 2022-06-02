import React, { useContext } from 'react';

import { Container } from './styles';

import Carousel from 'react-multi-carousel';
import { CardCars } from './CardCars';
import CustomDots from './CustomDots';
import { GlobalContext } from '../../context/store';

export const SectionCars = () => {
  const global = useContext(GlobalContext);

  return (
    <Container>
      <Carousel
        additionalTransfrom={1}
        arrows
        centerMode={false}
        className=''
        containerClass='containerCarousel'
        dotListClass=''
        draggable
        ssr={true}
        focusOnSelect={false}
        infinite={false}
        itemClass=''
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={true}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 768,
              min: 320,
            },
            slidesToSlide: 1,
            items: 1,
            partialVisibilityGutter: 20,
          },
          tablet: {
            breakpoint: {
              max: 995,
              min: 768,
            },
            slidesToSlide: 2,
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        showDots={true}
        customDot={
          <CustomDots
            onClick={undefined}
            active={undefined}
            index={undefined}
            carouselState={undefined}
          />
        }
        sliderClass=''
        slidesToSlide={3}
        swipeable
      >
        {global.cars.map((car, i) => (
          <CardCars
            key={i}
            name={car.name}
            year={car.year}
            velocity={car.velocity}
            gradeEconomy={car.gradeEconomy}
            gradeUsers={car.gradeUsers}
            link={car.link}
            linkImg={car.linkImg}
          />
        ))}
      </Carousel>
    </Container>
  );
};
