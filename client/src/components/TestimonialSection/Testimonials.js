import Profile1 from '../../assets/dev-team/dev-image4.png';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get(
          'https://baylerview-api.onrender.com/api/testimonials'
        );
        const data = await response.data;
        const testimonialsArray = Object.values(data);

        setTestimonials(testimonialsArray[1]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchRooms();
  }, []);

  console.log(testimonials);

  const testimonialCards = testimonials.map((testimonial) => (
    <div className="container mx-auto py-2" key={testimonial._id}>
      <div className="flex flex-col md:flex-row md:-mx-3">
        <div className="flex-1 bg-white">
          <div className="p-10 rounded-lg border border-solid border-gray-200 shadow-xl">
            <p className="font-light">{testimonial.message}</p>
            <p className="py-2 font-semibold">
              Ratings :
              <span className="text-yellow-400 ml-2">
                {Array.from({ length: testimonial.ratings }).map((_, index) => (
                  <i className="fa fa-star" key={index}></i>
                ))}
              </span>
            </p>

            <div className="flex items-center py-2">
              <img
                className="w-12 h-12 mr-4 rounded-full"
                src={Profile1}
                alt={testimonial.name}
              />
              <div>
                <p className="font-light">{testimonial.name}</p>
                <p className="text-sm text-gray-600 font-semibold">
                  {testimonial.position}
                </p>
              </div>
            </div>
            <p className="font-semibold">
              Date:{' '}
              <span className="font-light">
                {testimonial.date.split('T')[0]}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <section id="testimonials">
      <div className="max-w-screen-xl mx-auto my-12 px-6">
        <div className="flex py-5 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink text-3xl poppins mx-4 text-gray-500">
            Experiences
          </span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <h5 className="poppins text-gray-500 pb-4 text-center">
          What our Customer's Feel About Us
        </h5>
        {testimonialCards}
      </div>
    </section>
  );
};
