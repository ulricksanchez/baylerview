import { useState, useEffect } from "react";
import axios from "axios";

export const SuiteRoomList = () => {
    const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios
      .get("https://baylerview-api.onrender.com/api/rooms")
      .then((response) => {
        setRooms(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const displayFeaturedRooms = rooms
    .filter((room) => room.room_type === "Suite") //####### change room type here #######
    .map((room, index) => (
        
        <tr key={index}>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{room.name}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{room.description}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{room.capacity}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{room.room_type}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{room.stars}</div>
      </td>
  
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <button className="mr-1 text-white py-1 px-3 bg-green-600 hover:bg-green-500 rounded-sm hover:text-black">
          Open
        </button>
        <button className="ml-1 text-white py-1 px-3 bg-red-600 hover:bg-red-500 rounded-sm hover:text-black">
          Trash
        </button>
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
                Room Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Description
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
               Capacity
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
               Type 
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
               Ratings 
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
            {displayFeaturedRooms}
          </tbody>
        </table>
      </div>
    </>
  );
};
