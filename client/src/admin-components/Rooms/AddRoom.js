import { useState } from "react";
import { Link } from "react-router-dom";

export const AddRoom = () => {

  const [successModal, setsuccessModal] = useState(false);

  return (
    <>
      <div className="flex items-center justify-center p-5">
        <div className="mx-auto w-full">
          <form>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <span className="mb-3 block text-sm font-medium text-gray-700">
                    Room Number
                  </span>
                  <input
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-red-600 focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <span className="mb-3 block text-sm font-medium text-gray-700">
                    Room Name
                  </span>
                  <input
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-red-600 focus:shadow-md"
                  />
                </div>
              </div>
            </div>

            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <span className="mb-3 block text-sm font-medium text-gray-700">
                    Description
                  </span>
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-red-600 focus:shadow-md"
                  />
                </div>
              </div>

              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <span className="mb-3 block text-sm font-medium text-gray-700">
                    Description
                  </span>
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-red-600 focus:shadow-md"
                  />
                </div>
              </div>

              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <span className="mb-3 block text-sm font-medium text-gray-700">
                    Description
                  </span>
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-red-600 focus:shadow-md"
                  />
                </div>
              </div>

              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <span className="mb-3 block text-sm font-medium text-gray-700">
                    Amenities
                  </span>
                  <input
                    type="text"
                    name="email"
                    placeholder="Email Address"
                    className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-red-600 focus:shadow-md"
                  />
                </div>
              </div>
            </div>

            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <span className="mb-3 block text-sm font-medium text-gray-700">
                    Maximum Capacity
                  </span>
                  <input
                    type="text"
                    name="password"
                    placeholder="Password"
                    className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-red-600 focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <span className="mb-3 block text-sm font-medium text-gray-700">
                    Stars
                  </span>
                  <input
                    type="text"
                    name="vpassword"
                    placeholder="Verify Password"
                    className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-red-600 focus:shadow-md"
                  />
                </div>
              </div>
            </div>

            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <span className="mb-3 block text-sm font-medium text-gray-700">
                    Work Position
                  </span>
                  <input
                    type="text"
                    name="position"
                    placeholder="Your role in your workplace."
                    className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-red-600 focus:shadow-md"
                  />
                </div>
              </div>

              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <span className="mb-3 block text-sm font-medium text-gray-700">
                    User Access Level
                  </span>
                  <div className="relative">
                    <select
                      type="text"
                      name="user_level"
                      placeholder="Administrator | Standard"
                      className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-red-600"
                    >
                      <option>Standard</option>
                      <option>Administrator</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <span className="mb-3 block text-sm font-medium text-gray-700">
                    Work Position
                  </span>
                  <input
                    type="text"
                    name="position"
                    placeholder="Your role in your workplace."
                    className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-red-600 focus:shadow-md"
                  />
                </div>
              </div>

              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <span className="mb-3 block text-sm font-medium text-gray-700">
                    User Access Level
                  </span>
                  <div className="relative">
                    <select
                      type="text"
                      name="user_level"
                      placeholder="Administrator | Standard"
                      className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-red-600"
                    >
                      <option>Standard</option>
                      <option>Administrator</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-5">
              <span className="mb-3 block text-sm font-medium text-gray-700">
                Account Status
              </span>
              <div className="relative">
                <select
                  type="text"
                  name="account_status"
                  placeholder="Active | In-Active"
                  className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-red-600"
                >
                  <option>Active</option>
                  <option>Inactive</option>
                  <option>Deleted</option>
                </select>
              </div>
            </div>

          </form>

          {successModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-300">
              <div className="bg-white w-1/3 py-4 px-8 rounded shadow-md text-center">
                <p className="text-green-500 text-lg font-semibold mb-4">
                  Record Added Successfully!
                </p>
                <p>You will be redirected to the Accounts shortly...</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
