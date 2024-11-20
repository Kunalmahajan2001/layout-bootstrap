import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap styles are loaded
import './App.css'

// Placeholder ExampleCarouselImage Component
const ExampleCarouselImage = ({ text }) => (
  <div
    style={{
      height: '400px',
      backgroundColor: 'lightgray',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <h1>{text}</h1>
  </div>
);

function App() {
  return (
    <>
    <div className='box1'>
      <h4>the building blocks of papers. Many students define paragraphs in terms of length: <br></br> half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph.</h4>

    </div>
    <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage text="red" />
        <Carousel.Caption>
          <h2>Animal</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="and" />
        <Carousel.Caption>
          <h2>croud</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="" />
        <Carousel.Caption>
          <h2>superb</h2>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <div className='box1'>
    <h4>How many sentences are in a paragraph? It is important to note that there is a great dea<br></br>A good example of a paragraph contains a topic sentence, details and a conclusion.</h4>

    </div>
    </>
  );
}

export default App;







