import React, { useState } from 'react';

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
    name: 'John Doe',
    text: 'The gym is great, the trainers are very helpful and the equipment is top-notch.'
    },
    {
    name: 'Jane Smith',
    text: 'I have been a member for a few months now and have seen significant improvement in my fitness.'
    },
    {
    name: 'Robert Williams',
    text: 'I highly recommend this gym to anyone looking to get in shape.'
    },
    {
    name: 'Michael Johnson',
    text: 'The atmosphere at the gym is friendly and welcoming, perfect for anyone looking to start their fitness journey.'
    },
    {
    name: 'Sarah Davis',
    text: 'The trainers at this gym have helped me achieve my fitness goals, I couldn’t be happier.'
    },
    {
    name: 'David Brown',
    text: 'I was intimidated at first, but the staff at this gym are patient and helpful. I’m now confident in my abilities to workout.'
    },
    {
    name: 'Emily Wilson',
    text: 'The gym is always clean and well-maintained, making it a great place to workout.'
    },
    {
    name: 'William Thompson',
    text: 'I have never felt better since joining this gym, it has changed my life for the better.'
    }
    ];

  const handlePreviousClick = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="testimonial-slider">
      <div className="testimonial-slider__quote">
        <p>{testimonials[currentIndex].text}</p>
        <div className="testimonial-slider__author">
        - {testimonials[currentIndex].name}
      </div>
      <div className="testimonial-slider__controls">
        <button className='testimonial-slider__control' onClick={handlePreviousClick}>Previous</button>
        <button className='testimonial-slider__control' onClick={handleNextClick}>Next</button>
      </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
