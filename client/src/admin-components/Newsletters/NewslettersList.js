import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const NewslettersList = () => {
  const [newsletters, setNewsletters] = useState([]);

  useEffect(() => {
    axios
      .get("https://baylerview-api.onrender.com/api/newsletters")
      .then((response) => {
        setNewsletters(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const displayNewsletters = newsletters.map((newsletter, index) => (
    <tr key={index}>

      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{newsletter.email}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{newsletter.subscription}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{newsletter.date}</div>
      </td>
  
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <Link to={`/admin/newsletters/update/${newsletter._id}`}>
        <button className="text-white py-1 px-3 bg-green-600 hover:bg-green-500 rounded-sm hover:text-black">
          Update
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
                Email Address
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Subscription
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
            {displayNewsletters}
          </tbody>
        </table>
      </div>
    </>
  );
};
