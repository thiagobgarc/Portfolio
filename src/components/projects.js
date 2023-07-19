import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  UncontrolledCarousel,
} from 'reactstrap';
import seedData from "../seed/seedData"
import { Navbars } from "../nav/NavBar"
import { MyComponent } from "./Background"
import "./project.css"
import { useState } from 'react';

const Projects = (args) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === seedData.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? seedData.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  // {/* Mapping Seed Data */}
  const slides = seedData.map((seed) => {
      return (
      <CarouselItem
      className='custom-tag'
      key={seed.key}
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      >
        <img src={seed.image} alt={seed.projectName} style={{ height: args.carouselHeight, width: '50rem' }}/>
        <CarouselCaption
        className='carouselCaption'
        captionText={seed.description}
        captionHeader={seed.projectName}
        style={{ color: 'black' }}
        />
      </CarouselItem>
      )
      })

    return (
      <div>
        <Navbars/>
        <MyComponent/>
        <Carousel activeIndex={activeIndex} next={next} previous={previous} style={{
          height: args.carouselHeight, width: '50rem', marginLeft: '25rem', marginTop: '7.5rem'
        }}>
        <CarouselIndicators
          items={seedData}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
      </div>
    )
}

Projects.defaultProps = {
  carouselHeight: '25rem', // Adjust this to your desired height
};

export default Projects

const styles = {
    projects: {
        textAlign: 'center',
        marginBottom: '1rem', 
        marginTop: '-2rem',
        fontSize: '3rem', 
        fontWeight: 'bold',
    },
}