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
import { useState, useEffect } from 'react';

const Projects = (args) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [carouselWidth, setCarouselWidth] = useState('50rem');
  const [carouselHeight, setCarouselHeight] = useState('50rem');

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

  const handleResize = () => {
    if (window.innerWidth <= 350) {
      // Mobile view
      setCarouselWidth('10rem');
    } else if (window.innerWidth <= 768) {
      // Tablet view
      setCarouselWidth('75rem');
    } else {
      // Larger screens
      setCarouselWidth('50rem');
    }
  };

  // Attach the event listener to the window on component mount
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // {/* Mapping Seed Data */}
  const slides = seedData.map((seed) => {
      return (
      <CarouselItem
      className='carouselItem'
      key={seed.key}
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      >
        <img src={seed.image} alt={seed.projectName} style={{ height: args.carouselHeight, width: '50rem', borderRadius: '20px', opacity: '60%' }}/>
        <CarouselCaption
        className='carouselCaption'
        captionText={seed.description}
        captionHeader={seed.projectName}
        href={seed.link}
        style={{ color: 'black' }}
        />
      </CarouselItem>
      )
      })

    return (
      <div>
        <Navbars />
        <MyComponent />
        <div className="carouselContainer">
        <Carousel activeIndex={activeIndex} next={next} previous={previous} style={{
          height: args.carouselHeight, width: '50rem', marginLeft: '12.5rem', marginTop: '7.5rem', borderRadius: '20px'
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