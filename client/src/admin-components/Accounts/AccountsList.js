import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


export const AccountsList = () => {
  const [accounts, setAccounts] = useState([]);
  const [isOpen, setIsOpen]= useState(false)

  useEffect(() => {
    axios
      .get("https://baylerview-api.onrender.com/api/logins")
      .then((response) => {
        setAccounts(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const accountusers = accounts.map((account, index) => (
    <tr key={index}>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{account.email}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">
          {account.firstname}&nbsp;{account.lastname}
        </div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{account.position}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{account.user_level}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div
          className={`text-sm ${
            account.account_status === "Active"
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          {account.account_status}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">
          {new Date(account.date).toLocaleString()}
        </div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
        <Link to={`/admin/accounts/edit/${account._id}`}>
          <button className="mr-1 text-white py-1 px-3 bg-green-600 rounded-sm hover:bg-green-500 hover:text-black">
            Edit
          </button>
        </Link>
        <Link to={`/admin/accounts/delete/${account._id}`}>
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
                Email
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Position
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Level
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
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {accountusers}
          </tbody>
        </table>
      </div>
    </>
  );
};
