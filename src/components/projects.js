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

/**
 * Renders a carousel of projects with navigation controls.
 *
 * @param {object} args - An object containing carousel configuration options.
 * @param {string} args.carouselHeight - The height of the carousel.
 * @return {JSX.Element} The JSX element representing the carousel component.
 */
const Projects = (args) => {
  // Set up state variables
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [carouselWidth, setCarouselWidth] = useState('50rem');
  const [carouselHeight, setCarouselHeight] = useState('50rem');

  // Function to go to the next slide
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === seedData.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  // Function to go to the previous slide
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? seedData.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  // Function to go to a specific slide
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  // Function to handle window resize and update carousel width
  const handleResize = () => {
    if (window.innerWidth <= 350) {
      // Mobile view
      setCarouselWidth('50rem');
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

  // Mapping Seed Data to Carousel Items
  const slides = seedData.map((seed) => {
    return (
      <CarouselItem
        className='carouselItem'
        key={seed.key}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img src={seed.image} alt={seed.projectName} style={{ height: args.carouselHeight, width: '50rem', borderRadius: '20px', opacity: '80%' }}/>
        <CarouselCaption
          className='carouselCaption'
          captionHeader={seed.projectName}
          href={seed.link}
          style={{ color: 'black', fontSize: '25px' }}
        />
      </CarouselItem>
    );
  });

  // Render the carousel component
    return (
      <div>
        <Navbars />
        <MyComponent />
        <div className="carouselContainer">
        <Carousel activeIndex={activeIndex} next={next} previous={previous} style={{
          height: args.carouselHeight, marginLeft: '25rem', marginTop: '7.5rem', borderRadius: '30px', width: '100%'
        }} className='carousel'>
        <CarouselIndicators
          items={seedData}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
          className={carouselWidth <= '640px' ? 'carouselIndicatorHidden' : 'carouselIndicator'}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
          className={carouselWidth <= '640px' ? 'carouselControlHidden' : ''}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
          className={carouselWidth <= '640px' ? 'carouselControlHidden' : ''}
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