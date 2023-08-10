import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const MessagesList = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios
      .get('https://baylerview-api.onrender.com/api/contacts')
      .then((response) => {
        setMessages(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const contactmessages = messages.map((message, index) => (
    <tr key={index}>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{message.name}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{message.email}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{message.message_status}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">
          {new Date(message.date).toLocaleString()}
        </div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
      <Link to={`/admin/messages/read/${message._id}`}>
        <button className="mr-1 text-white py-1 px-3 bg-green-600 rounded-sm hover:bg-green-500 hover:text-black">
          Open
        </button>
        </Link>
        <Link to={`/admin/messages/delete/${message._id}`}>
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
                Sender
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Sender Email
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Message Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                date received
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
            {contactmessages}
          </tbody>
        </table>
      </div>
    </>
  );
};
