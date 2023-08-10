import { useParams, Link, useNavigate, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const UpdateTestimonial = () => {
  const { id } = useParams(); // Get the account ID from the URL parameter
  const [testimonial, setTestimonials] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const testimonialsResponse = await axios.get(
          `https://baylerview-api.onrender.com/api/testimonial/${id}`
        );
        setTestimonials(testimonialsResponse.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  const handleApprove = async () => {
    // try {
    //   await axios.update(
    //     `https://baylerview-api.onrender.com/api/contacts/${id}`
    //   );
    //   alert('Record Successfully Deleted!');
    //   navigate('/admin/messages'); // Navigate back to the accounts page after successful deletion
    // } catch (error) {
    //   console.log(error);
    // }
    alert("Dapat mag close yung form tapos yung status maging Inactive");
    navigate('/admin/testimonials');
  };

  const handleReject = async () => {
    // try {
    //   await axios.update(
    //     `https://baylerview-api.onrender.com/api/contacts/${id}`
    //   );
    //   alert('Record Successfully Deleted!');
    //   navigate('/admin/messages'); // Navigate back to the accounts page after successful deletion
    // } catch (error) {
    //   console.log(error);
    // }
    alert("Dapat mag close yung form tapos yung status maging Inactive");
    navigate('/admin/testimonials');
  };

  return (
    <>
      <div className="fixed inset-0 z-40 min-h-full overflow-y-auto overflow-x-hidden transition flex items-center bg-gray-400">
        <div
          aria-hidden="true"
          className="fixed inset-0 w-full h-full bg-black/50 cursor-pointer"
        ></div>

        <div className="relative w-full cursor-pointer pointer-events-none transition my-auto p-4">
          <div className="w-full py-2 bg-white cursor-default pointer-events-auto relative rounded-xl mx-auto max-w-sm">
            <Link to="/admin/newsletters">
              <button
                tabIndex="-1"
                type="button"
                className="absolute top-2 right-2 rtl:right-auto rtl:left-2"
              >
                <svg
                  title="Close"
                  tabIndex="-1"
                  className="h-4 w-4 cursor-pointer text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close</span>
              </button>
            </Link>

            <div className="space-y-2 p-2">
              <div className="p-4 space-y-2 text-center">
                <h2
                  className="text-xl font-bold tracking-tight"
                  id="page-action.heading"
                >
                 Unsubscribe 
                </h2>

                <p className="text-gray-500">
                {testimonial.email}
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <div aria-hidden="true" className="border-t px-2"></div>

              <div className="px-6 py-2">
                <div className="grid gap-2 grid-cols-[repeat(auto-fit,minmax(0,1fr))]">

                  <button
                    type="submit"
                    onClick={handleApprove}
                    className="hover:text-black inline-flex items-center justify-center py-1 gap-1 font-medium rounded-lg border transition-colors outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset min-h-[2.25rem] px-4 text-sm text-white shadow focus:ring-white border-transparent bg-green-600 hover:bg-green-500 focus:bg-red-700 focus:ring-offset-red-700"
                  >
                    <span className="flex items-center gap-1">
                      <span className="">Approve</span>
                    </span>
                  </button>

                  <button
                    type="submit"
                    onClick={handleReject}
                    className="hover:text-black inline-flex items-center justify-center py-1 gap-1 font-medium rounded-lg border transition-colors outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset min-h-[2.25rem] px-4 text-sm text-white shadow focus:ring-white border-transparent bg-red-600 hover:bg-red-500 focus:bg-red-700 focus:ring-offset-red-700"
                  >
                    <span className="flex items-center gap-1">
                      <span className="">Reject</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
