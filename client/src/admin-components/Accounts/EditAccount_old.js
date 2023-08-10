import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export const EditAccount_old = () => {
  const { id } = useParams(); // Get the account ID from the URL parameter
  const [account, setAccount] = useState(null);

  useEffect(() => {
    // Fetch the account data from the API using the account ID
    axios
      .get(`https://baylerview-api.onrender.com/api/logins/${id}`)
      .then((response) => {
        setAccount(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    console.log(inputValue);
  };

  if (!account) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full">
          <form>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="fName"
                    className="mb-3 block text-sm font-medium text-gray-400"
                  >
                    Firstname
                  </label>
                  <input
                    type="text"
                    name="fName"
                    id="fName"
                    placeholder="First Name"
                    defaultValue={account.firstname}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="lName"
                    className="mb-3 block text-sm font-medium text-gray-400"
                  >
                    Lastname
                  </label>
                  <input
                    type="text"
                    name="lName"
                    id="lName"
                    placeholder="Last Name"
                    defaultValue={account.lastname}
                    className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>

            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="fName"
                    className="mb-3 block text-sm font-medium text-gray-400"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    defaultValue={account.username}
                    className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="lName"
                    className="mb-3 block text-sm font-medium text-gray-400"
                  >
                    Email Address
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    defaultValue={account.email}
                    className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>

            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="fName"
                    className="mb-3 block text-sm font-medium text-gray-400"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    defaultValue={account.password}
                    className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="vpassword"
                    className="mb-3 block text-sm font-medium text-gray-400"
                  >
                    Verify Password
                  </label>
                  <input
                    type="password"
                    name="vpassword"
                    id="vpassword"
                    placeholder="Verify Password"
                    defaultValue={account.password}
                    className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>

            <div className="mb-5">
              <label
                htmlFor="position"
                className="mb-3 block text-sm font-medium text-gray-400"
              >
                Position
              </label>
              <input
                type="text"
                name="position"
                id="position"
                placeholder="Position"
                defaultValue={account.position}
                className="w-full appearance-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-sm font-medium text-gray-400">
                    Account Type
                  </label>
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="acctype"
                        id="acctype1"
                        className="h-5 w-5"
                      />
                      <label
                        htmlFor="radioButton1"
                        className="pl-3 text-base font-medium"
                      >
                        Administrator
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="acctype"
                        id="acctype2"
                        className="h-5 w-5"
                      />
                      <label
                        htmlFor="radioButton2"
                        className="pl-3 text-base font-medium"
                      >
                        Standard
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-sm font-medium text-gray-400">
                    Account Status
                  </label>
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="accstatus"
                        id="accstatus1"
                        className="h-5 w-5"
                      />
                      <label
                        htmlFor="radioButton1"
                        className="pl-3 text-base font-medium"
                      >
                        Active
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="accstatus"
                        id="accstatus2"
                        className="h-5 w-5"
                      />
                      <label
                        htmlFor="radioButton2"
                        className="pl-3 text-base font-medium"
                      >
                        Inactive
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button type="submit" onClick={handleClick} className="hover:shadow-form rounded-md bg-red-600 py-3 px-8 text-center text-base font-semibold text-white outline-none">
                Update
              </button>
              <Link to="/admin/accounts">
              <button className="hover:bg-red-500 rounded-md bg-red-600 py-3 px-8 text-center text-base font-semibold text-white outline-none mx-3">
                Back
              </button>
              </Link>

            </div>
          </form>
        </div>
      </div>
    </>
  )
}
