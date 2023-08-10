import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const TestimonialsList = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    axios
      .get('https://baylerview-api.onrender.com/api/testimonials')
      .then((response) => {
        setTestimonials(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const displayTestimonials = testimonials.map((testimonial, index) => (
    <tr key={index}>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{testimonial.name}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{testimonial.email}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">
          {testimonial.testimonial_status}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{testimonial.date}</div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
      <Link to={`/admin/testimonials/manage/${testimonial._id}`}>
        <button className="mr-1 text-white py-1 px-3 bg-green-600 hover:bg-green-500 rounded-sm hover:text-black">
          Manage
        </button>
        </Link>
        <Link to={`/admin/testimonials/delete/${testimonial._id}`}>
          <button className="ml-1 text-white py-1 px-3 bg-red-600 rounded-sm hover:bg-red-500 hover:text-black">
            Trash
          </button>
        </Link>
      </td>
    </tr>
  ));

  return (
    <>
      <div className="bg-red-100 mx-2">
        <table className=" min-w-full divide-y divide-gray-200 overflow-x-auto">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Sender Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Email Address
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                actions
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {displayTestimonials}
          </tbody>
        </table>
      </div>
    </>
  );
};
