import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ContactSection = () => {
  const Navigate = useNavigate();
  const url = "https://baylerview-api.onrender.com/api/contacts";

  const [contactmessagedata, setContactMessageData] = useState({
    name: "",
    email: "",
    message: "",
    message_status: "New Message",
  });

  function submitContactMessage(e) {
    e.preventDefault();

    axios
      .post(url, {
        name: contactmessagedata.name,
        email: contactmessagedata.email,
        message: contactmessagedata.message,
        message_status: contactmessagedata.message_status,
      })
      .then(() => {
        alert("Your Message was sent Successfully!");
        Navigate("/");
        
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  function handle(e) {
    const newContactData = { ...contactmessagedata };
    newContactData[e.target.id] = e.target.value;
    setContactMessageData(newContactData);
    console.log(newContactData);
  }


  return (
    <section className="bg-gray-100 pt-10" id="contact">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-4">
          <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
            <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 text-3xl sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-md leading-7 text-gray-500 font-light">
              We're here to help!
            </p>
          </div>
        </div>
        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2">
            <div className="h-full pr-6">
              <p className="mt-3 mb-12 text-lg text-gray-600 font-light">
                Have a question, feedback, or just want to say hello? We'd love
                to hear from you. Please feel free to reach out to us using the
                contact information below or by filling out the contact form.
                Our dedicated team will get back to you as soon as possible.
              </p>
              <ul className="mb-6 md:mb-0">
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-red-500 text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900">
                      Our Address
                    </h3>
                    <p className="text-gray-600 font-light">
                      87 Buton St., Barangay Sabang
                    </p>
                    <p className="text-gray-600 font-light">
                      3200 Baler, Aurora, Philippines
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-red-500 text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                      <path d="M15 7a2 2 0 0 1 2 2"></path>
                      <path d="M15 3a6 6 0 0 1 6 6"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900">
                      Contact
                    </h3>
                    <p className="text-gray-600 font-light">
                      Mobile: +63 927 363 8735 / +63 919 286 3105
                    </p>
                    <p className="text-gray-600 font-light">
                      Mail: info@baylerviewhotel.com
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-red-500 text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M12 7v5l3 3"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900">
                      Operating Hours
                    </h3>
                    <p className="text-gray-600 font-light">Always Open</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="card h-fit max-w-6xl p-5 md:p-12">
              <h2 className="mb-4 text-2xl font-bold">Ready to Get Started?</h2>

              <form onSubmit={(e) => submitContactMessage(e)}>
                <div className="mb-6">
                  <div className="mx-0 mb-1 sm:mb-4">
                    <div className="mx-0 mb-1 sm:mb-4">
                    <input
                        type="text"
                        name="fullname"
                        onChange={(e) => handle(e)}
                        id="name"
                        value={contactmessagedata.name}
                        placeholder="Your Name"
                        className="bg-white mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0"
                      />
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <input
                        type="email"
                        name="email"
                        onChange={(e) => handle(e)}
                        id="email"
                        value={contactmessagedata.email}
                        placeholder="Your email address"
                        className="bg-white mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0"
                      />
                    </div>
                  </div>
                  <div className="mx-0 mb-1 sm:mb-4">
                  <input
                        type="text"
                        name="contactmessage"
                        onChange={(e) => handle(e)}
                        id="message"
                        value={contactmessagedata.message}
                        placeholder="Your Message"
                        className="bg-white mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0"
                      />
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-500 text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
