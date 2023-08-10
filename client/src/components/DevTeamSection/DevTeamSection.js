import Dev1 from "../../assets/dev-team/dev-image1.png";
import Dev2 from "../../assets/dev-team/dev-image2.png";
import Dev3 from "../../assets/dev-team/dev-image3.png";
import Dev4 from "../../assets/dev-team/dev-image4.png";
export const DevTeamSection = () => {
  return (
    <section className="bg-gray-100 pt-20">
      <div id="our chef" className="max-w-screen-xl mx-auto  px-6">
        <div className="bg-gray-100">
          <div className="max-w-3xl text-center sm:text-center pt-20 md:mx-auto md:mb-12 lg:pt-20">
            <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 text-3xl sm:text-5xl">
              Development Team
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-md leading-7 text-gray-500 font-light">
              Get to know something about the developers.
            </p>
          </div>
        </div>

        <div className="py-10">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between">
            <div className="sm:w-6/12 order-last sm:order-first">
              <ul className="grid grid-cols-2 col-gap-5 row-gap-5 md:col-gap-10 md:row-gap-10">
                <li className="bg-gray-100 p-5 py-10 text-center">
                  <div className="flex flex-col items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="mb-3 rounded-full mx-auto h-24 w-24"
                        src={Dev2}
                        alt="dev2"
                      />
                    </div>
                    <div className="text-center">
                      <h4 className="text-lg leading-6 font-semibold text-gray-900 transition duration-500 ease-in-out">
                        <span className="text-red-600">M</span>el Marx
                      </h4>
                      <p className="text-sm leading-6 text-gray-500 uppercase">
                        Developer
                      </p>
                      <a
                        href="https://www.github.com/kawasaki4life"
                        className="hover:text-red-700 transition duration-500 ease-in-out"
                        target="_blank"
                      >
                        <i className="fa-brands fa-github fa-xl mx-1 my-5"></i>
                      </a>
                      <a
                        href="https://www.facebook.com/melmarxduh"
                        className="hover:text-red-700 transition duration-500 ease-in-out"
                        target="_blank"
                      >
                        <i className="fa-brands fa-facebook fa-xl mx-1 my-5"></i>
                      </a>
                    </div>
                  </div>
                </li>

                <li className="bg-gray-100 p-5 py-10 text-center">
                  <div className="flex flex-col items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="mb-3 rounded-full mx-auto h-24 w-24"
                        src={Dev3}
                        alt="dev3"
                      />
                    </div>
                    <div className="text-center">
                      <h4 className="text-lg leading-6 font-semibold text-gray-900 transition duration-500 ease-in-out">
                      <span className="text-red-600">U</span>lrick Gil
                      </h4>
                      <p className="text-sm leading-6 text-gray-500 uppercase">
                        Developer
                      </p>
                      <a
                        href="https://www.github.com/ulricksanchez"
                        className="hover:text-red-700 transition duration-500 ease-in-out"
                        target="_blank"
                      >
                        <i className="fa-brands fa-github fa-xl mx-1 my-5"></i>
                      </a>
                      <a
                        href="https://www.facebook.com/ulricksanchez"
                        className="hover:text-red-700 transition duration-500 ease-in-out"
                        target="_blank"
                      >
                        <i className="fa-brands fa-facebook fa-xl mx-1 my-5"></i>
                      </a>
                    </div>
                  </div>
                </li>

                <li className="bg-gray-100 p-5 py-10 text-center">
                  <div className="flex flex-col items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="mb-3 rounded-full mx-auto h-24 w-24"
                        src={Dev4}
                        alt="dev4"
                      />
                    </div>
                    <div className="text-center">
                      <h4 className="text-lg leading-6 font-semibold text-gray-900 transition duration-500 ease-in-out">
                      <span className="text-red-600">R</span>ichard
                      </h4>
                      <p className="text-sm leading-6 text-gray-500 uppercase">
                        Team Leader
                      </p>
                      <a
                        href="https://www.github.com/chardtmbng02"
                        className="hover:text-red-700 transition duration-500 ease-in-out"
                        target="_blank"
                      >
                        <i className="fa-brands fa-github fa-xl mx-1 my-5"></i>
                      </a>
                      <a
                        href="https://www.facebook.com/rdltmbng02"
                        className="hover:text-red-700 transition duration-500 ease-in-out"
                        target="_blank"
                      >
                        <i className="fa-brands fa-facebook fa-xl mx-1 my-5"></i>
                      </a>
                    </div>
                  </div>
                </li>

                <li className="bg-gray-100 p-5 py-10 text-center">
                  <div className="flex flex-col items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="mb-3 rounded-full mx-auto h-24 w-24"
                        src={Dev1}
                        alt="dev1"
                      />
                    </div>
                    <div className="text-center">
                      <h4 className="text-lg leading-6 font-semibold text-gray-900 transition duration-500 ease-in-out">
                      <span className="text-red-600">K</span>eith Nomer
                      </h4>
                      <p className="text-sm leading-6 text-gray-500 uppercase">
                        Developer
                      </p>
                      <a
                        href="https://www.github.com/nomerhapa01"
                        className="hover:text-red-700 transition duration-500 ease-in-out"
                        target="_blank"
                      >
                        <i className="fa-brands fa-github fa-xl mx-1 my-5"></i>
                      </a>
                      <a
                        href="https://www.facebook.com/mher003"
                        className="hover:text-red-700 transition duration-500 ease-in-out"
                        target="_blank"
                      >
                        <i className="fa-brands fa-facebook fa-xl mx-1 my-5"></i>
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="text-left mb-10 sm:ml-10 md:ml-24 sm:w-6/12 order-first sm:order-last">
              <h3 className="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900">
                Meet Our <span className="text-red-600">Team</span>
              </h3>
              <p className="mt-4 text-md leading-7 text-gray-500 font-light">
                Working together as a team, we have achieved remarkable
                milestones and overcome numerous challenges. The success we have
                experienced is a direct result of our collective effort,
                collaborative spirit, and unwavering determination. Each member
                of this team has played a vital role in our growth and progress,
                and for that, I am truly grateful.
                <br />
                <br />
                Together we are achieving great things — the work we do matters.
                We are proud of who we are. So tomorrow and the next day and in
                the future, when you feel discouraged or exhausted, you will
                remember what we have achieved and lean in on your team for
                support.
                <br />
                <br />
                Let them make you even hungrier to succeed.
                <br />
                <br />
                <span className="text-red-600 font-semibold">- Murk Technology Solutions -</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
